import React, { useState } from 'react'
import img from './photoProfail.jpeg'
import { motion, AnimatePresence } from 'framer-motion'
import { CgClose } from 'react-icons/cg';
import ImageSwiper from './ImageSwiper';
// import "./newStyle.css";

// import { motion, Variants } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const Image = () => {
  const [imgs, setImgs] = useState([
    "./img/project3/1.jpg",
    "./img/project3/2.jpg",
    "./img/project3/3.jpg"
  ])
  const [selectedId, setSelectedId] = useState(null)
  const [items, setItems] = useState([{ id: 1, subtitle: 'test', title: 'test1' }, { id: 2, subtitle: 'test', title: 'test2' }])
  const [isOpen, setIsOpen] = useState(false);
  return (<>
   
        <motion.div className='w-auto ' layoutId={'2'} onClick={() => setSelectedId(2)}>
          {/* <motion.img></motion.img> */}
         <img src={img} alt="" style={{height:'90px'}} />
        </motion.div>
   
  
    <div className="">
      <AnimatePresence className="">
        {selectedId && (
          <motion.div layoutId={selectedId} animate={{ x: 0, y: 0, scale: 1.4, }} className="">
            
            <ImageSwiper url_img={imgs}/>
            {/* <img src={img} alt="" style={{height:'190px'}} /> */}
            <motion.button className=' btn' onClick={() => setSelectedId(null)}>
              <CgClose className='fs-1' />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>


    {/* <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li variants={itemVariants}>Item 1 </motion.li>
        <motion.li variants={itemVariants}>Item 2 </motion.li>
        <motion.li variants={itemVariants}>Item 3 </motion.li>
        <motion.li variants={itemVariants}>Item 4 </motion.li>
        <motion.li variants={itemVariants}>Item 5 </motion.li>
      </motion.ul>
    </motion.nav> */}


  </>)
}

export default Image