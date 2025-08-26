import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Brain, Cloud, Trophy, Zap, Target } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      title: "Frontend & Mobile",
      icon: Smartphone,
      skills: ["React.js", "React Native", "Next.js", "Tailwind CSS", "TypeScript", "CSS3"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["Node.js", "Flask", "MongoDB", "SQLite", "Firebase", "RESTful APIs"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "Computer Vision", "Hugging Face"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Azure", "Vercel", "Git", "Docker", "Google Cloud", "AWS"],
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20"
    },
    {
      title: "Tools & Design",
      icon: Trophy,
      skills: ["Android Studio", "Xcode", "Figma", "Tableau", "Google AI Studio", "Postman"],
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
  ]

  const achievements = [
    { text: "450+ Problems solved on LeetCode", icon: Code },
    { text: "2X Amazon ML Summer School Scholar", icon: Brain },
    { text: "1st Runner-Up at Hack-Wave 2025", icon: Trophy },
    { text: "Finalist in Graphethon 2025 (800+ teams)", icon: Target },
    { text: "Core member of Grafest 2023-24", icon: Zap },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <Zap className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Technical Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive expertise across full-stack development, AI/ML, and modern technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${category.bgGradient} border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105`}
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="px-3 py-1 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-600/50 hover:bg-white dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 mb-4">
              <Trophy className="h-5 w-5 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">Achievements & Recognition</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Coding & Leadership Milestones
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {achievement.text}
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Tech Stacks</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">450+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Problems Solved</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Major Projects</div>
          </div>
        </div>
      </div>
    </section>
  )
}
