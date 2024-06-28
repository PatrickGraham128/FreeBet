import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { MatchSlip } from './MatchSlip';

export const SlipPage = () => {
  const slip = JSON.parse(localStorage.getItem('slip'));
  const matches = Array.from(Object.keys(slip))
  
  return (
<>
  <Navbar />
  <div className='page'>
    <div className='content-container'>
      <div className='slip-container'>
        <h3 style={{marginBottom: '10px'}}>{'Slip'}</h3>
        {
          matches.map((m, i) => <MatchSlip match={m} slip={slip}/>)
        }
      </div>
    </div>
  </div>
  </>
  )
}