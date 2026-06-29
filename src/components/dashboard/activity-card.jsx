import { Calendar, FileText, TriangleAlert, UserPlus } from "lucide-react";

const icons = {
  user: UserPlus,
  document: FileText,
  warning: TriangleAlert,
  calendar: Calendar,
};

export default function ActivityCard({ activity }) {
  const Icon = icons[activity.type];

  return (
    <div className="flex gap-4 rounded-xl border p-4 hover:bg-muted/40 transition">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>

      <div className="flex-1">
        <p className="font-medium">{activity.title}</p>

        <p className="text-sm text-muted-foreground">{activity.description}</p>

        <p className="mt-2 text-xs text-muted-foreground">{activity.time}</p>
      </div>
    </div>
  );
}
