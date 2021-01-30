import * as React from 'react';

// Components
import { Link, LinkBack } from 'libraries/components/Link';

// Stylings
import s from './styles.scss';
import { store } from 'data/store';

function Home() {
  // Start creating your awesome app here
  const keywords = ['iPhone', 'Sports', 'Laptops', 'Boba', 'Home', 'TV', 'Shoes', 'Fashion', 'Books', 'Travel', 'Makeup', 'Noodle', 'Bags', 'Keyboards', 'Software', 'Sandals', 'School', 'Dining', 'Appliances', 'Voucher'];
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
