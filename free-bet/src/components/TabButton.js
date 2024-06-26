import React, { useState } from 'react';

export const TabButton = ({label, handleClick, active}) => {
  return (
      <>
        <button 
          className={active ? 'bet-button + tab-button + clicked' : 'bet-button + tab-button'}
          onClick={(e) => {handleClick(e)}}
        >{label}
        </button>
      </>
  )
}
