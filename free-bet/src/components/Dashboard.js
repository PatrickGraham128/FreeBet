import React, { useEffect, useState } from 'react';
import api from './api'

export const Dashboard = () => {
  const [matches, setMatches] = useState([])

  const fetchInfo = async () => {
    return api.get('/')
  }

  useEffect(() => {
    fetchInfo().then(res => {
      setMatches(res.data.matches)
      console.log(res.data.matches[0])
    })
  }, []);

  return (<>
    <div className='games'>
    </div>
  </>)
}
