import vector1 from '../assets/vector1.png';


const Banner = ({ inProgress, resolved }) => {

    return (
        <div className='flex gap-4 w-[90%] mx-auto my-10'>
          <div className='relative w-[50%] h-40 flex items-center rounded-lg justify-between bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
            <div className=' w-full h-full bg-no-repeat bg-left bg-cover ' style={{ backgroundImage: `url(${vector1})` }}></div>
            <div className='text-white text-center w-full '>
              <p className=''>In-Progress</p>
              <h2 className='font-semibold text-3xl flex-1'>{inProgress}</h2>
            </div>
            <div className='w-full h-full bg-no-repeat bg-right bg-cover scale-x-[-1] ' style={{ backgroundImage: `url(${vector1})` }}></div>

          </div>


          <div className='relative w-[50%] h-40 flex items-center rounded-lg justify-between bg-gradient-to-r from-[#54CF68] to-[#00827A]'>
            <div className=' w-full h-full bg-no-repeat bg-left bg-cover ' style={{ backgroundImage: `url(${vector1})` }}></div>
            <div className='text-white text-center w-full'>
              <p className=''>Resolved</p>
              <h2 className='font-semibold text-3xl flex-1'>{resolved}</h2>
            </div>
            <div className='w-full h-full bg-no-repeat bg-right bg-cover scale-x-[-1] ' style={{ backgroundImage: `url(${vector1})` }}></div>

          </div>
        </div>
    )
}


export default Banner;




// const Banner = ({ inProgress, resolved }) => {
//   return (
//     <div className="flex gap-4 w-[90%] mx-auto mt-10">

//       {/* In Progress */}
//       <div className="w-[50%] h-32 rounded-xl text-white flex flex-col justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
        
//         <h3>In-Progress</h3>
//         <h1 className="text-4xl font-bold">{inProgress}</h1>
//       </div>

//       {/* Resolved */}
//       <div className="w-[50%] h-32 rounded-xl text-white flex flex-col justify-center items-center bg-gradient-to-r from-[#54CF68] to-[#00827A]">
//         <h3>Resolved</h3>
//         <h1 className="text-4xl font-bold">{resolved}</h1>
//       </div>

//     </div>
//   );
// };

// export default Banner;
