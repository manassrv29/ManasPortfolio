import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Award, Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "2X Amazon ML Summer School",
      company: "Amazon",
      location: "Remote",
      period: "2024 & 2025",
      type: "Apprenticeship",
      description: [
        "Selected from 90,000+ applicants for the prestigious Amazon ML Summer School program",
        "Acquired practical expertise in advanced Machine learning concepts, including Natural Language Processing (NLP), Large Language Models (LLMs), and Generative AI",
        "Prepared to automate text analysis and fine-tune models",
      ],
      skills: ["Machine Learning", "NLP", "LLMs", "Generative AI", "Text Analysis","Reinforcement Learning","Hugging Face"],
      icon: Award,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile Application Developer",
      company: "Indian Oil Corporation Limited (IOCL)",
      location: "Gurgaon, India",
      period: "July - August 2025",
      type: "Internship",
      description: [
        "Spearheaded digital transformation of pensioner life certificate verification, directly addressing IOCL's operational efficiency and fraud prevention mandates",
        "Delivered enterprise-grade mobile solutions aligning with IOCL's data security policies",
        "Implemented biometric authentication for 500,000+ pension records in compliance with government regulations",
        "Developed a React Native app for streamlined verification process",
      ],
      skills: [
        "React Native",
        "Flask",
        "Enterprise Security",
        "Mobile Development",
        "Government Compliance",
        "Machine Learning",
        "Sql Database",
        "Android Studio",
        "Xcode",
        "TypeScript"
      ],
      icon: Briefcase,
      color: "from-blue-500 to-purple-500"
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <Briefcase className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Professional Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Professional experience in Machine Learning, Mobile App Development, and Enterprise Solutions
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white dark:border-slate-900 shadow-lg hidden md:block z-10"></div>
                  
                  {/* Experience Card */}
                  <div className="md:ml-20 ml-0">
                    <div className="glass-card p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                <Building className="h-4 w-4" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                        
                        <div className="lg:text-right">
                          <Badge className={`bg-gradient-to-r ${exp.color} text-white border-0 px-4 py-2 text-sm font-medium shadow-lg`}>
                            {exp.type}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="px-3 py-1 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-600 dark:hover:to-slate-500 transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
