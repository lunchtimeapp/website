import { FunctionalComponent, h } from 'preact';
import * as style from './style.css';

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
      <p>
        <em>NOTE: This app is a work in progress...</em>
      </p>
      <p>
        <a href="privacy.html">Privacy Policy</a>
      </p>
    </div>
  );
};

export default Home;
