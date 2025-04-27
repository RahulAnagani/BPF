import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import {motion} from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar=()=>{
    return(
        <>
            <div className="flex w-full  dark:border-gray-900 dark:bg-black/20 h-[10dvh] rounded-2xl border bg-gray-200/50 border-gray-200">
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
                        <a href="#about" className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">about</a>
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
                        <a href="#projects" className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">Projects</a>
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
                        <a href="#resume" className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">Resume</a>
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
                        <a href="#contact" className="font-bold duck hover:underline hover:translate-0.5 dark:text-white text-sm">Contact</a>
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
                        <GiHamburgerMenu className="inasd hidden rappa mr-5 size-5"/>
                </ul>
            </div>
        </>
    )
}
export default Navbar;