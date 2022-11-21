import { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About';
import ContactMe from '../components/Contact';
import Extracurricular from '../components/Extracurricular';
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Project';
import Skill from '../components/SkillRounded';
import Skills from '../components/Skills';


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(255,255,255)] h-screen 
    snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0
    scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#112033]'>
      <Head>
        <title>portfolio</title>
      </Head>

      {/*header done*/}
      <Header />

      {/**hero done*/}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

     {/** about*/}
      <section id="about" className='snap-center'>
        <About/>
      </section>

      {/** expirence */}
      <section id='extracurricular' className='snap-center'>
        <Extracurricular/>
      </section>

      {/**skills */}

      <section id='skills' className='snap-center'>
        <Skills/>
      </section>

      {/**projects */}
      <section id="projects" className='snap-center'>
        <Projects/>
      </section>


      {/** contact me */}

      <section id="contact" className='snap-center'>
        <ContactMe/>
      </section>

    </div>
  );
};

export default Home;
