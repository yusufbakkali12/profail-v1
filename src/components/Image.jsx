import React,{useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {CgClose} from 'react-icons/cg';
const Image = () => {
    const [selectedId, setSelectedId] = useState(null)
    const [items ,setItems]=useState([{id:1,subtitle:'test',title:'test1'},{id:2,subtitle:'test',title:'test2'}])
  return (<>
  
  
 
    {items.map(item => (
      <motion.div className='bg-danger' layoutId={item.id} onClick={() => setSelectedId(item.id)}>
        <motion.h5>{item.subtitle}</motion.h5>
        <motion.h2>{item.title}</motion.h2>
      </motion.div>
    ))}


   
    <AnimatePresence className='bg-danger d-inline-block h-100 position-fixed ' >
    {
        items.map(item => ( 
          selectedId && (
        <motion.div   style={{zIndex:99}} layoutId={selectedId}  key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
           <motion.img  alt="Profile"
                loading='lazy'
                className=" shadow-lg  border-dark border-2 border rounded-2rem "
                height="400"
                src="./img/photoProfail.jpeg"
                type="image"  onClick={() => setSelectedId(null)} />
         
          <motion.button className='text-light btn' onClick={() => setSelectedId(null)} ><CgClose  className='fs-1 ' /> </motion.button>
        </motion.div>
      )
      
      ))}
    </AnimatePresence>
  </>)
}

export default Image