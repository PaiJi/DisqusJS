import ReactDOM from 'react-dom/client';
import { DisqusJS } from '../../src'

const container = document.getElementById('app');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <DisqusJS
      shortname="sukas-blog"
      siteName="Sukka's Blog · 苏卡卡的博客"
      identifier="https://suka.js.org/DisqusJS/"
      url="https://suka.js.org/DisqusJS/"
      api="https://disqus.skk.moe/disqus/"
      apikey="G2amHmorq3wJVjaviRo3YNWPgsKkAm7IolUWQKLeyQNd7lb3GtgWNnh6RgFFIwO9"
      admin="SukkaW"
      adminLabel="苏卡卡~"
    />
  );
}