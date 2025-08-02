"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  Users,
  AlertTriangle,
  FileText,
  ExternalLink,
  Mail,
  MessageCircle,
  Book,
  Scale,
  HelpCircle,
  Info,
} from "lucide-react"
import Link from "next/link"
import ReportSection from "@/components/report-form"


const scrollToReports = () => {
  const element = document.getElementById("report")
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
              451.WTF
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#mission" className="text-sm font-medium hover:text-primary transition-colors">
                Mission
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="#community" className="text-sm font-medium hover:text-primary transition-colors">
                Community
              </Link>
              <Link href="#report" className="text-sm font-medium hover:text-primary transition-colors">
                Report
              </Link>
            </nav>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToReports}
              className="border-primary text-primary hover:bg-primary hover:text-background bg-transparent cursor-pointer"
            >
              Contact Us
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
          <div className="container mx-auto relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/60 border border-primary/30 mb-8">
              <Shield className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm">Internet Safety • Community Driven • Digital Investigation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-text">
              Exposing Online
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Predators & Scammers
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              We investigate and gather comprehensive information about online predators, scammers, and cyberbullies.
              Our evidence packages are then provided to law enforcement for proper legal action.
            </p>

            <p className="text-lg text-primary/80 mb-12 font-medium">
              We find the information. Police handle the justice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToReports}
                className="bg-primary hover:bg-primary/90 text-background px-8 py-3 cursor-pointer"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Report a Threat
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
                We specialize in investigating online threats and compiling evidence for law enforcement. We do the
                detective work they don't have time for, so they can focus on making arrests.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-secondary/60 border-secondary/50 hover:border-primary/50 transition-colors shadow-lg">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Investigate Threats</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-primary">
                    We track down predators, scammers, and cyberbullies using advanced digital investigation techniques
                    and open-source intelligence gathering.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-secondary/60 border-secondary/50 hover:border-primary/50 transition-colors shadow-lg">
                <CardHeader>
                  <FileText className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Document Evidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-primary">
                    We compile detailed dossiers with verified information, digital evidence, and comprehensive
                    documentation that meets legal standards for prosecution.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-secondary/60 border-secondary/50 hover:border-primary/50 transition-colors shadow-lg">
                <CardHeader>
                  <ExternalLink className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Hand Over to Police</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-primary">
                    We provide complete evidence packages to appropriate law enforcement agencies. We aren't allowed to
                    take action ourselves - that's their job.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">How It Works</h2>
              <p className="text-xl text-text/80 max-w-3xl mx-auto">
                Our process is transparent, ethical, and designed to work within legal frameworks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-background">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text">Target Identified</h3>
                <p className="text-text/80">
                  We receive reports or identify individuals engaged in predatory, fraudulent, or cyberbullying
                  behavior.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-background">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text">Deep Investigation</h3>
                <p className="text-text/80">
                  We conduct thorough digital investigations to uncover real identities, locations, and patterns of
                  harmful behavior.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-background">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text">Evidence Package</h3>
                <p className="text-text/80">
                  We compile comprehensive dossiers with verified information, screenshots, and documentation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-background">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text">Police Handover</h3>
                <p className="text-text/80">
                  Complete evidence packages are delivered to law enforcement for arrests and prosecution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ReportSection />

        {/* Footer */}
        <footer className="border-t border-secondary/50 py-16 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-primary">451.WTF</h3>
                <p className="text-text/70 text-sm mb-6 leading-relaxed">
                  Making the internet safer through community-driven investigation and digital evidence gathering. We
                  work to expose online predators, scammers, and cyberbullies by providing law enforcement with the
                  evidence they need.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Discord
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h4 className="font-semibold mb-4 text-text flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2 text-primary" />
                  Quick Actions
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <button
                      onClick={scrollToReports}
                      className="text-text/70 hover:text-primary transition-colors cursor-pointer flex items-center"
                    >
                      <FileText className="w-3 h-3 mr-2" />
                      Submit Report
                    </button>
                  </li>
                  <li>
                    <Link
                      href="#mission"
                      className="text-text/70 hover:text-primary transition-colors flex items-center"
                    >
                      <Info className="w-3 h-3 mr-2" />
                      Learn About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#how-it-works"
                      className="text-text/70 hover:text-primary transition-colors flex items-center"
                    >
                      <HelpCircle className="w-3 h-3 mr-2" />
                      How We Work
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources & Guides */}
              <div>
                <h4 className="font-semibold mb-4 text-text flex items-center">
                  <Book className="w-4 h-4 mr-2 text-primary" />
                  Resources
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="#" className="text-text/70 hover:text-primary transition-colors flex items-center">
                      <Shield className="w-3 h-3 mr-2" />
                      Safety Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-text/70 hover:text-primary transition-colors flex items-center">
                      <FileText className="w-3 h-3 mr-2" />
                      Evidence Standards
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-text/70 hover:text-primary transition-colors flex items-center">
                      <Users className="w-3 h-3 mr-2" />
                      Community Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-text/70 hover:text-primary transition-colors flex items-center">
                      <Book className="w-3 h-3 mr-2" />
                      Investigation Methods
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal & Compliance */}
              <div>
                <h4 className="font-semibold mb-4 text-text flex items-center">
                  <Scale className="w-4 h-4 mr-2 text-primary" />
                  Legal
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="#" className="text-text/70 hover:text-primary transition-colors flex items-center">
                      <FileText className="w-3 h-3 mr-2" />
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-text/70 hover:text-primary transition-colors flex items-center">
                      <Scale className="w-3 h-3 mr-2" />
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-text/70 hover:text-primary transition-colors flex items-center">
                      <Shield className="w-3 h-3 mr-2" />
                      Code of Conduct
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-text/70 hover:text-primary transition-colors flex items-center">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Law Enforcement Portal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t mt-12 pt-8 border-border">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-text/60 mb-4 md:mb-0">
                  &copy; {new Date().getFullYear()} 451.WTF. Working to make the internet safer for everyone.
                </p>
                <div className="flex items-center space-x-6 text-xs text-text/50">
                  <span>Made with dedication to internet safety</span>
                  <span>•</span>
                  <span>Community-driven since 2025</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}
