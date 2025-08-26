"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin, Code2, ArrowRight, Sparkles, Star } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Enhanced Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.12),transparent_50%)]"></div>
      
      {/* Enhanced Blue Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
      
      {/* Blue Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-25 animate-float blur-sm"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-30 animate-float-delayed blur-sm"></div>
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-full opacity-20 animate-float blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-25 animate-float-delayed blur-sm"></div>

      {/* Blue Interactive Mouse Glow */}
      <div 
        className="absolute pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          borderRadius: '50%'
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Blue Circular Avatar with MS */}
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-full opacity-25 group-hover:opacity-35 transition-opacity duration-500 blur-xl scale-110"></div>
            <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center ring-4 ring-blue-200/50 dark:ring-blue-700/50 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500">
              <span className="text-4xl font-bold text-white select-none">
                MS
              </span>
            </div>
            <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full shadow-lg animate-bounce">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Blue Gradient Name */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-900 via-blue-600 via-indigo-600 to-blue-900 dark:from-blue-200 dark:via-blue-400 dark:via-indigo-400 dark:to-blue-200 bg-clip-text text-transparent leading-tight animate-gradient bg-300% animate-pulse">
              Manas Srivastava
            </h1>
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                <Code2 className="h-5 w-5 text-blue-600 animate-pulse" />
                <span className="text-lg font-medium text-blue-700 dark:text-blue-300">Computer Science Engineering Student</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 transition-transform cursor-default">
                  <Star className="h-3 w-3 inline mr-1" />
                  AI/ML Enthusiast
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/30 text-sky-700 dark:text-sky-300 rounded-full font-medium border border-sky-200/50 dark:border-sky-700/50 hover:scale-105 transition-transform cursor-default">
                  <Code2 className="h-3 w-3 inline mr-1" />
                  Full-Stack Developer
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium border border-indigo-200/50 dark:border-indigo-700/50 hover:scale-105 transition-transform cursor-default">
                  <Sparkles className="h-3 w-3 inline mr-1" />
                  Amazon ML Scholar
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Information */}
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <div className="group flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg group-hover:rotate-12 transition-transform">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Dehradun, Uttarakhand</span>
            </div>
            <div className="group flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg group-hover:rotate-12 transition-transform">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">+91-9829149265</span>
            </div>
            <div className="group flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg group-hover:rotate-12 transition-transform">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">manassrv29@gmail.com</span>
            </div>
          </div>

          {/* Trendy Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="default"
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-blue-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/manas-srivastava-a5561016b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="default"
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 hover:text-white hover:border-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="https://github.com/manassrv29" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="default"
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:border-orange-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="https://leetcode.com/u/manassrv29/" target="_blank" rel="noopener noreferrer">
                <Code2 className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                LeetCode
              </a>
            </Button>
          </div>

          {/* Enhanced Blue CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all duration-500 px-10 py-4 text-lg font-semibold hover:scale-105 relative overflow-hidden"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Sparkles className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">View Portfolio</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-blue-300 dark:border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-blue-600 hover:scale-105 transition-all duration-500 px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
