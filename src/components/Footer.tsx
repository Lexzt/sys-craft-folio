import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: SOCIAL_LINKS.github.url, label: SOCIAL_LINKS.github.label },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin.url, label: SOCIAL_LINKS.linkedin.label },
    { icon: Mail, href: SOCIAL_LINKS.email.url, label: SOCIAL_LINKS.email.label },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 dark:bg-navy-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 border-b border-white/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Alex Chen</h3>
              <p className="text-white/70 leading-relaxed">
                Software Engineer building reliable systems and empowering teams to deliver exceptional results.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Experience", href: "#experience" },
                  { name: "Projects", href: "#projects" },
                  { name: "Skills", href: "#skills" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex flex-col space-y-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon className="w-4 h-4" />
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Download */}
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full bg-transparent border-white/20 text-white hover:bg-white/10" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download CV
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full bg-transparent border-white/20 text-white hover:bg-white/10" asChild>
                  <a href="#contact">
                    Schedule Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>© {currentYear} Alex Chen.</span>
            <span>All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-white/60">
              <span>Built with</span>
              <span className="text-white">❤️</span>
              <span>using React & Tailwind</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;