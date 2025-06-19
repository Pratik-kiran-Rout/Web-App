import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  Shield,
  Users,
  BarChart3,
  Smartphone,
  Cloud,
  Lock,
  Workflow,
  ArrowRight,
} from "lucide-react";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Experience blazing-fast load times and seamless interactions with our optimized infrastructure.",
      color: "from-yellow-400 to-orange-500",
      delay: 0,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.",
      color: "from-green-400 to-emerald-500",
      delay: 0.1,
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Real-time collaboration tools that keep your team synchronized and productive across all projects.",
      color: "from-blue-400 to-cyan-500",
      delay: 0.2,
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Comprehensive insights and reporting tools to make data-driven decisions for your business.",
      color: "from-purple-400 to-pink-500",
      delay: 0.3,
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description:
        "Native mobile experience with offline capabilities and push notifications for on-the-go productivity.",
      color: "from-indigo-400 to-purple-500",
      delay: 0.4,
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Seamlessly integrate with popular cloud services and sync your data across all platforms.",
      color: "from-teal-400 to-blue-500",
      delay: 0.5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="features"
      className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gray-800/60 backdrop-blur-md border border-cyan-500/30 text-cyan-400 rounded-full px-6 py-3 mb-8 shadow-lg shadow-cyan-500/20"
          >
            <Workflow className="w-4 h-4" />
            <span className="text-sm font-semibold">POWERFUL FEATURES</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Everything you need to
            <span className="block gradient-text">scale your business</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Our comprehensive suite of tools and features is designed to
            streamline your workflow, enhance productivity, and drive growth for
            businesses of all sizes.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-400/40 overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-white/70 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2 text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>

              {/* Hover Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 bg-gradient-to-r from-primary-600 to-purple-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to transform your workflow?
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Join thousands of companies already using TechFlow to streamline
                their operations and boost productivity. Start your free trial
                today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Lock, title: "99.9% Uptime", desc: "Guaranteed" },
                { icon: Users, title: "24/7 Support", desc: "Always here" },
                {
                  icon: Shield,
                  title: "SOC 2 Compliant",
                  desc: "Enterprise ready",
                },
                { icon: Cloud, title: "Global CDN", desc: "Lightning fast" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-semibold mb-1">{item.title}</div>
                  <div className="text-sm text-white/70">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
