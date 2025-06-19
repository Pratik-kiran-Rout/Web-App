import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

const HeroTest = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-3 bg-gray-800/60 backdrop-blur-md border border-cyan-500/30 rounded-full px-6 py-3 mb-8 shadow-2xl shadow-cyan-500/20"
        >
          <Star className="w-5 h-5 text-cyan-400 fill-current" />
          <span className="text-sm font-semibold text-white">
            Trusted by 10,000+ companies worldwide
          </span>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl lg:text-8xl font-black leading-none mb-8"
        >
          <span className="block text-white mb-4">Transform Your</span>
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Business Flow
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          Streamline operations, boost productivity, and scale your business
          with our{" "}
          <span className="text-cyan-300 font-semibold">
            cutting-edge SaaS platform
          </span>{" "}
          designed for modern enterprises.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden shadow-lg shadow-cyan-500/25"
          >
            <span className="relative z-10">Start Free Trial</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-transparent border-2 border-cyan-500/50 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 hover:border-cyan-400 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
              <Play className="w-3 h-3 text-white fill-current" />
            </div>
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroTest;
