import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";

type LogoProps = {
  size?: "sm" | "md" | "lg";
};

export default function Logo({ size = "md" }: LogoProps) {
  const iconClass = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };
  const sizeClass = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };
  return (
    <>
      <Building2 className={cn("h-6 w-6 text-blue-600", iconClass[size])} />
      <span className={cn(sizeClass[size])}>OneHousing</span>
    </>
  );
}
