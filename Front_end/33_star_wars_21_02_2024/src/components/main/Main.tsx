import React from 'react'
import Hero from './Hero'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'

export interface MainProps {
  page: string;
  setPage: (page: string) => void;
}
const Main: React.FC<MainProps> = ({page, setPage}) => {
  return (
    <div>
      <main className='clearFix'>
       {page === 'home' && <Hero/>}
       {page === 'dreamTeam' && <DreamTeam/>}
        {page === 'farGalaxy' && <FarGalaxy/>}
      </main>
    </div>
  )
}

export default Main
