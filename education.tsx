import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Calendar } from "lucide-react";

const education = [
  {
    school: "Stanford University",
    degree: "Master of Science in Computer Science",
    year: "2018-2020",
    description: "Specialized in Machine Learning and Artificial Intelligence",
  },
  {
    school: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Science",
    year: "2014-2018",
    description: "Minor in Mathematics",
  },
];

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
              <School className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>{edu.school}</CardTitle>
                <p className="text-muted-foreground">{edu.degree}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                {edu.year}
              </div>
              <p>{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
