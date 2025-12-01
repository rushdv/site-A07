 //import { useState } from 'react'
 // import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import Navbar from "./components/Navbar";
//import Banner from "./components/Banner";
import MainSection from './pages/MainSection';
// import TicketCard from './components/TicketCard';
// import TaskStatus from './components/TaskStatus';
// import ResolvedList from './components/ResolvedList';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';





function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <div className='bg-[#F5F5F5]'>


        <Navbar/>
        {/* <Banner/> */}
        <MainSection/>
        <Footer/>


    <ToastContainer position='top-center' />

       

      </div>


    </>
  )
}

export default App












