import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ParallaxSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{
          y: scrollY * 0.5,
        }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{ 
                y: [0, -50, 0],
                scale: [0.3, 1, 0.3],
                rotate: [0, 360]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        ref={ref}
        style={{
          y: scrollY * -0.3,
        }}
        className="relative z-10 text-center text-white px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-5xl lg:text-7xl font-bold mb-6"
        >
          Innovation
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Never Stops
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl text-white/80 max-w-3xl mx-auto mb-12"
        >
          We're constantly pushing the boundaries of what's possible, 
          delivering cutting-edge solutions that transform how you work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
          >
            Explore Innovation
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        style={{
          y: scrollY * -0.2,
        }}
        className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"
      />
      
      <motion.div
        style={{
          y: scrollY * -0.4,
        }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full backdrop-blur-sm"
      />
      
      <motion.div
        style={{
          y: scrollY * -0.1,
        }}
        className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
      />
    </section>
  )
}

export default ParallaxSection