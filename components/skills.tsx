import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Brain, Cloud, Trophy } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Frontend & Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["React.js", "React Native", "Next.js", "Tailwind CSS", "TypeScript", "CSS3"],
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "Flask", "MongoDB", "SQLite", "Firebase", "RESTful APIs"],
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="h-6 w-6" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "Computer Vision", "Hugging Face"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Azure", "Vercel", "Git", "Docker", "Google Cloud", "AWS"],
    },
    {
      title: "Tools & Design",
      icon: <Trophy className="h-6 w-6" />,
      skills: ["Android Studio", "Xcode", "Figma", "Tableau", "Google AI Studio", "Postman"],
    },
  ]

  const achievements = [
    "450+ Problems solved on LeetCode",
    "2X Amazon ML Summer School Scholar",
    "1st Runner-Up at Hack-Wave 2025",
    "Finalist in Graphethon 2025 (800+ teams)",
    "Core member of Grafest 2023-24",
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across full-stack development, AI/ML, and modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            /* Added staggered animations and hover effects to skill category cards */
            <Card key={index} className={`h-full hover-lift animate-scale-in animation-delay-${(index + 1) * 200}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary animate-pulse-gentle">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    /* Added hover scale animation to skill badges */
                    <Badge key={idx} variant="secondary" className="text-xs hover-scale">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="animate-fade-in-up animation-delay-1000 hover-lift">
          <CardHeader>
            <CardTitle className="text-center">Coding & Leadership Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                /* Added staggered slide-in animations to achievement items */
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 bg-card rounded-lg hover-lift animate-slide-in-right animation-delay-${(index + 2) * 200}`}
                >
                  <Trophy className="h-5 w-5 text-primary flex-shrink-0 animate-bounce-gentle" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
