import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCardProps {
  title: string;
  level: number;
  icon: React.ReactNode;
}

export default function SkillCard({ title, level, icon }: SkillCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <Progress value={level} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">
          {level}% proficiency
        </p>
      </CardContent>
    </Card>
  );
}
