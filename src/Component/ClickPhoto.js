import React , {useState} from 'react'
import Score from './Score';

function ClickPhoto() {

  const [score,setscore] =useState(0);
  
  return (
    <div className='clickPhoto'>
      <div className='row'>
        <div className='col'>
            <img src={require('./Images/Ben10-1st (copy).jpg')} alt='1photo' onClick={()=>setscore(score+1)}></img>
        </div>
        <div className='col'>
            <img src={require('./Images/Ben10-2nd.jpg')} alt='2photo' onClick={()=>setscore(score+1)}></img>
        </div>
        <div className='col'>
            <img src={require('./Images/Ben10-3rd.jpg')} alt='3photo' onClick={()=>setscore(score+1)}></img>
        </div>
        <div className='col'>
            <img src={require('./Images/Ben10-4th.jpg')} alt='4photo' onClick={()=>setscore(score+1)}></img>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
            <img src={require('./Images/Ben10-5th.jpg')} alt='5photo' onClick={()=>setscore(score+1)}></img>
        </div>
        <div className='col'>
            <img src={require('./Images/Ben10-6th.jpg')} alt='6photo' onClick={()=>setscore(score+1)}></img>
        </div>
        <div className='col'>
            <img src={require('./Images/Ben10=7th.jpg')} alt='7photo' onClick={()=>setscore(score+1)}></img>
        </div>
        <div className='col'>
            <img src={require('./Images/Ben10-8th.jpg')} alt='8photo' onClick={()=>setscore(score+1)}></img>
        </div>
      </div>
      <Score score={score} bestscore={score}/>
    </div>
  )
}

export default ClickPhoto
