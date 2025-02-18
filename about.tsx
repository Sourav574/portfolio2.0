import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32">
            <img
              src="https://images.unsplash.com/photo-1702687210252-f843218d152d"
              alt="Decorative"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Christina</h1>
          <p className="text-lg text-muted-foreground mb-6">
            A passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences.
          </p>

          <div className="flex gap-4 mb-6">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <SiGithub className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="h-5 w-5 text-[#0A66C2]" />
                LinkedIn
              </a>
            </Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
                <div>
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-sm text-muted-foreground">5+ years</p>
                </div>
                <div>
                  <h3 className="font-medium">Specialization</h3>
                  <p className="text-sm text-muted-foreground">Full-stack Development</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}