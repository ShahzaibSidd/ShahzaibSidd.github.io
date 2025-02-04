import React from 'react'
import { motion } from 'framer-motion'

const ScrollerText = (props) => {
  return (
    <motion.div className='text-[30px] font-urbanist font-bold text-white w-fit
    phone:max-tablet:text-[25px]'>
      {props.word}
    </motion.div>
  )
}

export default ScrollerText