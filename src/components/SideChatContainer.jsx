import React from 'react'



const SideChatContainer = ({ props }) => {
    return (
        <div className='individualChats'>
            <div className="userProfile">
                {props.profile}
            </div>
            <div className="textInfo">
                <div className="userName">
                    {props.name}
                </div>
                <div className="last">
                    {props.lastText}
                </div>
            </div>
        </div>
    )
}

export default SideChatContainer;