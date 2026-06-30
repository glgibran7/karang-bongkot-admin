import { Skeleton } from "@/components/ui/skeleton";

export default function DataTableLoading() {
  return (
    <div className="space-y-3 p-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton key={index} className="h-10 w-full" />
      ))}
    </div>
  );
}
