import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SectionHeader({ title, href, action = "Lihat Semua" }) {
  return (
    <div className="flex items-center justify-between ">
      <h2 className="text-xl font-semibold">{title}</h2>

      {href && (
        <Link
          href={href}
          className="
            flex
            items-center
            gap-1
            text-sm
            text-primary
            hover:underline
          "
        >
          {action}

          <ChevronRight size={16} />
        </Link>
      )}
    </div>
  );
}
