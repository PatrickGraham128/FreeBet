import React from 'react';
import { BetButton } from './BetButton';

export const PlayerCard = ({playerOdds, type}) => {
  const playerName = playerOdds[1]

  return (
    <tr>
        <td>
        <div className='player-name'>{playerName}</div>
        </td>
        <td>
        <BetButton 
            odds={playerOdds[2]}
            betId={playerName + type + '1'} />
        </td>
        <td>
        <BetButton 
            odds={playerOdds[3]}
            betId={playerName + type + '2'} />
        </td>
        <td>
        <BetButton 
            odds={playerOdds[4]}
            betId={playerName + type + '3'} />
        </td>
        <td>
        <BetButton 
            odds={playerOdds[5]}
            betId={playerName + type + '4'} />
        </td>
        <td>
        <BetButton 
            odds={playerOdds[6]}
            betId={playerName + type + '5'} />
        </td>
        <td>
        <BetButton 
            odds={playerOdds[7]}
            betId={playerName + type + '6'} />
        </td>
    </tr>
  )
}
