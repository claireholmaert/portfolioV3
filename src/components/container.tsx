import { cn } from "@/lib/utils";

interface ContainerXlProps {
    children: React.ReactNode;
    className?: string
}

export const ContainerXl = ({ children, className }: ContainerXlProps) => {
  return <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>;
};
