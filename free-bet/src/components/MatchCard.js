import React, { act } from 'react';
import { useNavigate } from 'react-router-dom'
import { BetButton } from './BetButton';
import * as logos from "./logos.json";

export const MatchCard = ({match}) => {
  const navigate = useNavigate();
  const id1 = match['matchId'].toString() + '1';
  const id2 = match['matchId'].toString() + '2';
  const activeBets = JSON.parse(localStorage.getItem('slip')).filter(e => e == id1 || e == id2 )

  const team1 = Object.keys(match)[1];
  const team2 = Object.keys(match)[2];

  return (
    <div className='match-card-container' onClick={() => navigate(`/match/${Object.values(match)[0]}`)}>
      <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 10px 10px'}}>
        <div style={{display: 'flex', gap: '10px'}}>
          <div className='logo' style={{backgroundImage: logos[team1]}} />
          <span className='team-name'>{team1}</span>
        </div>
        <BetButton 
          odds={match[team1]}
          betId={id1}
          defaultState={activeBets.includes(id1)}
        ></BetButton>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
        <div style={{display: 'flex', gap: '10px'}}>
          <div className='logo' style={{backgroundImage: logos[team2]}} />
          <span className='team-name'>{team2}</span>
        </div>
        <BetButton 
          odds={match[team2]}
          betId={id2}
          defaultState={activeBets.includes(id2)}
        ></BetButton>
      </div>
    </div>
  )
}
