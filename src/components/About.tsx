import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Story */}
            <div className="space-y-6">
              <Card className="p-8 bg-background border-none shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    With over 4 years of engineering experience, I've evolved from a curious developer 
                    into a hands-on technical leader who thrives at the intersection of 
                    individual contribution and team enablement.
                  </p>
                  <p>
                    My journey began building scalable web applications, where I discovered my passion 
                    for system architecture and performance optimization. This led me to focus on 
                    backend systems, distributed architectures, and developer productivity tools.
                  </p>
                  <p>
                    In my recent leadership role, I've learned that the best technical leaders are 
                    those who remain deeply technical while empowering others to excel. I believe in 
                    leading by example, whether it's diving into complex debugging sessions or 
                    mentoring junior developers through architectural decisions.
                  </p>
                </div>
              </Card>
            </div>

            {/* Philosophy & Approach */}
            <div className="space-y-8">
              <Card className="p-8 bg-background border-none shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Philosophy</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Systems Thinking</h4>
                      <p className="text-foreground/80">Every optimization is an opportunity to understand the bigger picture and improve overall system reliability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Continuous Learning</h4>
                      <p className="text-foreground/80">Technology evolves rapidly, and staying curious about new tools and patterns keeps solutions fresh and effective.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Team Enablement</h4>
                      <p className="text-foreground/80">The best code is code that others can understand, maintain, and build upon. Great leaders multiply their impact through others.</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-background border-none shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">What Drives Me</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Performance Optimization",
                    "System Reliability",
                    "Developer Experience",
                    "Mentoring",
                    "Technical Architecture",
                    "Incident Response",
                    "Process Improvement"
                  ].map((interest) => (
                    <Badge key={interest} variant="secondary" className="px-3 py-1">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;