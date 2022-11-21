import React from 'react';
import { motion } from "framer-motion";


type Props = {}

function ExtraCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[800px] snap-center
        bg-[#162840] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
        duration-200 overflow-hidden'>
            <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src='https://www.tbsnews.net/sites/default/files/styles/author/public/organization/logo/aust_logo.jpeg?itok=PRGHmxyZ&timestamp=1612337673'
            alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Ahsanullah University</h4>
                <p className='font-bold text-2xl mt-1'>B Sc in CSE</p>
                <p className='uppercase py-5 text-gray-300'>Started . . .- Ended . . .</p>
            </div>
        </article>
    )
}

export default ExtraCard