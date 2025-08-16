import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github, Play, Crown } from "lucide-react";
import projectImage from "@/assets/project-architecture.jpg";

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing technical depth and leadership impact through scalable solutions
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="aspect-[4/3] bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-900 dark:to-navy-800">
                        <img
                          src={projectImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent"></div>
                        
                        {/* Leadership Badge */}
                        {project.leadership && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-navy-600 text-white flex items-center gap-1">
                              <Crown className="w-3 h-3" />
                              Leadership Project
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                            {project.title}
                          </h3>
                          <p className="text-lg text-foreground/80 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Problem → Solution → Outcome */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Problem</h4>
                            <p className="text-foreground/80">{project.problem}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Approach</h4>
                            <p className="text-foreground/80">{project.approach}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Outcome</h4>
                            <p className="text-foreground/80 font-medium">{project.outcome}</p>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="outline" className="px-3 py-1">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-3 pt-4">
                          {project.links.github && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.links.live && (
                            <Button variant="default" size="sm" asChild>
                              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.links.demo && (
                            <Button variant="secondary" size="sm" asChild>
                              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <Play className="mr-2 h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground/80 mb-6">
              Want to see more projects or discuss technical details?
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;