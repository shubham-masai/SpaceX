import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import RocketBusiness from './components/RocketBusiness'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">

      <div className='sm:px-16 px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>

      <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Home />
          <RocketBusiness/>
        </div>
      </div>
    </div>
  )
}

export default App