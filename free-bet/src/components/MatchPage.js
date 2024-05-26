import React, { useEffect, useState } from 'react';
import api from './api'
import { PlayerCard } from './PlayerCard';
import { Navbar } from './Navbar';

export const MatchPage = () => {
  const [disposals, setDisposals] = useState([]);

  const fetchDisposals = async () => {
    return api.get('/disposals/?id=8250389')
  }

  useEffect(() => {
    fetchDisposals().then(res => {
      setDisposals(res.data)
    })
  }, []);

  return (<>
  <Navbar />
  <div className='page'>
    <div className='players'>
        {
          disposals.map((d, i) => <PlayerCard playerOdds={d} />)
        }
    </div>
  </div>
  </>)
}
