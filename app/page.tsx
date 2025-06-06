"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Rocket,
  Terminal,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRef } from "react"

const skills = [
  "C",
  "Python",
  "JavaScript",
  "Express.js",
  "Next.js",
  "TypeScript",
  "Docker",
  "MySQL",
  "Git",
  "GitHub",
  "Bash",
  "Unit Testing",
]

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "Catalan", level: "Native" },
  { name: "English", level: "Fluent (B2)" },
]

const projects = [
  {
    name: "mysh",
    description:
      "A command-line interpreter (shell) based on TCSH, showcasing system programming skills and deep understanding of Unix-like operating systems.",
    tech: ["C", "Unix", "System Programming"],
    icon: Terminal,
    url: "https://github.com/edu24epitech/mysh",
  },
  {
    name: "API-to-do",
    description:
      "Full-stack REST API for task management with complete backend implementation using modern web technologies.",
    tech: ["Node.js", "Express.js", "MySQL", "REST API"],
    icon: Code,
    url: "https://github.com/edu24epitech/API-to-do",
  },
  {
    name: "autoflow",
    description:
      "DevOps project focused on continuous integration workflows, demonstrating modern deployment practices.",
    tech: ["GitHub Actions", "CI/CD", "DevOps", "Docker"],
    icon: Zap,
    url: "https://github.com/edu24epitech/autoflow",
  },
]

const experience = [
  {
    company: "ABC Staff - Festivals",
    location: "Barcelona, Spain",
    period: "2020 - Present",
    roles: ["Bar Festival Manager", "Waiter"],
    description: "Managing festival operations and providing excellent customer service in high-pressure environments.",
  },
  {
    company: "Samsportsevents",
    location: "Estadi Camp Nou, Barcelona",
    period: "June 2022 - October 2022",
    roles: ["Customer Service"],
    description: "Barça Virtual Dream Event - Handled customer relations and event coordination.",
  },
]

