"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Award, Smartphone, Brain, Utensils, ChevronLeft, ChevronRight, Code, Rocket } from "lucide-react"
import { useState, useEffect } from "react"

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const projects = [
    {
      title: "SwaPehchaan - AI-ML Powered Digital Identity Verification System",
      description:
        "Advanced biometric verification system for Indian Oil Corporation Limited featuring AI-powered face recognition, real-time liveness detection, and enterprise-grade security for 500,000+ pension records.",
      icon: Brain,
      features: [
        "MobileFaceNet-based neural network with ArcFace loss optimization",
        "Eye Aspect Ratio (EAR) based blink detection for liveness verification",
        "Flask microservices backend with React Native mobile frontend",
        "RSA encryption and comprehensive audit logging",
        "95%+ accuracy in face verification with fraud prevention",
      ],
      technologies: [
        "React Native",
        "Flask",
        "TensorFlow",
        "Computer Vision",
        "Biometric Auth",
        "RSA Encryption",
        "TypeScript",
        "Android Studio",
        "Xcode",
      ],
      category: "Enterprise AI-ML Solution",
      impact: "Digitized verification for 500,000+ pensioners",
      gradient: "from-blue-600 via-purple-600 to-indigo-600",
      bgGradient: "from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20"
    },
    {
      title: "Knee Revive - AI/ML Powered Smart Knee Monitoring",
      description:
        "Wearable solution for injury detection and motion analysis, aiding sportspersons and the elderly in rehabilitation and injury prevention. Won 1st Runner-Up at Hack-Wave 2025.",
      icon: Smartphone,
      features: [
        "ESP32 microcontroller with MPU6050 sensor integration",
        "Real-time knee joint motion data capture via WiFi",
        "On-device TensorFlow Lite model for movement classification",
        "React Native frontend with RESTful Flask backend",
        "Real-time data visualization and instant feedback",
      ],
      technologies: ["ReactJS", "Flask", "TensorFlow Lite", "ESP32", "MPU6050", "IoT", "Machine Learning", "MongoDB"],
      category: "IoT & Healthcare",
      impact: "1st Runner-Up - Hack-Wave 2025, GTBIT New Delhi",
      award: true,
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20"
    },
    {
      title: "WhatAMess - ML Powered Mess Management",
      description:
        "Scalable web platform for efficient mess management enabling peer-to-peer meal delivery with predictive recommendation system achieving 10% increase in conversion rates.",
      icon: Utensils,
      features: [
        "Full-stack application with Node.js and MongoDB backend",
        "React.js frontend with component-based architecture",
        "Predictive Recommendation System using Python and Scikit-Learn",
        "Firebase Authentication with role-based access control",
        "Google Maps API integration for delivery tracking",
        "Socket.IO for real-time order status updates",
      ],
      technologies: [
        "Node.js",
        "React.js",
        "MongoDB",
        "Python",
        "Scikit-Learn",
        "Firebase",
        "Google Maps API",
        "Socket.IO",
      ],
      category: "Full-Stack Web Application",
      impact: "10% increase in conversion rates from recommendations",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      bgGradient: "from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20"
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToProject = (index: number) => {
    setCurrentProject(index)
    setIsAutoPlaying(false)
  }

  const currentProj = projects[currentProject]
  const IconComponent = currentProj.icon

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <Code className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Featured Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
            Project Showcase
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Innovative solutions combining AI/ML, mobile development, and full-stack technologies
          </p>
        </div>

        {/* Main Slideshow Container */}
        <div className="relative">
          {/* Project Card */}
          <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${currentProj.bgGradient} border border-white/20 shadow-2xl`}>
            {/* Project Header */}
            <div className="relative p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Icon and Title */}
                <div className="flex-shrink-0">
                  <div className={`p-6 rounded-2xl bg-gradient-to-r ${currentProj.gradient} shadow-xl`}>
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge className={`bg-gradient-to-r ${currentProj.gradient} text-white border-0 px-4 py-2 text-sm font-medium shadow-lg`}>
                      {currentProj.category}
                    </Badge>
                    {currentProj.award && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                        <Award className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">Award Winner</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                    {currentProj.title}
                  </h3>
                  
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {currentProj.description}
                  </p>

                  {/* Impact */}
                  <div className="flex items-center gap-2 mb-6">
                    <Rocket className="h-5 w-5 text-emerald-600" />
                    <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                      Impact: {currentProj.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="px-8 lg:px-12 pb-8 lg:pb-12">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {currentProj.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2.5 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProj.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="px-3 py-2 bg-white/70 dark:bg-slate-800/70 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                <Button className={`bg-gradient-to-r ${currentProj.gradient} hover:shadow-lg transition-all duration-300 text-white border-0`}>
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                <Button variant="outline" className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6 text-slate-700 dark:text-slate-300" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6 text-slate-700 dark:text-slate-300" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject 
                  ? `bg-gradient-to-r ${currentProj.gradient} shadow-lg scale-125` 
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>
      </div>
    </section>
  )
}
