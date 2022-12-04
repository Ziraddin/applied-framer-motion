import React from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
 
    bouncingAnimation: {
        x: [30, -30],
        y: [30, 0],
        transition:{
           x: {
            yoyo: Infinity,
            duration: 0.6
        },
           y: {
            yoyo: Infinity,
            duration: 0.3,
            ease: "easeOut"
        }
      }
    }
}


function Loader() {
  return (
    <motion.div className='loader' variants={loaderVariants} animate="bouncingAnimation"></motion.div>
  )
}

export default Loader