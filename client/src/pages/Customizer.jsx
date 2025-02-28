import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import config from '../config/config'
import state from '../store'
import { downloadCanvasToImage, reader } from "../config/helpers"
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import AI from '../components/AI'
import Color from '../components/Color'
import File from '../components/File'
import Tab from '../components/Tab'
import Button from '../components/Button'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Customizer = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div key='custom' className='absolute top-0 left-0 z-10' {...slideAnimation('left')}>
              <div className="flex items-center min-h-screen">
                <div className="editortabs-container tabs">
                    {EditorTabs.map((tab) => (
                      <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                    ))}
                </div>
              </div>
          </motion.div>
          <motion.div className='absolute z-10 top-2 right-2'>
            <Button type='filled' title={<KeyboardBackspaceIcon/>} handleClick={() => state.intro = true} customStyles='w-fit px-4 py-2.5'>
            </Button>
          </motion.div>
          <motion.div className='filtertabs-container'{...slideAnimation('up')}>
          {FilterTabs.map((tab) => (
                      <Tab key={tab.name} tab={tab} isFilterTab isActiveTab='' handleClick={() => {}} />
                    ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer