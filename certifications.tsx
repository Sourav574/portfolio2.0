import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2024",
    credential: "https://aws.amazon.com/certification/",
    description: "Professional level certification for AWS architecture",
  },
  {
    name: "Google Cloud Professional Developer",
    organization: "Google Cloud",
    date: "2023",
    credential: "https://cloud.google.com/certification",
    description: "Expert-level cloud development certification",
  },
  {
    name: "Meta Frontend Developer",
    organization: "Meta",
    date: "2023",
    credential: "https://www.meta.com/certificates/",
    description: "Advanced frontend development certification",
  },
];

export default function Certifications() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">Certifications</h1>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="group hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-8 w-8 text-primary" />
              <div className="flex-1">
                <CardTitle className="flex items-center justify-between">
                  <span>{cert.name}</span>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity" asChild>
                    <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardTitle>
                <p className="text-muted-foreground">{cert.organization}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                {cert.date}
              </div>
              <p className="text-sm">{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
