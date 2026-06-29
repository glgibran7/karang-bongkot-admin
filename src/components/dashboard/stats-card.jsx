import { Card, CardContent } from "@/components/ui/card";

export default function StatsCard({ title, value, icon, description }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>

            <h2 className="text-3xl font-bold mt-2">{value}</h2>

            {description && (
              <p className="text-xs text-muted-foreground mt-2">
                {description}
              </p>
            )}
          </div>

          <div className="rounded-xl bg-primary/10 p-3 text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
