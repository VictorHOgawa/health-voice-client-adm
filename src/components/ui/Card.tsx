import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "border-n-3 text-n-7 rounded-xl border bg-white shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg leading-none font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}
