import * as React from 'react';

// Components
import { Link, LinkBack } from 'libraries/components/Link';

// Stylings
import s from './styles.scss';
import { store } from 'data/store';

function Home() {
  // Start creating your awesome app here
  const keywords = ['iphone', 'sports', 'laptops', 'boba'];
  return (
    <div className={s.wrapper}>
      {keywords.map((keyword) => (
        <Link to={`/Swipe?keyword=${keyword}`}>
          <button className={s.keywords}>{keyword}</button>
        </Link> 
      ))}
    </div>
  );
}

export default Home;
