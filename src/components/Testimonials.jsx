import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content:
        "TechFlow has completely transformed how we manage our operations. The intuitive interface and powerful features have increased our productivity by 300%. It's simply the best SaaS platform we've ever used.",
      rating: 5,
      metrics: {
        improvement: "300%",
        label: "Productivity Increase",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateLab",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "The analytics and reporting features are outstanding. We can now make data-driven decisions faster than ever before. The customer support team is also incredibly responsive and helpful.",
      rating: 5,
      metrics: {
        improvement: "85%",
        label: "Faster Decision Making",
      },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Operations Director",
      company: "GrowthCorp",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "Implementation was seamless, and the ROI was immediate. Our team collaboration has improved dramatically, and we've reduced operational costs by 40%. Highly recommend TechFlow!",
      rating: 5,
      metrics: {
        improvement: "40%",
        label: "Cost Reduction",
      },
    },
    {
      id: 4,
      name: "David Park",
      role: "Founder",
      company: "StartupHub",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "As a startup, we needed a solution that could scale with us. TechFlow has been perfect - from day one to now with 100+ employees. The platform grows with your business needs.",
      rating: 5,
      metrics: {
        improvement: "500%",
        label: "Team Growth",
      },
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "VP of Marketing",
      company: "BrandForward",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      content:
        "The automation features have saved us countless hours every week. What used to take our team days now happens automatically. It's like having an extra team member working 24/7.",
      rating: 5,
      metrics: {
        improvement: "60%",
        label: "Time Saved",
      },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-white">
              TESTIMONIALS
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            What our customers
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              are saying
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and
            growing businesses have to say about their experience with TechFlow.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Testimonial Content */}
                <div>
                  <Quote className="w-12 h-12 text-yellow-400 mb-6" />

                  <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                    />
                    <div>
                      <div className="font-semibold text-white text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-white/70">
                        {testimonials[currentIndex].role} at{" "}
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Card */}
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-bold gradient-text mb-4">
                      {testimonials[currentIndex].metrics.improvement}
                    </div>
                    <div className="text-xl font-semibold text-gray-800 mb-6">
                      {testimonials[currentIndex].metrics.label}
                    </div>

                    {/* Visual Metric */}
                    <div className="bg-gray-100 rounded-full h-4 mb-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                      />
                    </div>

                    <p className="text-gray-600">
                      Results achieved within 6 months of implementation
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-white/60 mb-8 text-lg">
            Trusted by leading companies worldwide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {[
              "TechStart",
              "InnovateLab",
              "GrowthCorp",
              "StartupHub",
              "BrandForward",
            ].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white font-semibold text-center"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
