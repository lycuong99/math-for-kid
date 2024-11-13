import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { href: "#", label: "Mua" },
  { href: "#", label: "Ký gửi nhà" },
  { href: "#", label: "Ưu đãi" },
  { href: "#", label: "Phân tích & So sánh" },
  { href: "#", label: "Dự án" },
  { href: "#", label: "Định giá" },
  { href: "#", label: "Của Số BĐS" },
];

export default function Nav({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav {...props} className={cn("hidden md:flex items-center gap-6", props.className)}>
      {navLinks.map((link) => (
        <Link key={link.label} className="text-sm font-medium" href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
