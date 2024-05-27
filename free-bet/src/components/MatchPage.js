import React, { useEffect, useState } from 'react';
import api from './api'
import { PlayerCard } from './PlayerCard';
import { Navbar } from './Navbar';

export const MatchPage = () => {
  const [disposals, setDisposals] = useState([]);
  const [goals, setGoals] = useState([]);

  const fetchDisposals = async () => {
    return api.get(`/disposals/?id=${mid}`)
  }

  const fetchGoals = async () => {
    return api.get(`/goals/?id=${mid}`)
  }

  useEffect(() => {
    fetchDisposals().then(res => {
      setDisposals(res.data)
    })
    fetchGoals().then(res => {
      setGoals(res.data)
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
