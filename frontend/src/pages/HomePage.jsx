
import React from 'react'
import NavBar from '../components/NavBar'
import Limiter from '../components/Limiter.jsx';
import { useState , useEffect} from 'react';
import axios from 'axios';

const HomePage = () => {
  const [isLimiter, setLimiter] = useState(false);
  const [setTasks, isTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/tasks');
        const datas = res.data;
        console.log(datas);
        isTasks(datas);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching tasks:', error);
        if (error.response && error.response.status === 429){
          setLimiter(true);
        }
      }

    }
    fetchTask();
  },[]);



  return (
    <div className='min-h-screen'>
      <NavBar/>

      {isLimiter && <Limiter />}
      
    </div>
  )
}

export default HomePage
