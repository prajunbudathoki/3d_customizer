import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { headContainerAnimation,headContentAnimation,headTextAnimation,slideAnimation } from '../config/motion'
import state from '../store'
import Button from '../components/Button'

const Home = () => {
    const snap = useSnapshot(state)

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img src='./vite.svg' alt='logo' className='w-8 h-8 object-contain' />
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            Build <br /> Something Awesome
                        </h1>   
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-4'>
                        <p className='text-gray-500 max-w-md'>Create your own 3D customization model with our tool. <br />
                            <strong>Change the imagination to reality</strong>
                        </p>
                        <Button type='filled' title='customize it' handleClick={() => state.intro = false}
                        customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                         />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home