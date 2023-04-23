import React from 'react';
import "../index.scss";
import SideChatContainer from './SideChatContainer';
import SideNavbar from './SideNavbar';
const arr = [
  {
    name: "Abel",
    profile: null,
    lastText: "Okay ill be there",
  },
  {
    name: "Eyael",
    profile: null,
    lastText: "i wont be there",
  },
  {
    name: "Eyael",
    profile: null,
    lastText: "i wont be there",
  },
  {
    name: "Eyael",
    profile: null,
    lastText: "i wont be there",
  }
]

const SideBar = () => {
  return (
    <div className='sidebar'>
      <SideNavbar />
      <div className="chatContainer">
        {arr.map(element => {
          return <SideChatContainer props = {element} />;
        })}
      </div>
    </div>
  )
}

export default SideBar