const certifications = [
  "Cambridge First Certificate (B2) - 2021",
  "Driving License B - Car",
  "Python Programming Course - 2024",
  "Microsoft Office Course - 2023",
]

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orbs"></div>
        <div className="neural-network"></div>
        <div className="holographic-grid"></div>
        <div
          className="cursor-glow"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-sage-600/10 via-copper-600/10 to-teal-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="hero-container mb-8">
              <div className="hologram-effect">
                <h1 className="cyber-glitch text-6xl md:text-8xl font-bold text-white mb-4" data-text="EDUARDO WINDOW">
                  EDUARDO WINDOW
                </h1>
              </div>
              <div className="quantum-typewriter">
                <span className="quantum-text text-2xl md:text-3xl text-copper-300">SOFTWARE ENGINEER</span>
              </div>
            </div>

            <div className="data-stream-container mb-8">
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Second-year Software Engineering student at Epitech Barcelona. Passionate about building innovative
                solutions with solid knowledge in C and modern web technologies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Button asChild size="lg" className="quantum-button bg-copper-600 hover:bg-copper-700 border-2 border-copper-400">
                {/* <Mail className="mr-2 h-4 w-4" />
                Contact Me */}
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button size="lg" className="hologram-button border-2 border-teal-400 text-teal-300 hover:bg-teal-600/20"
                onClick={() => {
                  projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
                }}
                >
                {/* <Github className="mr-2 h-4 w-4" /> */}
                {/* <a href="#projects"> */}
                  <Github className="mr-2 h-4 w-4" />
                  View Projects
                {/* </a> */}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Advanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="quantum-scroll-indicator"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-20 relative z-10">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <User className="h-8 w-8 text-copper-400 quantum-pulse" />
            <h2 className="text-4xl font-bold text-white neural-title">About Me</h2>
          </div>
          <Card className="quantum-card bg-slate-800/50 border-sage-600/50 holographic-border">
            <CardContent className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a dedicated Software Engineering student at Epitech Barcelona, currently pursuing both Bachelor and
                Master degrees. With a strong foundation in programming languages like C and Python, I'm passionate
                about creating efficient, scalable solutions and continuously expanding my technical expertise.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="contact-matrix">
                  <h3 className="text-xl font-semibold text-white mb-4 hologram-text">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300 data-line">
                      <Phone className="h-4 w-4 text-copper-400" />
                      <span>+34 603 69 30 52</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 data-line">
                      <Mail className="h-4 w-4 text-copper-400" />
                      <span>eduardo.window@epitech.eu</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 data-line">
                      <MapPin className="h-4 w-4 text-copper-400" />
                      <span>Barcelona, Spain</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 hologram-text">Languages</h3>
                  <div className="space-y-2">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center neural-item">
                        <span className="text-gray-300">{lang.name}</span>
                        <Badge className="quantum-badge bg-copper-600/30 text-copper-200 border-copper-500/50">
                          {lang.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-copper-400 quantum-pulse" />
            <h2 className="text-4xl font-bold text-white neural-title">Technical Skills </h2>
          </div>
          <Card className="quantum-card bg-slate-800/50 border-sage-600/50 holographic-border">
            <CardContent className="p-8">
              <div className="neural-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-node"
                  >
                    <Badge className="quantum-skill bg-gradient-to-r from-sage-600/30 via-copper-600/30 to-teal-600/30 text-white border-copper-400/50 px-4 py-2 text-sm">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <Separator className="my-8 bg-teal-600/30 quantum-separator" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 hologram-text">Certifications</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300 cert-node">
                      <div className="w-2 h-2 bg-copper-400 rounded-full quantum-dot" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          ref={projectsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="h-8 w-8 text-copper-400 quantum-pulse" />
            <h2 className="text-4xl font-bold text-white neural-title">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="project-hologram"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Card className="quantum-project quantum-card bg-slate-800/50 border-sage-600/50 h-full">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <project.icon className="h-6 w-6 text-copper-400 neural-icon" />
                        <span className="holographic-title">{project.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} className="tech-node border-teal-400/50 text-teal-200 bg-teal-600/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Working Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-copper-400 quantum-pulse" />
            <h2 className="text-4xl font-bold text-white neural-title">Working Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="quantum-card bg-slate-800/50 border-sage-600/50 holographic-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white neural-company">{exp.company}</h3>
                      <p className="text-copper-300 role-matrix">{exp.roles.join(" • ")}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-400 time-data">{exp.period}</p>
                      <p className="text-gray-500 text-sm location-data">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 description-stream">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-copper-400 quantum-pulse" />
            <h2 className="text-4xl font-bold text-white neural-title">Education</h2>
          </div>
          <div className="space-y-6">
            <Card className="quantum-card bg-slate-800/50 border-sage-600/50 holographic-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white neural-degree">
                      Bachelor and Master in Software Engineering
                    </h3>
                    <p className="text-copper-300 institution-data">Epitech - European Institute of Technology</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0 time-data">2024 - Current</p>
                </div>
              </CardContent>
            </Card>
            <Card className="quantum-card bg-slate-800/50 border-sage-600/50 holographic-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white neural-degree">High School Diploma</h3>
                    <p className="text-copper-300 institution-data">Colegio Sagrado Corazón Corazonistas</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0 time-data">Completed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="quantum-cta bg-gradient-to-r from-sage-600/20 via-copper-600/20 to-teal-600/20 border-copper-400/50">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-white mb-4 holographic-cta">Ready for Connection</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                I'm actively seeking internship opportunities to apply my skills and gain valuable experience. Let's
                connect and discuss how I can contribute to your team's success!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="quantum-button bg-copper-600 hover:bg-copper-700 border-2 border-copper-400"
                >
                  <a href="mailto:eduardo.window@epitech.eu">
                    <Mail className="mr-2 h-4 w-4" />
                    eduardo.window@epitech.eu
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="hologram-button border-2 border-teal-400 text-teal-300 hover:bg-teal-600/20"
                >
                  <a href="https://linkedin.com/in/eduardo-window" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="flex justify-center items-center cursor-pointer hover:text-primary transition" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="flex justify-center item-center hologram-button border-2 border-sage-400 text-sage-300 hover:bg-sage-600/20"
                >
                  <a href="https://github.com/edu24epitech" target="_blank" rel="noopener noreferrer">
                    <Github className="flex justify-center items-center cursor-pointer hover:text-primary transition" />
                    GitHub
                  </a>

                  {/* <Github className="mr-2 h-4 w-4" /> */}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
