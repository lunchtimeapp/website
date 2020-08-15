export const AUTH_JWKS_URI = 'APP_AUTH_JWKS_URI';

export function readJwksUri() {
  const uri = process.env[AUTH_JWKS_URI];
  if (!uri) {
    throw new Error(`Cannot read JWKS URI from environment variable ${AUTH_JWKS_URI}`);
  }
  return uri;
}

export const AUTH_JWT_OPTIONS = 'APP_AUTH_JWT_VALIDATION_OPTIONS';

export function parseJwtOptions() {
  try {
    const options = process.env[AUTH_JWT_OPTIONS];
    if (!options) {
      throw new Error('No JSON defined.');
    }
    const parsed = JSON.parse(options);
    if (!((!!parsed) && (parsed.constructor === Object))) {
      throw new Error('Not an object.');
    }
    return parsed;
  }
  catch (e) {
    throw new Error(`Cannot parse JSON object from environment variable ${AUTH_JWT_OPTIONS}: ${e.toString()}`);
  }
}
