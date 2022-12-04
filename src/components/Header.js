import { motion } from 'framer-motion';
import React from 'react';

const svgVariants = {

  initial:{

    opacity: 0,
    rotate: -180
  },
  after:{

    opacity: 1,
    rotate: 0,
    transition:{
      duration: 2,
      ease: "easeInOut"
    }
  }
}
const pathVariants = {

  initial:{
    pathLength: 0
  },
  after:{
    pathLength: 1,
    transition:{
      duration: 2,
      ease: "easeInOut"
    }
  }
}



const Header = () => {
  return (
    <header>
      <motion.div className="logo" initial={{opacity:0}} animate={{opacity:1}}>
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" variants={svgVariants} initial="initial" animate="after" >
          <motion.path variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <div className="title">
        <motion.h1 initial={{y:-100}} animate={{y:-10}} transition={{delay:0.2, duration:0.3, type:"spring", stiffness:65}}>Pizza Joint</motion.h1>
      </div>
    </header>
  )
}

export default Header;