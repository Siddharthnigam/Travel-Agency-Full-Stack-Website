import React from 'react'
import {motion} from "framer-motion"

function marquee() {
  return (

<div data-scroll data-scroll-section data-scroll-speed=".001" className='w-full py-5 mt-6 text-black   rounded-tr-3xl rounded-tl-3xl bg-zinc-400'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex items-center whitespace-nowrap overflow-hidden ">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='text-[3rem] pr-20 leading-none font-["Neue Montreal"] font-medium uppercase  -mb-1 '>The Ultimate End-to-End Solution for the Travel Lifecycle.</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:"7"}} className='text-[3rem] pr-20 leading-none font-["Neue Montreal"] font-medium uppercase  -mb-1 '>The Ultimate End-to-End Solution for the Travel Lifecycle.</motion.h1>

        </div>
    </div>
  )
}

export default marquee