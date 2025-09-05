import React from 'react'
import one from '../../assets/n1.jpg'
import two from '../../assets/one.jpg'
function Booking() {
  return (
    <div className=' w-full text-zinc-50'>
      {/* <div className='text-5xl font-bold pl-10'>
      <h1>Our Tours </h1>
      </div> */}
      <div className='main w-full flex justify-evenly items-center '>
         <div className='left px-5 py-10 w-[35%]  min-h-[100vh]'>
          <h1 className='text-[2.2rem] font-bold ' >Not just a destination A legacy waiting for you..</h1>
  <div className='w-full mt-16  h-[500px]'>
          <img src={one} className='w-full h-full rounded-3xl object-cover' alt="" />
</div>
         </div>
         <div className='right w-[35%]   min-h-[100vh] py-6 px-5'>
<div className='w-full h-[450px] '>
          <img src={two} className='w-full h-full rounded-3xl object-cover' alt="" />
</div><br />
<h1 className='text-[1rem] mt-8 px-5 leading-6 font-normal '>Easily manage your home with just your voice or phone—whether it’s adjusting the temperature or locking the doors. With smart tech built in, your home takes care of the little things so you don’t have to.</h1>
<br /><br />
<button className='rounded-3xl bg-zinc-600 p-2 px-5  border-2  ml-6 border-zinc-50 ' >Click here</button>
         </div>
      </div>
    </div>
  )
}

export default Booking
