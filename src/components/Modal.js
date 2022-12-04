import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const backdrop = {

    hidden: {
      opacity:0,   
    },
    visible: {
      opacity:1,    
    },
    exit:{
      opacity:0,
    }
  }
const modal = {

    hidden: {
      y: "-100vh",
      opacity:0,   
    },
    visible: {
      y: "30vh",
      opacity:1,  
      transition:{
        type:"spring",
        mass:0.5,
        stiffness: 120
      }  
    },
    exit:{
      y:"-100vh",
      transition:{duration:"0.5"}

    }
  }
const buttonVariants = {
    hover:{
     scale:1.1, 
     color: "black",
     boxShadow: "0px 0px 5px black"
    }
}

function Modal({showModal, setShowModal}) {
  return (
  <AnimatePresence exitBeforeEnter>
     {showModal && 
     <motion.div className='backdrop' variants={backdrop} initial= "hidden" animate="visible" exit="exit">
        <motion.div className='modal' variants={modal}>
            <p>Want To Make Another Pizza?</p>
            <Link to={"/"}>
                <motion.button variants={buttonVariants} whileHover="hover" onClick={()=>{setShowModal(false)}}>Yes, let's do it!</motion.button>
            </Link>
        </motion.div>
     </motion.div>}
  </AnimatePresence>
  )
}

export default Modal