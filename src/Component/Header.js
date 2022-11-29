import React from 'react'

function Header() {
 
  return (
    <>
    <div className='header'>
      <h1>Memory Card Game</h1>
      <strong>Get points by clicking on an image but don't click on any more than once!</strong><br />
    </div>
    </>
  )
}

export default React.memo(Header)
