import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroTest from "./components/HeroTest";
import HeroSimple from "./components/HeroSimple";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import ParallaxSection from "./components/ParallaxSection";
import ClickSpark from "./components/ClickSpark";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800"
          >
            <Navbar />
            <HeroSimple />
            <ClickSpark
              sparkColor="#3b82f6"
              sparkSize={12}
              sparkRadius={20}
              sparkCount={10}
              duration={500}
            >
              <Features />
              <ParallaxSection />
              <Stats />
              <Testimonials />
              <Pricing />
            </ClickSpark>
            <ClickSpark
              sparkColor="#ffffff"
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}
            >
              <Footer />
            </ClickSpark>
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
