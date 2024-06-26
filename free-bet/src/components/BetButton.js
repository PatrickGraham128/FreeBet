import React, { useState } from 'react';

export const BetButton = ({odds, betId, defaultState}) => {
  const [active, setActive] = useState(defaultState)

  const handleClick = (e) => {
    e.stopPropagation();
    if (odds = null) return;
    let slip = JSON.parse(localStorage.getItem("slip"));
    (active) ? slip = slip.filter(e => e != betId) : slip.push(betId);
    setActive(!active);
    localStorage.setItem("slip", JSON.stringify(slip));
  }

  return (
      <>
        <button 
          className={active ? 'bet-button + clicked' : 'bet-button'}
          onClick={(e) => handleClick(e)}
        >{odds !== "NULL" ? Number(odds).toFixed(2) : 'N/A'}
        </button>
      </>
  )
}
