import { useRef, useState } from 'react'
import Animation from './components/Animation'
import "./styles/style.css"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { motion, scale } from "motion/react";
import Home from './Home';
import MovingText from './MovingText';
import ScrollExperience from './ScrollExperience';




function App() {

  const container = useRef();
  const boxRef = useRef([]);
 useGSAP(()=>{
  gsap.to(boxRef.current,{
    x:700,
    delay:1,
    duration:1,
    // repeat:-1
  })

 },{scope:container,revertOnUpdate:true})

  return (
    <>
    {/* <ScrollExperience/> */}
    <Home/>
    <MovingText/>
    
    
    {/* <Animation>
      <div className="box"></div>
    </Animation> */}

    <div className="container" ref={container}>

    <div className="box"  ref={(el)=>{boxRef.current[0]=el}}></div>  
    <div className="box1"ref={(el)=>boxRef.current.push(el)}></div>
    {/* <div className="box2" ref={()}></div> */}
    </div>

 {/*✅ use of motion */}

 <motion.div className="motion" 
 initial={{x:0,duration:3}}
 animate={{x:500,opacity:1}}
 ></motion.div>


 <motion.h1
//  initial={{}}
//  whileHover={{scale:1.5}}
initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.6 }}
 >hello</motion.h1>

 <motion.button
  whileTap={{ scale: 0.9 }}
>
  Click Me
</motion.button>
      
    </>
  )
}

export default App
