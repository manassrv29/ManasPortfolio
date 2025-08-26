"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Phone, MapPin, Code2 } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Avatar className="w-36 h-36 mx-auto mb-8 ring-4 ring-blue-100 shadow-xl animate-scale-in hover-glow">
            <AvatarImage src="/professional-headshot-of-computer-science-student.png" alt="Manas Srivastava" />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              MS
            </AvatarFallback>
          </Avatar>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight animate-fade-in-up animation-delay-200">
            Manas Srivastava
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 mb-6 font-medium animate-fade-in-up animation-delay-400">
            Computer Science Engineering Student
          </p>

          <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-600">
            AI/ML Enthusiast • Full-Stack Developer • Amazon ML Summer School Scholar
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100 animate-slide-in-left animation-delay-800 hover-lift">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-slate-700">Dehradun, Uttarakhand</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100 animate-fade-in-up animation-delay-800 hover-lift">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-slate-700">+91-9829149265</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100 animate-slide-in-right animation-delay-800 hover-lift">
              <Mail className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-slate-700">manassrv29@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-10">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 bg-transparent animate-scale-in animation-delay-1000 hover-lift"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/manas-srivastava-a5561016b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 mr-2 text-blue-600" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 bg-transparent animate-scale-in animation-delay-1000 hover-lift"
              asChild
            >
              <a href="https://github.com/manassrv29" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2 text-blue-600" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 bg-transparent animate-scale-in animation-delay-1000 hover-lift"
              asChild
            >
              <a href="https://leetcode.com/u/manassrv29/" target="_blank" rel="noopener noreferrer">
                <Code2 className="h-5 w-5 mr-2 text-blue-600" />
                LeetCode
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 animate-bounce-gentle hover-glow"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 px-8 py-3 bg-transparent animate-pulse-gentle hover-lift"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
