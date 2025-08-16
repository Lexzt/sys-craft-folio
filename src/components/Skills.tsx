import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSkills, Skill } from "@/hooks/use-skills";

const Skills = () => {
  const skillCategories = useSkills() ?? [];

  const getSkillLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'Expert': return 'bg-navy-600 text-white';
      case 'Advanced': return 'bg-navy-400 text-white';
      case 'Intermediate': return 'bg-navy-200 text-navy-800';
      case 'Beginner': return 'bg-navy-100 text-navy-700';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="py-24">
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning individual contribution and leadership capabilities
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${
                      category.name === 'Leadership' 
                        ? 'bg-navy-600 text-white' 
                        : 'bg-navy-100 dark:bg-navy-900 text-navy-600 dark:text-navy-400'
                    }`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                      {category.name === 'Leadership' && (
                        <p className="text-sm text-muted-foreground">& Enablement</p>
                      )}
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center justify-between gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <Badge 
                          className={`text-xs px-2 py-1 ${getSkillLevelColor(skill.level)}`}
                          variant="secondary"
                        >
                          {skill.level}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skill Level Legend */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-3">Skill Levels</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Expert', 'Advanced', 'Intermediate', 'Beginner'].map((level) => (
                  <Badge 
                    key={level} 
                    className={`text-xs px-3 py-1 ${getSkillLevelColor(level as Skill['level'])}`}
                    variant="secondary"
                  >
                    {level}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Context */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-navy-50 to-navy-100 dark:from-navy-950 dark:to-navy-900 border-none max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Bridging Technical Depth with Leadership Impact
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                My approach combines hands-on engineering excellence with people-focused leadership. 
                I believe the best technical leaders are those who continue to write code, debug systems, 
                and architect solutions while empowering their teams to grow and deliver exceptional results.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;