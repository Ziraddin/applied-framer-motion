import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const buttonVariants = {
  hover:{
    scale:1.2, 
    color: "white",
    textShadow:"0px 0px 10px #FFFFFF",
    boxShadow: "0px 0px 10px #FFFFFF",
    transition: {
      duration:0.4,
      yoyo: Infinity
    }
  }
}

const containerVariants = {

  hidden: {
    opacity:0
  },
  visible:{
   opacity:1,
   transition:{
    delay:0.5,
    duration:1.5
   }

  },
  exit:{
    x:"-100vw",
    transition:{
       ease: "easeInOut"
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <motion.h2 
      initial={{y:100, opacity:0}}
      animate={{scale:1.4, color: "yellow", y:10, opacity:1}}
      transition={{delay:0.8, duration:0.3, type:"spring", stiffness:80}}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} initial={{color: "#CFD2CF"}} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  )
}

export default Home;