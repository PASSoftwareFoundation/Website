"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  Users,
  Code,
  FileText,
  MessageCircle,
  Book,
  Scale,
  Info,
  Lock,
  Eye,
  Zap,
  Globe,
  Github,
} from "lucide-react"
import Link from "next/link"

const scrollToContribute = () => {
  const element = document.getElementById("contribute")
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Header */}
      <header className="border-b border-secondary/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Reprivatize
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#mission" className="text-sm font-medium hover:text-primary transition-colors">
              Mission
            </Link>
            <Link href="#principles" className="text-sm font-medium hover:text-primary transition-colors">
              Principles
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/60 border border-primary/30 mb-8">
            <Lock className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm">Privacy-First • Open Source • Community-Driven</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-text">
            Building a
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Safer Internet
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-text/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            We create privacy-first software and open-source alternatives that respect user autonomy. We build
            lightweight, transparent tools forged through team collaboration and shared necessity.
          </p>

          <p className="text-lg text-primary/80 mb-12 font-medium">Privacy isn't a feature – it's the foundation.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContribute}
              className="bg-primary hover:bg-primary/90 text-background px-8 py-3 cursor-pointer"
            >
              <Code className="w-5 h-5 mr-2" />
              Start Contributing
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary/10 bg-transparent px-8 py-3"
            >
              <Link href="https://github.com/Reprivatize" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto">
              We create censorship-resistant tools for a constrained digital world. Every project serves the fundamental
              right to privacy, security, and digital autonomy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-secondary/60 border-secondary/50 hover:border-primary/50 transition-colors shadow-lg">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-primary">Privacy by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-primary">
                  Zero telemetry, zero hidden pipelines. We build software that respects your privacy from the ground
                  up, not as an afterthought.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-secondary/60 border-secondary/50 hover:border-primary/50 transition-colors shadow-lg">
              <CardHeader>
                <Code className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-primary">Open Source Freedom</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-primary">
                  GPL-3.0 sovereignty means you can fork, modify, and redistribute without gatekeepers. True digital
                  freedom through transparent code.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-secondary/60 border-secondary/50 hover:border-primary/50 transition-colors shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-primary">Community Governed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-primary">
                  Priorities set by real needs, not corporate agendas. Our community shapes development through open
                  discourse and collaborative decision-making.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section id="principles" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">Core Principles</h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text">GPL-3.0 Sovereignty</h3>
              <p className="text-text/80">Fork, modify, and redistribute without gatekeepers. True software freedom.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text">Anti-Surveillance</h3>
              <p className="text-text/80">Zero telemetry, zero hidden pipelines. Your data stays yours.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text">Lightweight Design</h3>
              <p className="text-text/80">Optimized for purpose, not corporate checklists. Efficiency over bloat.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text">Community Governed</h3>
              <p className="text-text/80">Priorities set by real needs, not internal agendas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">Active Projects</h2>
            <p className="text-xl text-text/80 max-w-3xl mx-auto">
              Every creation serves distinct needs: builders, self-hosters, and individuals seeking digital autonomy.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"> <Card className="bg-secondary/60 border-secondary/50 hover:border-primary/50 transition-colors shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-primary text-2xl">Ra</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                    >
                      <Link href="https://github.com/Reprivatize/Ra" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-gray-400">Low-Level Programming Language with High-Level Syntax</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-primary mb-4">
                  An programming language focused on usability, developer experience and write less do more. We have planned this language for more than 4 Months to make it as polished as possible.
                </p>
                <div className="flex items-center gap-4 text-sm text-primary/70">
                  <span className="flex items-center gap-1 text-gray-400">
                    <Scale className="w-3 h-3" />
                    GPL v3.0
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Code className="w-3 h-3" />
                    Programming Language
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/60 border-secondary/50 hover:border-primary/50 transition-colors shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-primary text-2xl">Cloak</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                    >
                      <Link href="https://github.com/Reprivatize/Cloak" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-gray-400">Privacy-focused Operating System</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-primary mb-4">
                  A complete operating system built from the ground up with privacy and security as core principles. No
                  telemetry, no backdoors, just pure digital sovereignty.
                </p>
                <div className="flex items-center gap-4 text-sm text-primary/70">
                  <span className="flex items-center gap-1 text-gray-400">
                    <Scale className="w-3 h-3" />
                    GPL v3.0
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Code className="w-3 h-3" />
                    Operating System
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/60 border-secondary/50 hover:border-primary/50 transition-colors shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-primary text-2xl">Silhouette</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                    >
                      <Link href="https://github.com/Reprivatize/Silhouette" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-gray-400">Privacy-focused Kernel</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-primary mb-4">
                  The secure kernel powering Cloak OS. Built with privacy and security at its core, providing the
                  foundation for a truly private computing experience.
                </p>
                <div className="flex items-center gap-4 text-sm text-primary/70">
                  <span className="flex items-center gap-1 text-gray-400">
                    <Scale className="w-3 h-3" />
                    GPL v3.0
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Code className="w-3 h-3" />
                    Kernel
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-secondary/50 py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-primary">Reprivatize</h3>
              <p className="text-text/70 text-sm mb-6 leading-relaxed">
                Building privacy-first software and open-source alternatives that respect user autonomy. We create
                lightweight, transparent tools forged through team collaboration for a safer internet.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Link href="https://discord.gg/u6DjWuuDcw" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Discord
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Link href="https://github.com/Reprivatize" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="font-semibold mb-4 text-text flex items-center">
                <Code className="w-4 h-4 mr-2 text-primary" />
                Get Started
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#mission" className="text-text/70 hover:text-primary transition-colors flex items-center">
                    <Info className="w-3 h-3 mr-2" />
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-text/70 hover:text-primary transition-colors flex items-center"
                  >
                    <FileText className="w-3 h-3 mr-2" />
                    View Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-text flex items-center">
                <Book className="w-4 h-4 mr-2 text-primary" />
                Resources
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#principles"
                    className="text-text/70 hover:text-primary transition-colors flex items-center"
                  >
                    <Shield className="w-3 h-3 mr-2" />
                    Core Principles
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Reprivatize"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text/70 hover:text-primary transition-colors flex items-center"
                  >
                    <Github className="w-3 h-3 mr-2" />
                    Source Code
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/Knm3aHMmkW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text/70 hover:text-primary transition-colors flex items-center"
                  >
                    <MessageCircle className="w-3 h-3 mr-2" />
                    Community Chat
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Philosophy */}
            <div>
              <h4 className="font-semibold mb-4 text-text flex items-center">
                <Scale className="w-4 h-4 mr-2 text-primary" />
                Philosophy
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-text/70 flex items-center">
                    <Lock className="w-3 h-3 mr-2" />
                    Privacy by Design
                  </span>
                </li>
                <li>
                  <span className="text-text/70 flex items-center">
                    <Scale className="w-3 h-3 mr-2" />
                    GPL-3.0 Licensed
                  </span>
                </li>
                <li>
                  <span className="text-text/70 flex items-center">
                    <Eye className="w-3 h-3 mr-2" />
                    Anti-Surveillance
                  </span>
                </li>
                <li>
                  <span className="text-text/70 flex items-center">
                    <Globe className="w-3 h-3 mr-2" />
                    Community Governed
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t mt-12 pt-8 border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-text/60 mb-4 md:mb-0">
                Reprivatize &copy; {new Date().getFullYear()} - Team-driven development of censorship-resistant software for
                a constrained digital world.
              </p>
              <div className="flex items-center space-x-6 text-xs text-text/50">
                <span>Privacy isn't a feature – it's the foundation</span>
                <span>•</span>
                <span>Mostly GPL-3.0 Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
