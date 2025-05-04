  import Navbar from '../components/Navbar'
  import { motion } from 'framer-motion'
  import ProfileCard from '../components/ProfileCard'
  import { Typewriter } from 'react-simple-typewriter'
  import { useInView } from 'react-intersection-observer'
  import ProjectCard from '../components/ProjectCard'
  import { User, Mail, MapPin, Calendar, Github, Linkedin, ExternalLink, Download } from 'lucide-react';
  import { useState } from 'react'
  import Message from '../components/Message'
import FileUpload from '../components/File'

  const Dashboard = () => {
      const { ref:aboutRef, inView:aboutinView } = useInView({
          triggerOnce: false,  
          threshold: 0.2,     
        });
        const { ref: projectsRef, inView: projectsInView } = useInView({
          triggerOnce: false,
          threshold: 0.2,
        });
        const [form,setForm]=useState(false);
    return (
      <div className="flex flex-col dark:bg-gray-950 overflow-x-hidden">
        <div className="w-full h-[15%] top-0 p-5 fixed z-10">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
              delay: 0.2,
            }}
          >
            <Navbar />
          </motion.div>
        </div>
          {form&&<Message onClose={()=>setForm(false)}></Message>}
        <div className="min-h-screen w-full">
          <div className="mt-23 p-2 min-h-[80dvh]">
            <div className="rounded flex flex-col md:flex-row items-center w-full min-h-[80dvh]">
              <div className="w-full md:w-1/2 mt-10 lg:m-0 md:m-0 flex justify-center items-center min-h-full">
                <motion.div
                  className="card"
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: 1.5,
                  }}
                >
                  <ProfileCard />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 p-5 md:p-0 lg:p-0 flex items-center justify-center min-h-full">
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    damping: 10,
                    stiffness: 200,
                    duration: 0.5,
                    delay: 2,
                  }}
                  className="w-full md:w-1/2 h-[50%]"
                >
                  <h1 className="font-semibold dark:text-white">Hi, I'm </h1>
                  <span className="name text-2xl dark:text-white">
                    <Typewriter
                      words={['Rahul', 'Anagani Rahul']}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                  <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: 'spring',
                      delay: 3,
                      stiffness: 100,
                      damping: 10,
                      duration: 2.5,
                    }}
                    className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
                  >
                    I'm a B.Tech <span className="text-black font-bold dark:text-gray-50">CSE</span> student who builds{' '}
                    <motion.span
                      initial={{ color: '#808080' }}
                      animate={{ color: '#000000' }}
                      transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      style={{ color: '#808080' }}
                      className="font-semibold dark:text-gray-300"
                    >
                      real-time apps
                    </motion.span>{' '}
                    and{' '}
                    <motion.span
                      initial={{ color: '#808080' }}
                      animate={{ color: '#000000' }}
                      transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      style={{ color: '#808080' }}
                      className="font-semibold dark:text-gray-300"
                    >
                      interactive user experiences
                    </motion.span>
                    . Passionate about solving problems and crafting efficient backend systems.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div ref={aboutRef} id='about' className="min-h-screen w-full flex justify-center items-center">
          <div className="w-[100%] p-5 min-h-[80dvh] ">
          <motion.h2 initial={{rotate:90,opacity:0}} transition={{type:"tween",duration:0.2,ease:"anticipate"}} animate={{rotate:aboutinView?0:90,opacity:aboutinView?1:0}} className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</motion.h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Who I am and what I do
          </p>
            <div className="card-cont p-5 min-h-[60dvh] w-full">
            <div className="lg:flex items-center space-x-10">
            <motion.div 
            initial={{x:-100,opacity:0.5}}
            animate={{x:aboutinView?0:-100,opacity:aboutinView?1:0.5}}
            transition={{
              type: 'spring', 
              stiffness: 300, 
              damping: 20, 
              duration: 1
            }}
            
            className="lg:w-1/3 mb-8 lg:mb-0">
              <img
                src="./bb.svg" 
                alt="Your Name"
                className="rounded-full w-60 h-60 mx-auto shadow-xl"
              />
            </motion.div>

            <motion.div
            ref={aboutRef}
            initial={{opacity:0.5,x:100}}
            animate={{opacity:aboutinView?1:0.5,x:aboutinView?0:100}}
            transition={{
              type: 'spring', 
              stiffness: 300, 
              damping: 20, 
              duration: 1
            }}
            className="lg:w-2/3">
              <h3 className="text-2xl font-semibold name text-gray-800 dark:text-white">Hello, I'm Rahul</h3>
              <p className="mt-4 text-lg duck dark:text-gray-300 text-gray-600">
                I'm a passionate web developer with a focus on building modern, responsive, and user-friendly web applications. I specialize in both frontend and backend development, using technologies like React, Node.js, and MongoDB.
              </p>
              <p className="mt-4 text-lg duck dark:text-gray-300 text-gray-600">
                I enjoy solving complex problems and creating intuitive user experiences. In my free time, I love experimenting with new technologies, contributing to open-source projects, and learning new development skills.
              </p>
              <p className="mt-4 text-lg duck dark:text-gray-300 text-gray-600">
                My goal is to continue growing as a developer and work on impactful projects that make a difference in the tech community.
              </p>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-block py-2 px-6 bg-blue-600 font-sans text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div></div>
            </div>
          </div>
        </div>
        <div ref={projectsRef} id="projects" className="min-h-screen w-full flex justify-center items-center">
  <div className="w-[100%] p-5 min-h-[80dvh]">
    <motion.h2 
      initial={{ rotate: 90, opacity: 0 }} 
      transition={{ type: "tween", duration: 0.2, ease: "anticipate" }} 
      animate={{ rotate: projectsInView ? 0 : 90, opacity: projectsInView ? 1 : 0 }} 
      className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
    >
      My Projects
    </motion.h2>
    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      Here are some of the projects I've been working on. Each one represents different skills and technologies I've mastered.
    </p>
    
    <div className="card-cont p-5 min-h-[60dvh] w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: projectsInView ? 1 : 0, y: projectsInView ? 0 : 100 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 1 }}
        >
          <ProjectCard 
            title="RideHail"
            description="RideHail is a real-time, location-based ride-hailing app that connects passengers with nearby drivers. With features like GPS navigation, ride tracking, and user ratings, it offers a seamless experience for both riders and drivers."
            image="./image.png"
            liveLink="https://rahulanagani.github.io/RideHail/"
            githubLink="https://github.com/RahulAnagani/RideHail"
            completionDate="2024"
            tags={["React", "Express", "Leaflet", "TailwindCss", "Socket.io"]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: projectsInView ? 1 : 0, y: projectsInView ? 0 : 100 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2, duration: 1 }}
        >
          <ProjectCard 
            title="BookSwap"
            description="BookSwap is a platform for book lovers to exchange books with others in their local area. Users can list books they want to swap, browse available books, and connect with others to arrange swaps. With features like ratings, genres, and chat, it fosters a community of readers."
            image="./bs.png"
            liveLink="https://rahulanagani.github.io/BookSwap/"
            githubLink="https://github.com/RahulAnagani/BookSwap"
            completionDate="2025"
            tags={["React", "Express", "OpenBookLibrary", "TailwindCss", "Socket.io"]}
          />
        </motion.div>

      </div>
    </div>
  </div>
