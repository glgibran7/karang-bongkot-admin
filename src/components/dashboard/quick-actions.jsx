import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function QuickAction({ title, href, color = "bg-primary" }) {
  return (
    <Link
      href={href}
      className="
        flex
        items-center
        justify-between
        rounded-xl
        border
        p-4
        hover:bg-muted/40
        transition
      "
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            h-10
            w-10
            rounded-lg
            ${color}
            text-white
            flex
            items-center
            justify-center
          `}
        >
          +
        </div>

        <span className="font-medium">{title}</span>
      </div>

      <ArrowUpRight size={18} />
    </Link>
  );
}
