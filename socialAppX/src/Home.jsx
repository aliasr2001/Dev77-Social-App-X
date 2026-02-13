import React from 'react'
import Sidebar from './components/Sidebar'
import MidSection from './components/MidSection' 
import RightSection from './components/RightSection'

function Home() {
  return (
    <>
    {/* wrapper div  */}
      <div className="min-h-screen bg-black flex justify-center w-full max-w-screen-2xl">
          <Sidebar/>
          <MidSection/>
          <RightSection/>
      </div>



    </>
  )
}

export default Home