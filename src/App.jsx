 import { useState } from 'react'
 // import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import Navbar from "./components/Navbar";

import vector1 from './assets/vector1.png';
import vector2 from './assets/vector2.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='bg-[#F5F5F5]'>


        <Navbar/>
        




        <div className='flex gap-4 w-[90%] mx-auto my-10'>
          <div className='relative w-[50%] h-30 flex items-center rounded-lg justify-between bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
            <div className=' w-full h-full bg-no-repeat bg-left bg-cover ' style={{ backgroundImage: `url(${vector1})` }}></div>
            <div className='text-white text-center w-full'>
              <p className=''>In-Progress</p>
              <h2 className='font-semibold text-3xl flex-1'>0</h2>
            </div>
            <div className='w-full h-full bg-no-repeat bg-right bg-cover scale-x-[-1] ' style={{ backgroundImage: `url(${vector1})` }}></div>

          </div>


          <div className='relative w-[50%] h-30 flex items-center rounded-lg justify-between bg-gradient-to-r from-[#54CF68] to-[#00827A]'>
            <div className=' w-full h-full bg-no-repeat bg-left bg-cover ' style={{ backgroundImage: `url(${vector1})` }}></div>
            <div className='text-white text-center w-full'>
              <p className=''>Resolved</p>
              <h2 className='font-semibold text-3xl flex-1'>0</h2>
            </div>
            <div className='w-full h-full bg-no-repeat bg-right bg-cover scale-x-[-1] ' style={{ backgroundImage: `url(${vector1})` }}></div>

          </div>
        </div>

      </div>


    </>
  )
}

export default App












