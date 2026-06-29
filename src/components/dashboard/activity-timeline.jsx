import { UserPlus, BellRing, FileText, Calendar } from "lucide-react";

const activities = [
  {
    icon: UserPlus,
    title: "Warga baru ditambahkan",
    subtitle: "5 menit lalu",
  },
  {
    icon: FileText,
    title: "Surat domisili disetujui",
    subtitle: "12 menit lalu",
  },
  {
    icon: BellRing,
    title: "Notifikasi dikirim",
    subtitle: "20 menit lalu",
  },
  {
    icon: Calendar,
    title: "Agenda baru dibuat",
    subtitle: "1 jam lalu",
  },
];

export default function ActivityTimeline() {
  return (
    <div className="space-y-5">
      {activities.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index} className="flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-2">
              <Icon className="h-4 w-4 text-primary" />
            </div>

            <div>
              <p className="font-medium">{item.title}</p>

              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
