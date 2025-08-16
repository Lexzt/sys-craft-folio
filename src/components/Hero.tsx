import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-navy-50 via-background to-navy-100 dark:from-navy-950 dark:via-background dark:to-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-200 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Available for new opportunities
              </motion.div>
              
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-navy-600 to-navy-800 bg-clip-text text-transparent">
                  Alex Chen
                </span>
              </motion.h1>
              
              <motion.p
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Software Engineer
              </motion.p>
              
              <motion.p
                className="text-lg text-muted-foreground font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                with engineering lead experience
              </motion.p>
            </div>

            <motion.p
              className="text-xl text-foreground/80 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I design reliable systems, optimize performance, and help teams ship faster. 
              Passionate about building scalable architectures and fostering developer productivity.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button size="lg" className="group" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-sm text-muted-foreground font-medium">Connect with me:</span>
              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/alexchen", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/alexchen", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:alex@example.com", label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="sm"
                    className="hover:bg-navy-100 dark:hover:bg-navy-900"
                    asChild
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-900 dark:to-navy-800">
              <img
                src={heroImage}
                alt="Professional software engineer workspace"
                className="w-full h-auto object-cover"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-navy-600 rounded-full opacity-20"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-navy-400 rounded-full opacity-30"
              animate={{ 
                rotate: -360,
                scale: [1, 0.8, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;