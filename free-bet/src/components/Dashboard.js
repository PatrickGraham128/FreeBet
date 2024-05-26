import React, { useEffect, useState } from 'react';
import api from './api'
import { MatchCard } from './MatchCard';
import { Navbar } from './Navbar';

export const Dashboard = () => {
  const [matches, setMatches] = useState([])
  const startSlip = {
    matches: {}
  }
  localStorage.setItem('slip', startSlip)

  const fetchInfo = async () => {
    return api.get('/odds')
  }

  const fetchDisposals = async () => {
    return api.get('/disposals/?id=8250389')
  }

  fetchDisposals().then(res => {
    console.log(res)
  })

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
