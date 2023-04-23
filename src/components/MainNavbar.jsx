import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const MainNavbar = () => {
  return (
    <div className='MainNavbar'>
      <div className='chatIcon'>
        <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
      </div>
      <div className="chatName">
        name
      </div>
      <div className="searchIcon">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default MainNavbar;