import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import { motion } from "framer-motion"
import { link } from 'fs';
import Link from 'next/link';
import Imageoo from "../public/Nushrat.png"
import Image from 'next/image';

type Props = {}

//const myLoader = ({src,width,quality}) =>{
  //  return https://example.com/${src}?w=${width}&q=${quality || 75}
//}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: [
            "Hi I am Nushrat Jahan",
            "I love discovering new things",
            "Coding > !Coding",
        ],
        loop: true,
        delaySpeed: 1000, 
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles/>
      {/* <Image
        loader={myLoader}
        src="Nushrat.jpg"
        alt="not available"
        width={500}
        height={500}
        />*/}

        <Image className='relative rounded-full mx-auto object-cover w-32 h-32'
        src={Imageoo} alt="no" />

        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[8px]'>
                Software Engineer
            </h2>
        
            <h1 className='text-2xl lg:text-4xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor="#9C27B0" />
            </h1>

            <div className='pt-5'>
                <Link href ="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href ="#extracurricular">
                    <button className='heroButton' >Extracurricular</button>
                </Link>
                <Link href ="#skills">
                        <button className='heroButton' >Skills</button>
                </Link>
                <Link href ="#projects">
                    <button className='heroButton' >Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}