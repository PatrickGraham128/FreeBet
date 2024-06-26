import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from './api';
import { PlayerCard } from './PlayerCard';
import { Navbar } from './Navbar';
import { TabButton } from './TabButton';

export const MatchPage = () => {
  const { id } = useParams();
  const [disposals, setDisposals] = useState([]);
  const [goals, setGoals] = useState([]);
  const [tab, setTab] = useState(true);
  const [b1active, setB1Active] = useState(true)
  const [b2active, setB2Active] = useState(false)

  const fetchDisposals = async () => {
    return api.get(`/disposals/?id=${id}`)
  }

  const fetchGoals = async () => {
    return api.get(`/goals/?id=${id}`)
  }

  useEffect(() => {
    fetchDisposals().then(res => {
      setDisposals(res.data)
    })   
    fetchGoals().then(res => {
      setGoals(res.data)
    })
  }, []);

  const handleClick = () => {
    setB1Active(!b1active)
    setB2Active(!b2active)
    setTab(!tab);
  }

  return (<>
  <Navbar />
  <div className='page'>
    <div className='content-container'>
      <div className='button-container'>
        <TabButton handleClick={handleClick} label={"Disposals"} active={b1active}/>
        <TabButton handleClick={handleClick} label={"Goals"} active={b2active}/>
      </div>
      <div className={(tab) ? 'players' : 'hidden'}>
          <h3 style={{marginBottom: '10px'}}>{'Disposal Markets'}</h3>
          <table className='odds-table'>
            <tr>
              <td className='table-head'>Player</td>
              <td className='table-head'>15+</td>
              <td className='table-head'>20+</td>
              <td className='table-head'>25+</td>
              <td className='table-head'>30+</td>
              <td className='table-head'>35+</td>
              <td className='table-head'>40+</td>
            </tr>
          {
            disposals.map((d, i) => <PlayerCard playerOdds={d} type={'d'} />)
          }
          </table>
      </div>
      <div className={(!tab) ? 'players' : 'hidden'}>
           <h3 style={{marginBottom: '10px'}}>{'Goal Markets'}</h3>
          <table className='odds-table'>
          <tr>
            <td className='table-head'>Player</td>
            <td className='table-head'>1+</td>
            <td className='table-head'>2+</td>
            <td className='table-head'>3+</td>
            <td className='table-head'>4+</td>
            <td className='table-head'>5+</td>
            <td className='table-head'>6+</td>
          </tr>
          {
            goals.map((d, i) => <PlayerCard playerOdds={d} type={'g'} />)
          }
          </table>
      </div>
    </div>
  </div>
  </>)
}
