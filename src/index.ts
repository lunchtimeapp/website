import './style/index.css';
import App from './components/app';

if (typeof window !== 'undefined') {
  import(/* webpackChunkName: "amplify" */ './core/amplify').then(amplify => {
    amplify.cognitoAuth();
  });
}

export default App;
