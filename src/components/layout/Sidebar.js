import React from 'react';
import Trainer from './Trainer';
import PokeList from './PokeList';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Trainer/>
      <PokeList/>
    </div>
  )
}
