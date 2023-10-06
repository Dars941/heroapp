import React from 'react'
import single from "../assets/single.png" 
import double from "../assets/double.png"
import triple from "../assets/triple.png"
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white '>
      <div className='  bg-white max-w-full mx:auto  grid md:grid-cols-3 mr-4 gap-10 h-full'>
        <div className='  bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
         <img className=' bg-white w-20 mx-auto mt-[-3rem]' src={single} alt="" />
         <h2 className=' bg-white text-2xl font-bold text-center py-8'>single user</h2>
         <p className='bg-white font-bold text-center sm:text-3xl md:text-4xl text-2xl'>$49.99</p>
         <div className=' bg-white font-bold text-center py-2'>
            <p className='bg-white font-bold border-b-2' >500GB</p> 
            <p className='bg-white font-bold border-b-2'>1 Granted user </p> 
            <p className='bg-white font-bold border-b-2'>500GB</p> 
         </div>
         <button className=" mx-auto my-auto  bg-[#061410]  text-white py-2 px-4  rounded-md m-0"  >Get Started</button>
        </div> 
        <div className='  bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '> 
         <img className=' bg-white w-20 mx-auto mt-[-3rem]' src={double} alt="" />
         <h2 className=' bg-white text-2xl font-bold text-center py-8'>Two use</h2>
         <p className='bg-white font-bold text-center sm:text-3xl md:text-4xl text-2xl'>$99.99</p>
         <div className=' bg-white font-bold text-center py-2'>
            <p className='bg-white font-bold border-b-2' >1TB</p> 
            <p className='bg-white font-bold border-b-2'>1 Granted user </p> 
            <p className='bg-white font-bold border-b-2'>500GB</p> 
         </div>
         <button className=" mx-auto my-auto  bg-[#061410]  text-white py-2 px-4  rounded-md m-0"  >Get Started</button>
        </div> 
        <div className='  bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
         <img className=' bg-white w-20 mx-auto mt-[-3rem]' src={triple} alt="" />
         <h2 className=' bg-white text-2xl font-bold text-center py-8'>Up to 5 users!</h2>
         <p className='bg-white font-bold text-center sm:text-3xl md:text-4xl text-2xl'>$199.99</p>
         <div className=' bg-white font-bold text-center py-2'>
            <p className='bg-white font-bold border-b-2' >1.5TB</p> 
            <p className='bg-white font-bold border-b-2'>1 Granted user </p> 
            <p className='bg-white font-bold border-b-2'>500GB</p> 
         </div>
         <button className=" mx-auto my-auto  bg-[#061410]  text-white py-2 px-4  rounded-md m-0"  >Get Started</button>
        </div>
        
      </div>
    </div>
  )
}

export default Cards
