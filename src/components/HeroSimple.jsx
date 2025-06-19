import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Zap, Shield, Users } from "lucide-react";

const HeroSimple = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

      {/* Simple Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20" />

      {/* Content Container */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
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
              variants={itemVariants}
              className="text-5xl lg:text-8xl font-black leading-none mb-8"
            >
              <span className="block text-white mb-4">Transform Your</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Business Flow
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl"
            >
              Streamline operations, boost productivity, and scale your business
              with our{" "}
              <span className="text-cyan-300 font-semibold">
                cutting-edge SaaS platform
              </span>{" "}
              designed for modern enterprises.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              {[
                {
                  icon: Zap,
                  text: "Lightning Fast",
                  color: "from-cyan-400 to-blue-500",
                },
                {
                  icon: Shield,
                  text: "Enterprise Security",
                  color: "from-emerald-400 to-teal-500",
                },
                {
                  icon: Users,
                  text: "Team Collaboration",
                  color: "from-purple-400 to-pink-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group flex items-center space-x-3 bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 rounded-full px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-gray-700/60 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div
                    className={`p-1 rounded-full bg-gradient-to-r ${feature.color}`}
                  >
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
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

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-cyan-500/30"
            >
              {[
                { number: "99.9%", label: "Uptime", icon: "🚀" },
                { number: "10K+", label: "Active Users", icon: "👥" },
                { number: "50+", label: "Integrations", icon: "🔗" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl backdrop-blur-sm border border-cyan-500/20 overflow-hidden">
              {/* Placeholder for dashboard/app preview */}
              <div className="absolute inset-4 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl border border-cyan-500/10">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-emerald-400/30 to-teal-500/30 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;
