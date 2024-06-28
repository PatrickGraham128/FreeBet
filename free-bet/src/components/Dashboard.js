import React, { useEffect, useState } from 'react';
import api from './api'
import { MatchCard } from './MatchCard';
import { Navbar } from './Navbar';

export const Dashboard = () => {
  const [matches, setMatches] = useState([])
  if (!localStorage.getItem('slip')) {
    localStorage.setItem('slip', JSON.stringify({}))
  }

  const fetchInfo = async () => {
    return api.get(`/odds/?time=${(new Date(Date.now())).toISOString().replace("T", " ").substring(0, 19)}`)
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
