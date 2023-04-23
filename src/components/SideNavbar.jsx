import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const SideNavbar = () => {
  return (
    <div className='SideNavbar'>

      <div className='userIcon'>
        <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
      </div>
      <div className='userInfo'>
        <p>Yodahe</p>
        <h6>0983325216</h6>
      </div>

      <div className="logBtn">
        <button>
          log Out
        </button>
      </div>
    </div>
  )
}

export default SideNavbar;