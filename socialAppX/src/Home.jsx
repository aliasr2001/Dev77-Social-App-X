import React from 'react'

function Home() {
  return (
    <>
    {/* wrapper div  */}
      <div className="min-h-screen bg-black flex justify-center w-full max-w-screen-2xl">
     

          {/* Left Sidebar */}
          <div className="hidden md:block md:w-60 lg:w-80 bg-black text-white border border-white/50 p-4 sticky top-0 h-screen">
            Left Sidebar
            <p>Links / Menu items</p>
            <p>More items...</p>
          </div>

          {/* Middle Content */}
          <div className="w-full lg:w-3/5 bg-black text-white border border-white/50 p-4 overflow-y-auto max-h-screen">
            <p>Middle Content starts here...</p>
          </div>

          {/* Right Sidebar */}
          <div className="hidden md:block md:w-60 lg:w-80 bg-black text-white border border-white/50 p-4 sticky top-0 h-screen">
            Right Sidebar
            <p>Links / Trends</p>
            <p>More items...</p>
          </div>

        </div>



    </>
  )
}

export default Home