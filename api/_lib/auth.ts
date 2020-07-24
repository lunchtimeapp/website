import { Context, HttpRequest } from '@azure/functions';
import { verify, VerifyOptions, JwtHeader, SigningKeyCallback } from 'jsonwebtoken';
import * as jwksRsa from 'jwks-rsa';
import { parseJwtOptions, readJwksUri } from './env-vars';

const AUTHZ_HEADER = 'authorization';

function getKey(header: JwtHeader, callback: SigningKeyCallback) {
    // Verify using getKey callback
    // Example uses https://github.com/auth0/node-jwks-rsa as a way to fetch the keys.
    var client = jwksRsa({ jwksUri: readJwksUri() });
    client.getSigningKey(header.kid, function (err, key) {
        err ? callback(err) : callback(null, key.getPublicKey());
    });
}

export async function auth(context: Context, req: HttpRequest) {

    const authzHeader = req.headers[AUTHZ_HEADER];

    if (!authzHeader || !/^Bearer [a-z0-9-_.]+$/gi.test(authzHeader)) {
        context.res = {
            status: 401,
            body: `Authorization required by passing a bearer token in the ${AUTHZ_HEADER} header.`
        };
        context.log.warn('Auth failed; missing bearer token');
        return false;
    }

    const options: VerifyOptions = { ...parseJwtOptions() };

    function authOptionError(error: string) {
        throw new Error(`Auth option error: ${error}`);
    }

    if (!options.algorithms || options.algorithms.length === 0)
        authOptionError('At least one algorithm must be defined.');

    // Extract the JWT part from the bearer token header.
    const jwt = authzHeader.substr(7);

    return new Promise<boolean>((resolve, reject) => {
        verify(jwt, getKey, options, (err, decoded) => {
            if (err) {
                context.res = {
                    status: 201,
                    body: err.toString()
                };
                context.log.warn('Auth failed:', err);
                resolve(false);
            }
            context.log.info('Auth context:', decoded);
            resolve(true);
        });
    });
}