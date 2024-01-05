import React from 'react'

function Header() {
  return (
    <nav>
        <div className='nav-logo d-flex'>
            <img className='nav-img' src={`../images/Troll.png`} alt="" />
            <h3>Meme Generator</h3>
        </div>
        <div>
            React Course - Project 3
        </div>
    </nav>
  )
}

export default Header