import React from "react";
import { motion } from "framer-motion";
import Skill from "./SkillRounded";

type Props = {
  directionLeft?: boolean;
  directionRight?: boolean;
};

function Skills({ directionLeft, directionRight }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex flex-col relative text-center md:text-left lg:flex-row max-w-[2000px] lg:px-10 min-h-screen
        justify-evenly lg:space-y-0 mx-auto items-center"
    >
      <h4 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h4>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      {/* <div className="h-[70%]"> */}
        <div className="grid grid-cols-4 gap-3 absolute top-1/3 flex items-center justify-evenly">
          {/* firebase */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/firebase.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">80%</p>
              </div>
            </div>
          </div>

          {/* figma */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/figma.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">80%</p>
              </div>
            </div>
          </div>

          {/* flutter */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/flutter.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">50%</p>
              </div>
            </div>
          </div>

          {/* c++ */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/c++.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">80%</p>
              </div>
            </div>
          </div>

          {/* python */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/python.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">60%</p>
              </div>
            </div>
          </div>

          {/* nextjs */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/next.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">60%</p>
              </div>
            </div>
          </div>

          {/* react */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/react.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">70%</p>
              </div>
            </div>
          </div>

          {/* html */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/html.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">90%</p>
              </div>
            </div>
          </div>

          {/* java */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionRight ? 200 : -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/java.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">75%</p>
              </div>
            </div>
          </div>

          {/* php */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionRight ? 200 : -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/php.webp"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">50%</p>
              </div>
            </div>
          </div>

          {/* tailwind */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionRight ? 200 : -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/tailwind.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">70%</p>
              </div>
            </div>
          </div>

          {/* gsuite */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionRight ? 200 : -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/gsuite.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">80%</p>
              </div>
            </div>
          </div>

          {/* github */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionRight ? 200 : -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/git.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">80%</p>
              </div>
            </div>
          </div>

          {/* illustrator */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionRight ? 200 : -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/illustrator.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">60%</p>
              </div>
            </div>
          </div>

          {/* unity */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionRight ? 200 : -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/unity.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">50%</p>
              </div>
            </div>
          </div>

          {/* mysql */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionRight ? 200 : -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="/mysql.png"
              className="rounded-full  border border-gray-500 object-contain w-[70px] h-[70px] xl:w-30
            xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-[70px] h-[70px] xl:w-30 xl:h-30 rounded-full z-0"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">70%</p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </motion.div>
  );
}

export default Skills;