import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Award, Smartphone, Brain, Utensils } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "SwaPehchaan - AI-ML Powered Digital Identity Verification System",
      description:
        "Advanced biometric verification system for Indian Oil Corporation Limited featuring AI-powered face recognition, real-time liveness detection, and enterprise-grade security for 500,000+ pension records.",
      icon: <Brain className="h-6 w-6" />,
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
    },
    {
      title: "Knee Revive - AI/ML Powered Smart Knee Monitoring",
      description:
        "Wearable solution for injury detection and motion analysis, aiding sportspersons and the elderly in rehabilitation and injury prevention. Won 1st Runner-Up at Hack-Wave 2025.",
      icon: <Smartphone className="h-6 w-6" />,
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
    },
    {
      title: "WhatAMess - ML Powered Mess Management",
      description:
        "Scalable web platform for efficient mess management enabling peer-to-peer meal delivery with predictive recommendation system achieving 10% increase in conversion rates.",
      icon: <Utensils className="h-6 w-6" />,
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
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining AI/ML, mobile development, and full-stack technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            /* Added staggered animations and hover effects to project cards */
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-lg transition-all duration-500 hover-lift animate-fade-in-up animation-delay-${(index + 2) * 200}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary hover-scale">{project.icon}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        {project.award && <Award className="h-5 w-5 text-yellow-500 animate-bounce-gentle" />}
                      </div>
                      <Badge variant="secondary" className="mb-2 hover-scale">
                        {project.category}
                      </Badge>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      /* Added slide-in animation to feature list items */
                      <li
                        key={idx}
                        className={`flex items-start gap-2 text-sm animate-slide-in-left animation-delay-${(idx + 1) * 100}`}
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      /* Added hover scale animation to technology badges */
                      <Badge key={idx} variant="outline" className="hover-scale">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-primary">Impact: {project.impact}</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="hover-lift hover-glow">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
