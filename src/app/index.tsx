import { h, render } from 'preact';
// import { authSync } from './core/auth';
// import { cognitoAuth } from './core/amplify';
import { App } from './App';

// authSync();
import('./core/amplify').then(amplify => {
  amplify.cognitoAuth();
  render(<App />, document.body);
});
