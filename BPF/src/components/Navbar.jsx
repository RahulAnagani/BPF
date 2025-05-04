import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import {motion, AnimatePresence} from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
const Navbar=()=>{
    const [drop,setDrop]=useState(false);
    const dropRef=useRef()
    useEffect(()=>{
        const handleOutside=(event)=>{
            if(dropRef.current&& !dropRef.current.contains(event.target)){
                setDrop(false);
            }
        };
        document.addEventListener("mousedown",handleOutside);
        return()=>{
            document.removeEventListener("mousedown", handleOutside);
        }
    },[]);
    return(
        <>
            <div className={`flex w-full relative dark:border-gray-900 dark:bg-black/20 h-[10dvh] rounded-2xl ${drop?"rounded-b-none":""} border bg-gray-200/50 border-gray-200`}>
                {drop&&<motion.div 
                ref={dropRef}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-auto sm:block md:hidden rounded-t-none lg:hidden w-full bg-gray-500 absolute z-100 top-[100%] rounded">
                    <div className="flex flex-col items-start p-4 gap-4">
<a href="#about" onClick={()=>setDrop(false)} className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">
        about</a>
<a href="#projects" onClick={()=>setDrop(false)} className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">
    Projects</a>
<a href="#resume" onClick={()=>setDrop(false)} className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">
        Resume</a>
<a href="#contact" onClick={()=>setDrop(false)} className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">
    Contact</a>
<ThemeToggler></ThemeToggler>
                    </div>
                </motion.div>}
                <ul className="w-full h-full flex items-center justify-center p-2">
                    <div className="w-[50%] smjc h-full flex justify-start items-center ">
                       <a href="#" className="w-full smjc h-full flex justify-start items-center"> <img  src="./text.svg" className="w-[50%] smwh  h-full dark:invert"></img></a>
                    </div>
                    <div className="w-[50%] h-full flex justify-between items-center">
                        <motion.div
                        initial={{y:-100,opacity:0.5}}
                        animate={{y:0,opacity:1}}
                        transition={{
                            delay:0.5,
                            ease:"circOut"
                        }}
                        className="disap"
                        >
<a href="#about" className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">
        about</a>
                        </motion.div>
                        <motion.div
                        initial={{y:-100,opacity:0.5}}
                        animate={{y:0,opacity:1}}
                        transition={{
                            delay:0.7,
                            ease:"circOut"
                        }}
                        className="disap"
                        >
<a href="#projects" className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">
    Projects</a>
                        </motion.div>
                        <motion.div
                        initial={{y:-100,opacity:0.5}}
                        animate={{y:0,opacity:1}}
                        transition={{
                            delay:0.8,
                            ease:"circOut"
                        }}
                        className="disap"
                        >
<a href="#resume" className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">
        Resume</a>
                        </motion.div>
                        <motion.div
                        initial={{y:-100,opacity:0.5}}
                        animate={{y:0,opacity:1}}
                        transition={{
                            delay:0.9,
                            ease:"circOut"
                        }}
                        className="disap"
                        >
<a href="#contact" className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">
    Contact</a>
                        </motion.div>
                        
                        <motion.div
                        initial={{y:-100,opacity:0.5}}
                        animate={{y:0,opacity:1}}
                        transition={{
                            type:"spring",
                            damping:10,
                            stiffness:100,
                            delay:0.9,
                            ease:"circOut"
                        }}
                        className="disap"
                        >
                        <ThemeToggler></ThemeToggler>
                        </motion.div>
                    </div>
                        <div className="inasd hidden" >
                        <AnimatePresence mode="wait">
                        {!drop?(
                        <motion.div 
                        key="menu"
                        initial={{ rotate: 90, opacity: 0.5, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0.5, scale: 0.5 }}
                        transition={{ duration: 0.4 }}
                        className="">
                        <GiHamburgerMenu onClick={()=>setDrop(true)}  className="dark:text-white hidden inasd mr-5 size-5"/>
                        </motion.div>
                        ):(
                        <motion.div 
                        key="close"
                        initial={{ rotate: 90, opacity: 0.5, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0.5, scale: 0.5 }}
                        transition={{ duration: 0.4 }}
                        className="">
                        <IoClose onClick={()=>setDrop(false)} className="dark:text-white hidden inasd mr-5 size-5"/>
                        </motion.div>
                        )}
                        </AnimatePresence>
                        </div>
</ul>
            </div>
        </>
    )
}
export default Navbar;
