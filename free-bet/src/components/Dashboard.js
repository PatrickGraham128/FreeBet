import React, { useEffect, useState } from 'react';
import api from './api'
import { MatchCard } from './MatchCard';
import { Navbar } from './Navbar';

export const Dashboard = () => {
  const [matches, setMatches] = useState([])

  const fetchInfo = async () => {
    return api.get('/odds')
  }

  useEffect(() => {
    fetchInfo().then(res => {
      setMatches(res.data.matches)
    })
  }, []);

  return (<>
  <Navbar />
  <div className='page'>
    <div className='games'>
        {
          matches.map((m, i) => <MatchCard match={m} />)
        }
    </div>
  </div>
  </>)
}
