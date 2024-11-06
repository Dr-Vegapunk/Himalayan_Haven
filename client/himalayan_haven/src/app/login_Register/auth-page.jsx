'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MountainSnow } from 'lucide-react'
import { Login } from './Login'
import { Signup } from './Signup'

const colors = {
  deepSapphireBlue: '#05445E',
  warmTerracotta: '#D4674C',
  vibrantSaffron: '#F2A71B',
  softCloudWhite: '#F7F7F7',
  richSlateGray: '#36454F',
  sereneTeal: '#189AB4',
  warmBeige: '#F2E3D5'
}

const LoginRegister=()=> {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    (<div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: colors.softCloudWhite }}>
      <div className="w-full max-w-md perspective">
        <motion.div
          className="w-full preserve-3d"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}>
          <div
            className="bg-white shadow-xl rounded-2xl overflow-hidden absolute backface-hidden w-full">
            <div
              className="flex items-center justify-center p-4"
              style={{ backgroundColor: colors.deepSapphireBlue }}>
              <MountainSnow className="h-8 w-8" style={{ color: colors.softCloudWhite }} />
              <h1
                className="text-2xl font-bold ml-2"
                style={{ color: colors.softCloudWhite }}>Himalayan Haven</h1>
            </div>
            <Login onFlip={() => setIsFlipped(true)} colors={colors} />
          </div>
          <div
            className="bg-white shadow-xl rounded-2xl overflow-hidden absolute backface-hidden w-full rotateY-180">
            <div
              className="flex items-center justify-center p-4"
              style={{ backgroundColor: colors.deepSapphireBlue }}>
              <MountainSnow className="h-8 w-8" style={{ color: colors.softCloudWhite }} />
              <h1
                className="text-2xl font-bold ml-2"
                style={{ color: colors.softCloudWhite }}>Himalayan Haven</h1>
            </div>
            <Signup onFlip={() => setIsFlipped(false)} colors={colors} />
          </div>
        </motion.div>
      </div>
    </div>)
  );
}
export default LoginRegister;