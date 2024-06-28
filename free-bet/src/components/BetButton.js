import React, { useState } from 'react';

export const BetButton = ({odds, betId, defaultState}) => {
  const [active, setActive] = useState(defaultState)

  const handleClick = (e) => {
    e.stopPropagation();
    if (odds = null) return;
    let slip = JSON.parse(localStorage.getItem("slip"));
    let mid = betId.split("_")[0]
    if (!slip[mid]) slip[mid] = {"h2h": "", "legs": []}

    // a h2h bet has two _ separated fields, a disposal/goal leg has three
    if (betId.split("_").length === 2) {
      const tip = betId.split("_")[1];
      if (slip[mid]["h2h"] !== tip) {
        slip[mid]["h2h"] = tip;
      } else {
        slip[mid]["h2h"] = "";
      }
    } else {
      const leg = betId.substring(8, betId.length);
      if (!slip[mid]["legs"].includes(leg)) {
        slip[mid]["legs"].push(leg);
      } else {
        slip[mid]["legs"] = slip[mid]["legs"].filter(l => l != leg);
      }
    }
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
