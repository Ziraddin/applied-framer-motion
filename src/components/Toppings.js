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
      type:"spring",
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
    x:0
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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)} whileHover={{scale:1.3, color:"yellow", originX:0}} transition={{type:"spring", stiffness:200}}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;