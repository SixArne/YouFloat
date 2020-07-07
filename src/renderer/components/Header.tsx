import React, {FunctionComponent, useContext, useState} from 'react';
import {YoutubeContext} from '../services';

import './Header.scss';

const Header: FunctionComponent = () => {
 const [query, setQuery] = useState<string>('');
 const {searchVideosByQuery} = useContext(YoutubeContext);

 return (
  <div className="page-landing-header">
   <input
    className="page-landing-header-input"
    placeholder="Enter search query..."
    onChange={(e) => setQuery(e.target.value)}
    type="text"
   />
   <button
    className="page-landing-header-button"
    onClick={() => searchVideosByQuery(query)}
   > SEARCH
   </button>
  </div>
 )
}

export default Header;
