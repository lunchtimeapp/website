import { Amplify, Auth, Hub } from 'aws-amplify';
import { AMPLIFY_CONFIG } from './amplify-config'

/**
 * NOTE: For using Cognito and PKCE flow for SPAs, you will need to create a user pool app client without a secret id.
 */

Amplify.configure(AMPLIFY_CONFIG);

let hasAuthFailure = false;

Hub.listen("auth", ({ payload: { event, data } }) => {
  if (event.endsWith('_failure')) {
    hasAuthFailure = true;
  }
  switch (event) {
    case "signIn":
      console.log('Signed in user:', data);
      break;
    case 'signIn_failure':
      console.error(data);
      break;
    case 'customState_failure':
      console.error(data);
      break;
    case "signOut":
      console.log('Signed out');
      break;
    case "customOAuthState":
      console.log('Custom OAuth State:', data);
      break;
    default:
      console.log(`'${event}' event:`, data);
  }
});

export function cognitoAuth() {
  Auth.currentAuthenticatedUser()
    .then(user => {
      console.log('User:', user);
    })
    .catch(e => {
      console.warn("Not signed in:", e);
      if (!hasAuthFailure) {
        debugger;
        Auth.federatedSignIn();
      }
    });
}
