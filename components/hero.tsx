"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Sparkles, Download } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,219,226,0.2),transparent_70%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-40 right-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float-delayed"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8">
          {/* Avatar with enhanced styling */}
          <div className="relative inline-block mb-8">
            <Avatar className="w-40 h-40 mx-auto ring-4 ring-gradient-to-r from-blue-400 to-purple-500 shadow-2xl animate-scale-in hover-glow">
              <AvatarImage src="/professional-headshot-of-computer-science-student.png" alt="Manas Srivastava" />
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-purple-700 text-white">
                MS
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg animate-bounce-gentle">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Enhanced Name with better gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 via-purple-800 to-slate-900 dark:from-white dark:via-blue-200 dark:via-purple-200 dark:to-white bg-clip-text text-transparent leading-tight animate-fade-in-up animation-delay-200">
            Manas Srivastava
          </h1>

          {/* Enhanced subtitle */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
              <Code2 className="h-5 w-5 text-blue-600" />
              <span className="text-lg font-medium text-blue-700 dark:text-blue-300">Computer Science Engineering Student</span>
            </div>
          </div>

          {/* Enhanced description */}
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-600">
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI/ML Enthusiast</span> • 
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Full-Stack Developer</span> • 
            <span className="font-semibold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent"> Amazon ML Summer School Scholar</span>
          </p>

          {/* Enhanced contact info cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="group flex items-center gap-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/20 animate-slide-in-left animation-delay-800 hover:shadow-xl transition-all duration-300">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Dehradun, Uttarakhand</span>
            </div>
            <div className="group flex items-center gap-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/20 animate-fade-in-up animation-delay-800 hover:shadow-xl transition-all duration-300">
              <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">+91-9829149265</span>
            </div>
            <div className="group flex items-center gap-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/20 animate-slide-in-right animation-delay-800 hover:shadow-xl transition-all duration-300">
              <div className="p-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg group-hover:scale-110 transition-transform">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">manassrv29@gmail.com</span>
            </div>
          </div>

          {/* Enhanced social links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-white/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 animate-scale-in animation-delay-1000 shadow-lg hover:shadow-xl"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/manas-srivastava-a5561016b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-white/20 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 hover:text-white hover:border-gray-800 transition-all duration-300 animate-scale-in animation-delay-1100 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="https://github.com/manassrv29" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-white/20 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:border-orange-500 transition-all duration-300 animate-scale-in animation-delay-1200 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="https://leetcode.com/u/manassrv29/" target="_blank" rel="noopener noreferrer">
                <Code2 className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                LeetCode
              </a>
            </Button>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all duration-500 px-10 py-4 text-lg font-semibold animate-bounce-gentle hover:scale-105"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Sparkles className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-purple-600 transition-all duration-500 px-10 py-4 text-lg font-semibold animate-pulse-gentle shadow-lg hover:shadow-xl hover:scale-105"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
          </div>

          {/* Resume Download Button */}
          <div className="mt-8">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
