import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const PlayerCard = ({playerOdds}) => {
  const playerName = playerOdds[1]


  return (
    <div className='player-card-container'>
      <div className='player-name'>{playerName}</div>
      <button className='bet-button'>{playerOdds[2] == 'NULL' ? 'N/A' : playerOdds[2]}</button>
      <button className='bet-button'>{playerOdds[3] == 'NULL' ? 'N/A' : playerOdds[3]}</button>
      <button className='bet-button'>{playerOdds[4] == 'NULL' ? 'N/A' : playerOdds[4]}</button>
      <button className='bet-button'>{playerOdds[5] == 'NULL' ? 'N/A' : playerOdds[5]}</button>
      <button className='bet-button'>{playerOdds[6] == 'NULL' ? 'N/A' : playerOdds[6]}</button>
      <button className='bet-button'>{playerOdds[7] == 'NULL' ? 'N/A' : playerOdds[7]}</button>
    </div>
  )
}
