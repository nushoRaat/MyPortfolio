import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Extracurricular({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center space-y-10 md:space-y-25"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Extracurricular
      </h3>

      <div className="w-full h-[60%]">
        <div className="w-full flex space-x-5 overflow-x-scroll p-6 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white justify-start">
          <article
            className="flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[500px] snap-center
        bg-purple-500 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
        duration-200 overflow-hidden"
          >
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-32 h-32 rounded-full xl:w-52 xl:h-52 object-contain object-center bg-white"
              src="/idc.jpg"
              alt=""
            />

            <div className="px-0 md:px-10">
              <h4 className="text-4xl font-bold">AUST IDC</h4>
              <p className="font-semibold text-2xl mt-1">Joint Secratery</p>
              <p className="py-5 text-gray-300">
                Started: July 2022  -  December 2022
              </p>
            </div>
          </article>

          <article
            className="flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[500px] snap-center
        bg-purple-500 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
        duration-200 overflow-hidden"
          >
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-32 h-32 rounded-full xl:w-52 xl:h-52 object-contain object-center bg-white"
              src="/ms.jpg"
              alt=""
            />

            <div className="px-0 md:px-10">
              <h4 className="text-4xl font-bold">MindSparks 20</h4>
              <p className="font-semibold text-2xl mt-1">Junior Executive</p>
              <p className="py-5 text-gray-300">
                Started: January 2020  -  March 2020
              </p>
            </div>
          </article>

          <article
            className="flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[500px] snap-center
        bg-purple-500 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
        duration-200 overflow-hidden"
          >
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-32 h-32 rounded-full xl:w-52 xl:h-52 object-contain object-center bg-white"
              src="/idc.jpg"
              alt=""
            />

            <div className="px-0 md:px-10">
              <h4 className="text-4xl font-bold">AUST IDC</h4>
              <p className="font-semibold text-2xl mt-1">Sub-commity Member</p>
              <p className="py-5 text-gray-300">
                Started: January 2021 - July 2022
              </p>
            </div>
          </article>


          <article
            className="flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[500px] snap-center
        bg-purple-500 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
        duration-200 overflow-hidden"
          >
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-32 h-32 rounded-full xl:w-52 xl:h-52 object-contain object-center bg-white"
              src="/bdoson.jpg"
              alt=""
            />

            <div className="px-0 md:px-10">
              <h4 className="text-4xl font-bold">Girls’ Mobile Application Development Contest 2021</h4>
              <p className="font-semibold text-2xl mt-1">Finalist</p>
              <p className="py-5 text-gray-300">
                May 2021
              </p>
            </div>
          </article>


          <article
            className="flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[500px] snap-center
        bg-purple-500 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
        duration-200 overflow-hidden"
          >
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-32 h-32 rounded-full xl:w-52 xl:h-52 object-contain object-center bg-white"
              src="/cto.png"
              alt=""
            />

            <div className="px-0 md:px-10">
              <h4 className="text-4xl font-bold">CTO Forum Bangladesh Innovation Hackathon</h4>
              <p className="font-semibold text-2xl mt-1">Finallist</p>
              <p className="py-5 text-gray-300">
                September 2021
              </p>
            </div>
          </article>


          <article
            className="flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[500px] snap-center
        bg-purple-500 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
        duration-200 overflow-hidden"
          >
            {/* <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center bg-white"
            src="https://loox.com.bd/loox-logo.png"
            alt=""
          /> */}

            <div className="px-0 md:px-10 animate-pulse">
              <h4 className="text-4xl font-bold p-20">COMING SOON ...</h4>

            </div>
          </article>

        </div>
      </div>
    </motion.div>
  );
}

export default Extracurricular;