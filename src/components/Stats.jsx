import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: Users,
      number: 50000,
      suffix: "+",
      label: "Active Users",
      description: "Growing community worldwide",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      number: 120,
      suffix: "+",
      label: "Countries",
      description: "Global presence and reach",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      number: 99.9,
      suffix: "%",
      label: "Uptime",
      description: "Reliable service guarantee",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      number: 25,
      suffix: "+",
      label: "Awards",
      description: "Industry recognition",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by businesses
            <span className="block gradient-text">around the world</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our platform has helped thousands of companies streamline their
            operations and achieve remarkable growth across the globe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} inView={inView} />
          ))}
        </div>

        {/* Additional Visual Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative"
        >
          {/* Stats Image Placeholder */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl shadow-2xl shadow-cyan-500/10 p-8 max-w-4xl mx-auto border border-cyan-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Real-time Analytics Dashboard
                </h3>
                <p className="text-white/80 mb-6">
                  Monitor your business performance with our comprehensive
                  analytics suite. Get insights that matter and make data-driven
                  decisions.
                </p>
                <div className="space-y-3">
                  {[
                    "Real-time data visualization",
                    "Custom reporting tools",
                    "Performance tracking",
                    "Predictive analytics",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      <span className="text-white/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl p-6 border border-cyan-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white">
                    Performance Overview
                  </h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>

                {/* Animated Chart Bars */}
                <div className="flex items-end justify-between h-32 space-x-2">
                  {[65, 80, 45, 90, 70, 85, 60].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={
                        inView ? { height: `${height}%` } : { height: 0 }
                      }
                      transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                      className="bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg flex-1 min-w-0"
                    />
                  ))}
                </div>

                {/* Chart Labels */}
                <div className="flex justify-between mt-2 text-xs text-white/60">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <span key={day}>{day}</span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const increment = stat.number / 50;
        const counter = setInterval(() => {
          setCount((prev) => {
            if (prev >= stat.number) {
              clearInterval(counter);
              return stat.number;
            }
            return Math.min(prev + increment, stat.number);
          });
        }, 30);
        return () => clearInterval(counter);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [inView, stat.number, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="group bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 text-center relative overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
      >
        <stat.icon className="w-8 h-8 text-white" />
      </motion.div>

      {/* Number */}
      <motion.div className="text-4xl lg:text-5xl font-bold text-white mb-2">
        {Math.floor(count).toLocaleString()}
        {stat.suffix}
      </motion.div>

      {/* Label */}
      <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>

      {/* Description */}
      <p className="text-white/70">{stat.description}</p>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
};

export default Stats;
