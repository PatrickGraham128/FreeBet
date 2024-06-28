import React from 'react';
import { BetButton } from './BetButton';

export const PlayerCard = ({match, playerOdds, type}) => {
  const playerName = playerOdds[1]

  return (
    <tr>
        <td>
        <div className='player-name'>{playerName}</div>
        </td>
        <td>
        <BetButton 
            odds={playerOdds[2]}
            betId={match + "_" + playerName + "_" + type + '1'} />
        </td>
        <td>
        <BetButton 
            odds={playerOdds[3]}
            betId={match + "_" + playerName + "_" + type + '2'} />
        </td>
        <td>
        <BetButton 
            odds={playerOdds[4]}
            betId={match + "_" + playerName + "_" + type + '3'} />
        </td>
        <td>
        <BetButton 
            odds={playerOdds[5]}
            betId={match + "_" + playerName + "_" + type + '4'} />
        </td>
        <td>
        <BetButton 
            odds={playerOdds[6]}
            betId={match + "_" + playerName + "_" + type + '5'} />
        </td>
        <td>
        <BetButton 
            odds={playerOdds[7]}
            betId={match + "_" + playerName + "_" + type + '6'} />
        </td>
    </tr>
  )
}
