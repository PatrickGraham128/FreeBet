import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from './api';
import { PlayerCard } from './PlayerCard';
import { Navbar } from './Navbar';

export const MatchPage = () => {
  const { id } = useParams();
  const [disposals, setDisposals] = useState([]);
  const [goals, setGoals] = useState([]);

  const fetchDisposals = async () => {
    return api.get(`/disposals/?id=${id}`)
  }

  const fetchGoals = async () => {
    return api.get(`/goals/?id=${id}`)
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
        {'Disposal Markets'} 
        {
          disposals.map((d, i) => <PlayerCard playerOdds={d} />)
        }
    </div>
    <div className='players'>
        {'Goal Markets'}
        {
          goals.map((d, i) => <PlayerCard playerOdds={d} />)
        }
    </div>
  </div>
  </>)
}