</div>

    
    <div id='resume' className="mt-10 w-full flex flex-col justify-between items-center  h-[100dvh]">
    <h1 className='font-bold text-2xl dark:text-white'>My Resume</h1>
    <iframe
      src="./OGR.pdf"
      className="w-[95%] h-[95%] lg:w-[75%] lg:h-[75%] rounded-lg shadow-lg"
      title="My Resume"
    ></iframe>
    <a href='./OGR.pdf' download="resume.pdf" className='flex duck hover:underline justify-center items-center dark:text-white'><Download/>Download Resume</a>
      </div>
        <div id="contact" className="min-h-screen w-full flex flex-col items-center justify-center p-6">
    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white name">Contact Me</h2>
    <p className="text-gray-600 duck dark:text-gray-300 mb-8 text-center max-w-xl">
      Want to work together or just say hi? Feel free to reach out.
    </p>
    <div className="space-y-3 text-gray-700 dark:text-gray-300 text-center">
      <p className='duck'><Mail className="inline-block mr-2" size={18} /> rahul.anagani2006@gmail.com</p>
      <p className='duck'><MapPin className="inline-block mr-2" size={18} /> Visakhapatnam, India</p>
      <p className='duck'><Github className="inline-block mr-2" size={18} /> <a href="https://github.com/RahulAnagani" target="_blank" className="underline">GitHub</a></p>
      <p className='duck'><Linkedin className="inline-block mr-2" size={18} /> <a href="https://www.linkedin.com/in/rahul-anagani-82b1ab299" target="_blank" className="underline">LinkedIn</a></p>
      <p className='duck'><Mail className="inline-block mr-2" size={18} /><span onClick={()=>setForm(!form)} className="underline cursor-pointer">Wanna Talk?</span></p>
      <FileUpload></FileUpload>
          </div>

  </div>

      </div>
    )
  }

  export default Dashboard