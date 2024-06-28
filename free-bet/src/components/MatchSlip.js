import React, { useEffect, useState } from 'react';
import * as logos from "./logos.json";
import { LegSlip } from './LegSlip';

export const MatchSlip = ({match, slip}) => {
  return(
    <>
      <div className='slip-container'>
        <div className="match-slip-container">
          <div className="match-slip-head">
          <div className='logo' style={{backgroundImage: logos[slip[match]["h2h"]]}} />
            <div className="h2h-winner">{slip[match]["h2h"]}</div>
          </div>
            {slip[match]["legs"].map((l, i) => <LegSlip player={l.split("_")[0]} goal={l.split("_")[1]}></LegSlip>)}
        </div>
      </div>
    </>
  )
}