import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Code } from "lucide-react";
import { useExperiences } from "@/hooks/use-experiences";

const Experience = () => {
  const experiences = useExperiences();

  if (!experiences) {
    return (
      <section id="experience" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (experiences.length === 0) {
    return (
      <section id="experience" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p>No experiences found.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey from individual contributor to technical leader, always staying hands-on
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block shadow-lg"></div>

                  <Card className="md:ml-20 p-8 bg-background border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                          <Badge 
                            variant={exp.type === 'Lead' ? 'default' : 'secondary'}
                            className="flex items-center gap-1"
                          >
                            {exp.type === 'Lead' ? <Users className="w-3 h-3" /> : <Code className="w-3 h-3" />}
                            {exp.type}
                          </Badge>
                        </div>
                        <h4 className="text-xl font-semibold text-primary mb-3">{exp.company}</h4>
                        <p className="text-foreground/80 leading-relaxed mb-4">{exp.description}</p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Key Achievements</h5>
                      <ul className="grid gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-foreground/80 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Technologies & Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 text-center bg-gradient-to-br from-navy-50 to-navy-100 dark:from-navy-950 dark:to-navy-900 border-none">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-foreground/80">Years Engineering Experience</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-navy-50 to-navy-100 dark:from-navy-950 dark:to-navy-900 border-none">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-foreground/80">Years Leadership Experience</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-navy-50 to-navy-100 dark:from-navy-950 dark:to-navy-900 border-none">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-foreground/80">Engineers Mentored</div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;