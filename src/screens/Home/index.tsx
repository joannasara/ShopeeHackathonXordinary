import * as React from 'react';

// Components
import { Link, LinkBack } from 'libraries/components/Link';

// Stylings
import './styles.scss';

function Home() {
  // Start creating your awesome app here
  const keywords = ['iphone', 'sports'];
  return (
    <div>
      <LinkBack>Back</LinkBack>

      <br />
      <br />

      <Link to='/demo' replace>
        Open Demo App
      </Link>

      <br />
      <br />

      <div>
        Hello World! 
        {
          keywords.map(keyword => <Link to={`/Swipe?keyword=${keyword}`}>
            <button>{keyword}</button>
          </Link> )
        }
      </div>
    </div>
  );
}

export default Home;
