import React from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../../img/pokeball.png';
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-title">PickyDex</div>
        <div className="nav-links">
          <Link to="/">
            <img src={pokeball} alt="pokeball" className="header-pic"/>
          </Link>
        </div>
      </div>
      <SearchBox/>
    </div>

  )
}
export default  Header