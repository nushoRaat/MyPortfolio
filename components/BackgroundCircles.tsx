import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
      initial={{
        opacity:0,  
      }}  
      animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5, 
      }}
      className='relative flex justify-center items-center'>
        <div className='absolute border border-purple-500 rounded-full 
        h-[150px] w-[150px] mt-52 animate-ping' />
        <div className='rounded-full border border-purple-300 
        h-[250px] w-[250px] absolute mt-52' />
        <div className='rounded-full border border-purple-300 
        h-[375px] w-[375px] absolute mt-52 animate-pulse' />
        <div className='rounded-full border border-purple-500
        opacity-20 h-[500px] w-[500px] absolute mt-52 animate-pulse' />
        <div/>
    </motion.div>
  )
}

export default BackgroundCircles