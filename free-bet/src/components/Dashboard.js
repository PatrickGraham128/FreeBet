import React, { useEffect, useState } from 'react';
import api from './api'
import { MatchCard } from './MatchCard';

export const Dashboard = () => {
  const [matches, setMatches] = useState([])

  const fetchInfo = async () => {
    return api.get('/')
  }

  useEffect(() => {
    fetchInfo().then(res => {
      setMatches(res.data.matches)
    })
  }, []);

  return (<>
    <div className='games'>
      {
        matches.map((m, i) => <MatchCard match={m} />)
      }
    </div>
  </>)
}
