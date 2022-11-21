import { motion, MotionConfig } from 'framer-motion'
import React from 'react'
import Imageoo from "../public/Nushrat.png"
import Image from 'next/image';
import Link from 'next/link';



type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity : 0,
    }}
    whileInView={{ opacity: 1,}}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

       <h3 className='  absolute text-left top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>about</h3> 
       
        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }} 
        whileInView={{ opacity: 1, x: 0}}
       // viewport={{ once: true}}
       // className=' space-y-10 xl:w-[300px] xl:h-[400px]'
            
             className='-mb-20 md:mb-0 flex-shrink-0  w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] 
            lg:w-64 lg:h-95'
                src  = '/me2.jpg'
                alt = "NOne"
        
            />

                
        <motion.div 
         initial={{
            opacity : 0,
        }}
        whileInView={{ opacity: 1,}}
        transition={{ duration: 1.5 }}
        className='  space-y-10 px-10 md:px-10 h-[55%]'>
            <h4 className=' text-4xl font-semibold '>
                Here is a <span className=' underline decoration-[#9C27B0]'>
                    little
                </span>{" "}
                background
            </h4>
            <p className=' text-base text-gray-500'>
            My strong suits are app and web development and graphics designing . Over the next few years, I intend to develop as a
generalist software engineer. For that, I have learned Java,Javascript,C# frontend technologies, database systems , software architecture, and even DevOps as well.
            </p>

            <Link href={"https://drive.google.com/file/d/1jJx93VPhu3EcHQjhmPDyz7r4n5mipnuy/view?usp=share_link"}>
                    <button className='heroButton mt-5'>View Resume</button>
                </Link>
                <h4 className='text-2xl font-semibold text-gray-500'>Education</h4>
                <ul>
                    <li className='text-lg text-gray-500'>Ahsanullah University Of Science And Technology</li>
                    <li className='text-gray-500'>B Sc in Computer Science and Engineering</li>
                    <li className='text-gray-500'>2018-2022</li>
                </ul>


        </motion.div>

        


    </motion.div>
  )
}