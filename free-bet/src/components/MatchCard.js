import React, { useEffect, useState } from 'react';

const logos = {
  'Adelaide': 'url(https://www.sportsbet.com.au/images/50_adelaide@2x-4c6eed5d8ac52ee3a295972b27a7e5e9.png)',
  'Brisbane': 'url(https://www.sportsbet.com.au/images/50_brisbane@2x-26cf7ede8d8cbac6b867c4c091ffb4f0.png',
  'Carlton': 'url(https://www.sportsbet.com.au/images/50_carlton@2x-eb06aad0bce6233a6ff3e40fbbe39996.png)',
  'Collingwood': 'url(https://www.sportsbet.com.au/images/50_collingwood@2x-1cd3b878ce31e786c64f7e722cfe1999.png)',
  'Essendon': 'url(https://www.sportsbet.com.au/images/50_essendon@2x-22268b2260f8f09d991c129745c1d85a.png)',
  'Fremantle': 	'url(https://www.sportsbet.com.au/images/50_fremantle@2x-3649916dc02620f5fb6cbc3efaa4cdb9.png)',
  'Geelong': 'url(https://www.sportsbet.com.au/images/50_geelong@2x-c5cd20b3cc50f523b649a7f21f198bf7.png)',
  'Gold Coast': 'url(https://www.sportsbet.com.au/images/50_gold_coast@2x-b635707b02d7f9c17d98987ca84ac1e5.png)',
  'Greater Western Sydney': 'url(https://www.sportsbet.com.au/images/50_greater_western_sydney-bf526370d0d53a93dd9899974663d591.png)',
  'Hawthorn': 'url(https://www.sportsbet.com.au/images/50_hawthorn@2x-b79bf2119cc226454b4aa23d88d544fb.png)',
  'Melbourne': 'url(https://www.sportsbet.com.au/images/50_melbourne@2x-954413fa57f282529256be58ab36e5b8.png)',
  'North Melbourne': 'url(https://www.sportsbet.com.au/images/50_north_melbourne@2x-96fc50f79e949b2e7a42e6e0eb8d18d4.png)',
  'Port Adelaide': 	'url(https://www.sportsbet.com.au/images/50_port_adelaide@2x-1036658c815d23bc690b073a2fa4beb6.png)',
  'Richmond': 'url(https://www.sportsbet.com.au/images/50_richmond@2x-be2fda22c0a5ddc62c715bb5dee4ca3b.png)',
  'Sydney': 'url(https://www.sportsbet.com.au/images/50_sydney@2x-78f9cbd234a26f17f4c77e5f3eef382e.png)',
  'St Kilda': 	'url(https://www.sportsbet.com.au/images/50_st_kilda@2x-9d41c4167401f3dcba4055a0a69675e3.png)',
  'West Coast': 'url(https://www.sportsbet.com.au/images/50_west_coast@2x-77191637e76690c65feceb4f5382062c.png)',
  'Western Bulldogs': 'url(https://www.sportsbet.com.au/images/50_western_bulldogs@2x-1340f355cef7efb9b3e07b01e4550004.png)'
}

export const MatchCard = ({match}) => {
  console.log(logos['Greater Western Sydney'])
  return (
    <div className='match-card-container'>
      <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
        <div style={{display: 'flex', gap: '10px'}}>
          <div className='logo' style={{backgroundImage: logos[Object.keys(match)[0]]}} />
          <span>{Object.keys(match)[0]}</span>
        </div>
        <button className='bet-button'>{match[Object.keys(match)[0]]}</button>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
        <div style={{display: 'flex', gap: '10px'}}>
          <div className='logo' style={{backgroundImage: logos[Object.keys(match)[1]]}} />
          <span>{Object.keys(match)[1]}</span>
        </div>
        <button className='bet-button'>{match[Object.keys(match)[1]]}</button>
      </div>
    </div>
  )
}
