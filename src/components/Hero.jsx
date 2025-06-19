import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";
import RippleEffect from "./RippleEffect";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      heroElement.addEventListener("mouseenter", handleMouseEnter);
      heroElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
        heroElement.removeEventListener("mouseenter", handleMouseEnter);
        heroElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <RippleEffect className="w-full">
      <section
        ref={heroRef}
        id="home"
        className="relative flex items-center overflow-hidden"
        style={{
          minHeight: "calc(100vh - 0px)",
          paddingTop: "80px",
          paddingBottom: "40px",
        }}
      >
        {/* Dark Mode Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

        {/* Dynamic Neural Network Pattern */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(59, 130, 246, 0.15) 0%, 
              rgba(147, 51, 234, 0.1) 25%, 
              rgba(236, 72, 153, 0.08) 50%, 
              rgba(245, 158, 11, 0.06) 75%, 
              transparent 100%)`,
          }}
          animate={{
            opacity: isHovered ? 0.4 : 0.3,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: [`0px 0px`, `50px 50px`],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Cyberpunk Glow Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: "-100%",
                right: "-100%",
              }}
              animate={{
                x: ["100%", "-100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Holographic Mesh Gradient */}
        <motion.div
          className="absolute inset-0 opacity-25"
          animate={{
            background: [
              `conic-gradient(from ${mousePosition.x}deg at 50% 50%, 
                #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #3b82f6)`,
              `conic-gradient(from ${mousePosition.x + 360}deg at 50% 50%, 
                #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #3b82f6)`,
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Dark Mode Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Cyberpunk Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x:
                  Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1200),
                y:
                  Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 800),
                scale: 0,
              }}
              animate={{
                y: [0, -60, 0],
                scale: [0.2, 1.2, 0.2],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.9, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
              className={`absolute w-2 h-2 rounded-full ${
                i % 4 === 0
                  ? "bg-blue-400/70"
                  : i % 4 === 1
                  ? "bg-purple-400/70"
                  : i % 4 === 2
                  ? "bg-pink-400/70"
                  : "bg-cyan-400/70"
              } shadow-lg`}
              style={{
                boxShadow: `0 0 10px ${
                  i % 4 === 0
                    ? "#60a5fa"
                    : i % 4 === 1
                    ? "#a78bfa"
                    : i % 4 === 2
                    ? "#f472b6"
                    : "#22d3ee"
                }`,
              }}
            />
          ))}
        </div>

        {/* Digital Rain Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent"
              style={{
                left: `${(i * 7) % 100}%`,
                height: "100px",
              }}
              animate={{
                y: ["-100px", "100vh"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Interactive Glow Effect */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-96 h-96 bg-gradient-radial from-blue-400/40 via-purple-500/20 to-transparent rounded-full blur-xl" />
          <div className="w-64 h-64 bg-gradient-radial from-cyan-300/30 via-pink-400/15 to-transparent rounded-full blur-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Sparkle Effects */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: mousePosition.x + "%",
                  y: mousePosition.y + "%",
                  scale: 0,
                }}
                animate={{
                  x: mousePosition.x + (Math.random() - 0.5) * 20 + "%",
                  y: mousePosition.y + (Math.random() - 0.5) * 20 + "%",
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="absolute"
              >
                <Sparkles className="w-4 h-4 text-cyan-300/90" />
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              {/* Enhanced Badge */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-3 bg-gray-800/60 backdrop-blur-md border border-cyan-500/30 rounded-full px-6 py-3 mb-8 shadow-2xl shadow-cyan-500/20"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-5 h-5 text-cyan-400 fill-current" />
                </motion.div>
                <span className="text-sm font-semibold text-white">
                  Trusted by 10,000+ companies worldwide
                </span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
              </motion.div>

              {/* Enhanced Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-8xl font-black leading-none mb-8"
              >
                <motion.span
                  className="block text-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Transform Your
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  Business Flow
                </motion.span>
              </motion.h1>

              {/* Enhanced Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl"
              >
                Streamline operations, boost productivity, and scale your
                business with our{" "}
                <span className="text-cyan-300 font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  cutting-edge SaaS platform
                </span>{" "}
                designed for modern enterprises.
              </motion.p>

              {/* Enhanced Feature Pills */}
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
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center space-x-3 bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 rounded-full px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-gray-700/60 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <div
                      className={`p-1 rounded-full bg-gradient-to-r ${feature.color}`}
                    >
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-white">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(34, 211, 238, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden btn-ripple shadow-lg shadow-cyan-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(34, 211, 238, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-transparent border-2 border-cyan-500/50 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 hover:border-cyan-400 backdrop-blur-sm btn-ripple hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
                  >
                    <Play className="w-3 h-3 text-white fill-current" />
                  </motion.div>
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-cyan-500/30"
              >
                {[
                  {
                    number: "99.9%",
                    label: "Uptime",
                    icon: "🚀",
                    color: "from-emerald-400 to-teal-500",
                  },
                  {
                    number: "10K+",
                    label: "Active Users",
                    icon: "👥",
                    color: "from-purple-400 to-pink-500",
                  },
                  {
                    number: "50+",
                    label: "Integrations",
                    icon: "🔗",
                    color: "from-cyan-400 to-blue-500",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="mb-3">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-xl">{stat.icon}</span>
                      </div>
                    </div>
                    <motion.div
                      className="text-3xl lg:text-4xl font-black mb-2 text-white"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(255,255,255,0)",
                          "0 0 10px rgba(255,255,255,0.3)",
                          "0 0 0px rgba(255,255,255,0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Interactive Demo */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Main Dashboard Mockup */}
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-white rounded-2xl shadow-2xl p-6 backdrop-blur-sm"
                >
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-600 rounded-lg"></div>
                      <div>
                        <div className="h-3 bg-gray-300 rounded w-20 mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="space-y-4">
                    {/* Chart Area */}
                    <div className="h-32 bg-gradient-to-r from-primary-100 to-purple-100 rounded-lg flex items-end justify-around p-4">
                      {[40, 70, 45, 80, 60, 90, 55].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: index * 0.1, duration: 0.8 }}
                          className="bg-primary-500 rounded-t w-4"
                        />
                      ))}
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "2.4K", label: "Users", color: "bg-blue-500" },
                        {
                          value: "18%",
                          label: "Growth",
                          color: "bg-green-500",
                        },
                        {
                          value: "$12K",
                          label: "Revenue",
                          color: "bg-purple-500",
                        },
                        {
                          value: "94%",
                          label: "Satisfaction",
                          color: "bg-orange-500",
                        },
                      ].map((card, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.5,
                          }}
                          className="bg-gray-50 rounded-lg p-3"
                        >
                          <div
                            className={`w-3 h-3 ${card.color} rounded-full mb-2`}
                          ></div>
                          <div className="font-bold text-gray-800">
                            {card.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {card.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 w-32"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs font-medium">Live</span>
                  </div>
                  <div className="text-lg font-bold text-gray-800">1,247</div>
                  <div className="text-xs text-gray-500">Active Now</div>
                </motion.div>

                <motion.div
                  animate={{
                    x: [0, -15, 0],
                    y: [0, 15, 0],
                    rotate: [0, -3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 w-36"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-medium">Performance</span>
                  </div>
                  <div className="text-lg font-bold text-gray-800">98.7%</div>
                  <div className="text-xs text-gray-500">Uptime</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>
    </RippleEffect>
  );
};

export default Hero;
