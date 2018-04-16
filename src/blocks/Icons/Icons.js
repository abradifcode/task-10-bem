import React from 'react';
import { decl } from 'bem-react-core';

export default decl({
    block: 'Icons',
    content() {
      return (
        <div className="Icons">
          <svg>
            <symbol id="dots" viewBox="0 0 14 4" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><circle cx="2" cy="2" r="2"/><circle cx="7" cy="2" r="2"/><circle cx="12" cy="2" r="2"></circle></g></symbol>

            <symbol id="heart" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg"><path d="M9 16C3 11.43 0 7.597 0 4.5 0 2.015 2.239 0 5 0c1.636 0 3.088.707 4 1.8C9.912.707 11.364 0 13 0c2.761 0 5 2.015 5 4.5 0 2.96-3 6.793-9 11.5z" fill="currentColor"></path></symbol>
          </svg>
        </div>
      );
    }
});
