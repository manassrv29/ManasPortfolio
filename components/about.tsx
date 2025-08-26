import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate Computer Science Engineering student with expertise in AI/ML, Mobile App Development, Data Science and full-stack solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">B.Tech - Computer Science Engineering</p>
              <p className="text-muted-foreground">Graphic Era Deemed to be University</p>
              <p className="text-sm text-muted-foreground">CGPA: 8.88 | 2022-2026</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold"> 2X Amazon ML Summer School</p>
              <p className="text-muted-foreground">Selected from 90,000+ applicants</p>
              <p className="text-sm text-muted-foreground">2024 & 2025</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Focus Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">AI/ML & Full-Stack</p>
              <p className="text-muted-foreground">NLP, LLMs, Mobile Development</p>
              <p className="text-sm text-muted-foreground">450+ LeetCode Problems</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">My Journey</h3>
          <div className="prose prose-lg max-w-none text-card-foreground">
            <p className="mb-4">
              I'm a passionate Computer Science Engineering student at Graphic Era Deemed University with a strong focus
              on artificial intelligence, machine learning, and full-stack development. My journey in technology has
              been marked by continuous learning and practical application of cutting-edge technologies.
            </p>
            <p className="mb-4">
              Being selected for the prestigious Amazon ML Summer School program twice (2024 & 2025) from over 90,000
              applicants has been a defining moment in my career. This experience has deepened my expertise in Natural
              Language Processing, Large Language Models, and Generative AI.
            </p>
            <p>
              Through my internship at Indian Oil Corporation Limited and various projects, I've gained hands-on
              experience in developing enterprise-grade solutions, mobile applications, and AI-powered systems that
              solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
