"use client"

import { Badge } from "@/components/ui/badge"
import { GraduationCap, Target, Calendar, Code, Brain, Rocket, Star, Trophy, BookOpen, Zap } from "lucide-react"
import { useState, useEffect } from "react"

export function About() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  const journeyMilestones = [
    {
      year: "2022",
      title: "Started B.Tech Journey",
      description: "Computer Science Engineering at Graphic Era Deemed University",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      details: ["Discovered passion for programming", "Started with C++ and Java", "Built first console applications"]
    },
    {
      year: "2023",
      title: "Web Development & DSA",
      description: "Mastered full-stack development and data structures",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      details: ["Built 10+ web applications", "Solved 400+ coding problems", "Learned React.js and Node.js"]
    },
    {
      year: "2024",
      title: "AI/ML Breakthrough",
      description: "First Amazon ML Summer School selection from 90,000+ applicants",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      details: ["Mastered TensorFlow and PyTorch", "Built NLP projects", "Explored computer vision","Machine Learning","Deep Learning"]
    },
    {
      year: "2025",
      title: "Industry Experience",
      description: "IOCL Internship & Second Amazon ML Summer School",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      details: ["Developed enterprise mobile app", "Implemented biometric authentication", "Won hackathon competitions","Machine Learning","Deep Learning","Computer Vision","Data Science"]
    },
    {
      year: "2025",
      title: "Innovation & Impact",
      description: "Won first runner's up in Google Developer Group hackathon",
      icon: Star,
      color: "from-indigo-500 to-purple-500",
      details: ["Focus on Generative AI", "Enterprise solutions", "ioT Solutions","AI/ML Solutions","Machine Learning","Deep Learning","Computer Vision","Data Science"]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    const elements = document.querySelectorAll('.timeline-item')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6">
            <Target className="h-5 w-5 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Personal Story</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Passionate Computer Science Engineering student with expertise in AI/ML, Mobile App Development, and full-stack solutions. Here&apos;s my journey of continuous learning and innovation.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="group relative p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-800 dark:text-slate-200">B.Tech - Computer Science Engineering</p>
              <p className="text-slate-600 dark:text-slate-400">Graphic Era Deemed to be University</p>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0">
                  CGPA: 8.88
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-0">
                  2022-2026
                </Badge>
              </div>
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Achievements</h3>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-800 dark:text-slate-200">2X Amazon ML Summer School</p>
              <p className="text-slate-600 dark:text-slate-400">Selected from 90,000+ applicants</p>
              <div className="flex items-center gap-2">
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-0">
                  2024 & 2025
                </Badge>
                <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-0">
                  Top 0.1%
                </Badge>
              </div>
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Focus Areas</h3>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-800 dark:text-slate-200">AI/ML & Full-Stack</p>
              <p className="text-slate-600 dark:text-slate-400">NLP, LLMs, Mobile Development</p>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-0">
                  450+ Problems
                </Badge>
                <Badge className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-0">
                  5+ Projects
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Journey Timeline */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">My Journey Timeline</h3>
            <p className="text-slate-600 dark:text-slate-300">From curious beginner to AI/ML specialist</p>
          </div>

          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-pink-500 via-orange-500 to-green-500 hidden lg:block" style={{top: '120px', height: 'calc(100% - 120px)'}}></div>

          <div className="space-y-12">
            {journeyMilestones.map((milestone, index) => {
              const IconComponent = milestone.icon
              const isVisible = visibleItems.includes(index)
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`timeline-item relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8 gap-6`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-4 border-gradient-to-r shadow-lg hidden lg:block z-10" style={{borderImage: `linear-gradient(45deg, ${milestone.color.split(' ')[1]}, ${milestone.color.split(' ')[3]}) 1`}}></div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <div className={`group relative p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:scale-105`}>
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-bold text-sm mb-4 shadow-lg`}>
                        <Calendar className="h-4 w-4" />
                        {milestone.year}
                      </div>

                      {/* Icon and Title */}
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-row`}>
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${milestone.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                          {milestone.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2">
                        {milestone.details.map((detail, idx) => (
                          <div key={idx} className={`flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-row`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${milestone.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="w-full lg:w-5/12 hidden lg:block"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Personal Quote */}
        <div className="mt-16 text-center">
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 border border-white/20 shadow-lg max-w-4xl mx-auto">
            <div className="text-4xl text-blue-500 mb-4">&quot;</div>
            <p className="text-xl font-medium text-slate-700 dark:text-slate-300 italic mb-4">
              &quot;Technology is not just about solving problems; it&apos;s about creating possibilities that didn&apos;t exist before. Every line of code I write is a step towards building a smarter, more connected world.&quot;
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Manas Srivastava</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
