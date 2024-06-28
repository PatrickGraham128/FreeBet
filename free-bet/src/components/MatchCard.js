import React, { act } from 'react';
import { useNavigate } from 'react-router-dom'
import { BetButton } from './BetButton';
import * as logos from "./logos.json";

export const MatchCard = ({match}) => {
  const navigate = useNavigate();
  const slip = JSON.parse(localStorage.getItem('slip'))[match[0]];
  let currBet = (slip) ? slip[match[0]]["h2h"] : "";

  const team1 = Object.keys(match)[1];
  const team2 = Object.keys(match)[2];

  const id1 = match['matchId'].toString() + '_' + team1;
  const id2 = match['matchId'].toString() + '_' + team2;

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
          defaultState={currBet == team1}
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
          defaultState={currBet == team2}
        ></BetButton>
      </div>
    </div>
  )
}
