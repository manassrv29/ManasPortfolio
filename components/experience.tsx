import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

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
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience in Machine Learning, Mobile App Development, and Enterprise Solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </div>
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
                  <Badge variant="secondary">{exp.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
