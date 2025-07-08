import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Code, Cpu, Palette, Rocket, BrainCircuit } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'devicon/devicon.min.css'; // Add this import for Devicon styles

export function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringRole, setIsHoveringRole] = useState(false);
  const [currentRole, setCurrentRole] = useState("");
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const roles = [
    { text: "Software Developer", icon: <Code className="w-5 h-5" /> },
    { text: "Problem Solver", icon: <BrainCircuit className="w-5 h-5" /> },
    { text: "ML Engineer", icon: <Cpu className="w-5 h-5" /> },
    { text: "Full Stack Developer", icon: <Code className="w-5 h-5" /> },
    { text: "UI/UX Designer", icon: <Palette className="w-5 h-5" /> },
    { text: "Tech Innovator", icon: <Rocket className="w-5 h-5" /> },
    { text: "Lifelong Learner", icon: <Sparkles className="w-5 h-5" /> },
  ];

  // Floating shapes colors for light/dark mode
  const floatingColors = {
    light: {
      blue: 'bg-blue-400/80',
      purple: 'bg-purple-400/80',
      green: 'bg-emerald-400/80',
      yellow: 'bg-amber-400/80',
      pink: 'bg-pink-400/80'
    },
    dark: {
      blue: 'bg-blue-600/80',
      purple: 'bg-purple-600/80',
      green: 'bg-emerald-600/80',
      yellow: 'bg-amber-600/80',
      pink: 'bg-pink-600/80'
    }
  };

  const [mode, setMode] = useState('light');
  const [currentColors, setCurrentColors] = useState(floatingColors.light);

  useEffect(() => {
    // Check for dark mode preference
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setMode(isDark ? 'dark' : 'light');
    setCurrentColors(isDark ? floatingColors.dark : floatingColors.light);

    // Listen for changes in color scheme
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorSchemeChange = (e) => {
      setMode(e.matches ? 'dark' : 'light');
      setCurrentColors(e.matches ? floatingColors.dark : floatingColors.light);
    };
    colorSchemeQuery.addEventListener('change', handleColorSchemeChange);

    return () => {
      colorSchemeQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { duration: 0.3 }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    },
    floatDelay: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 2
      }
    }
  };

  const roleIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20
      }
    }
  };

  // Function to safely get a random color
  const getRandomColor = () => {
    const colorKeys = Object.keys(currentColors);
    const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    return currentColors[randomKey];
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      ref={ref}
    >
      {/* Enhanced Animated background with more dynamic elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Subtle grid pattern with animation */}
        <motion.div 
          className="absolute inset-0 opacity-10 dark:opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Animated gradient orbs with more dynamic movement */}
        <motion.div 
          className={`absolute top-1/4 left-1/4 w-64 h-64 ${currentColors.purple} rounded-full blur-3xl`}
          animate={{
            x: [0, 40, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div 
          className={`absolute bottom-1/4 right-1/4 w-64 h-64 ${currentColors.purple} rounded-full blur-3xl`}
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div 
          className={`absolute top-1/3 right-1/5 w-32 h-32 ${currentColors.green} rounded-full blur-2xl`}
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 6
          }}
        />

        <motion.div 
          className={`absolute bottom-1/3 left-1/5 w-40 h-40 ${currentColors.pink} rounded-full blur-2xl`}
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4
          }}
        />
      </div>

      {/* Floating particles with more variety */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => {
          const size = Math.random() * 12 + 5;
          const duration = Math.random() * 15 + 10;
          const delay = Math.random() * 5;
          const color = getRandomColor();
          
          return (
            <motion.div
              key={i}
              className={`absolute rounded-full ${color}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.7
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 120],
                x: [0, (Math.random() - 0.5) * 80],
                opacity: [0.7, 0.2, 0.7],
                rotate: [0, 360]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: delay
              }}
            />
          );
        })}
      </div>

      {/* Floating tech icons - Updated with proper Devicon classes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['react', 'nodejs', 'python', 'javascript', 'html5', 'css3', 'git', 'docker'].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute text-gray-400/20 dark:text-gray-600/30 text-4xl"
            style={{
              left: `${10 + (Math.random() * 80)}%`,
              top: `${10 + (Math.random() * 80)}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 30],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2
            }}
          >
            <i className={`devicon-${tech}-plain colored`} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column - Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 order-2 md:order-1">
            <motion.div className="space-y-2" variants={itemVariants}>
              <motion.div 
                className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/50 backdrop-blur-sm text-purple-600 dark:text-purple-300 text-sm font-medium px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Hey! 👋 I'm</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600 bg-clip-text text-transparent animate-gradient"
                variants={itemVariants}
              >
                Prajwal Gurnule
              </motion.h1>
              
              <motion.div 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 min-h-[2.5rem] flex items-center justify-center lg:justify-start gap-2"
                variants={itemVariants}
                onHoverStart={() => setIsHoveringRole(true)}
                onHoverEnd={() => setIsHoveringRole(false)}
              >
                <span>I'm a</span>
                <div className="relative">
                  <TypeWriter 
                    words={roles.map(r => r.text)} 
                    delay={100} 
                    onWordChange={(word) => setCurrentRole(word)}
                  />
                  {isHoveringRole && (
                    <motion.div 
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2"
                      variants={roleIconVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {roles.find(r => r.text === currentRole)?.icon}
                    </motion.div>
                  )}
                </div>
              </motion.div>

              <motion.p 
                className="text-gray-500 dark:text-gray-400 max-w-lg"
                variants={itemVariants}
              >
                Crafting digital experiences with clean code and innovative solutions. 
                Passionate about building scalable applications and solving complex problems.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ContactInfo />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ActionButtons />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div 
            className="relative order-1 lg:order-2 flex justify-center"
            variants={imageVariants}
            whileHover="hover"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            {/* Floating solid circular elements with animations */}
            <motion.div 
              className={`absolute w-20 h-20 ${currentColors.blue} top-0 left-0 rounded-full`}
              variants={floatingVariants}
              animate="float"
            />
            <motion.div 
              className={`absolute w-24 h-24 ${currentColors.purple} bottom-0 right-0 rounded-full`}
              variants={floatingVariants}
              animate="floatDelay"
            />
            <motion.div 
              className={`absolute w-20 h-20 ${currentColors.green} top-4 right-4 rounded-full`}
              variants={floatingVariants}
              animate="float"
            />
            <motion.div 
              className={`absolute w-24 h-24 ${currentColors.yellow} bottom-4 left-4 rounded-full`}
              variants={floatingVariants}
              animate="floatDelay"
            />

            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl transition-all duration-1000 ${isHovering ? 'opacity-80 scale-110' : 'opacity-50 scale-100'}`} />
            
            {/* Profile image with border animation */}
            <div className="relative">
              <div className={`absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow ${isHovering ? 'border-purple-500/30' : ''}`} style={{ animationDuration: '20s' }} />
              <div className={`absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow-reverse ${isHovering ? 'border-purple-500/30' : ''}`} style={{ animationDuration: '25s', animationDelay: '2s' }} />
              
              <motion.img
                src="/assets/profile.jpg"
                alt="Prajwal Gurnule"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full shadow-2xl border-4 border-white/10 dark:border-gray-800/10"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              />
              
              {/* Tech badge floating around the profile */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 shadow-xl rounded-full p-3 flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                  rotate: [0, 10, -5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <i className="devicon-react-original colored text-2xl" />
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 shadow-xl rounded-full p-3 flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                  x: [0, -5, 0],
                  rotate: [0, -10, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2
                }}
              >
                <i className="devicon-java-plain colored text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator with animation */}
        <motion.div 
          className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 animate-bounce"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Link
            href="#about"
            className="p-3 rounded-full bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors flex items-center justify-center shadow-lg backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <ArrowDown className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-1" />
              <span className="text-xs font-medium text-purple-600 dark:text-purple-400">Scroll Down</span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}