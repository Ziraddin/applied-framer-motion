import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {

  hidden: {
    opacity:0,
    x:"100vw"
  },
  visible: {
    opacity:1,
    x:0,
    transition:{
      type:"spring"
    }
  },
  exit:{
    x:"-100vw",
    transition:{
       ease: "easeInOut"
    }
  }
}

const buttonVariants = {
  hidden: {
    opacity:0,
    x:-250, 
    color: "#CFD2CF"
  },
  visible: {
    opacity:1,
    x:0,
    transition:{
      type:"spring",
      duration:0.4
    }
  },
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

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li whileHover={{scale:1.3, color:"yellow", originX:0}} transition={{type:"spring", stiffness:200}} key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">Next</motion.button>
          </Link>
        </div>
      )}

    </motion.div>
  )
}

export default Base;