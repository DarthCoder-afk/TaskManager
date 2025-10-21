
import React from 'react'
import NavBar from '../components/NavBar'
import Limiter from '../components/Limiter';
import { useState , useEffect} from 'react';

const HomePage = () => {
  const [isLimiter, setLimiter] = useState(false);

  return (
    <div className='min-h-screen'>
      <NavBar/>

      {isLimiter && Limiter}
      
    </div>
  )
}

export default HomePage
