import createAuth0Client from '@auth0/auth0-spa-js';

const audience = 'LunchtimeApp';
const domain = process.env.AUTH_DOMAIN || 'lunchtimeapp.auth.us-west-2.amazoncognito.com/oauth2';
const client_id = process.env.AUTH_CLIENT_ID || '1oln8d2587ed15os0s6k3j80km';
const redirect_uri = `${location.protocol}//${location.host}/app/index.html`;
console.log('redirect_uri', redirect_uri);

export async function auth() {
  const cognito = await createAuth0Client({
    domain,
    client_id,
    redirect_uri
  });
  if (!cognito.isAuthenticated()) {
    cognito.loginWithRedirect();
  }
  const token = await cognito.getTokenSilently();
  debugger;
}

export const authSync = () => auth();
