import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//import Navbar from "./components/Navbar";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='bg-[#F5F5F5]'> 



        <nav className='flex justify-between px-6 p-3 bg-white'>
          <div>
            <h3 className='font-bold'>CS - Ticket System</h3>
          </div>
          <div className='flex gap-5 my-auto'>
            <ul className='flex gap-5 my-auto'>
              <li><a href="">Home</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Changelog</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Download</a></li>
              <li><a href="">Contact</a></li>
            </ul>
            <button className='bg-purple-600 text-white p-1 px-2 rounded font-semibold'>New Ticket</button>
          </div>
      </nav>




    <div></div>

      </div>

    
    </>
  )
}

export default App












