"use client";

import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import { TeamSlider } from "./TeamSlider";

interface TeamMember {
  name: string;
  image: string;
}

export function TeamSection() {
  const agents: TeamMember[] = [
    {
      name: "Phạm Thu Hương",
      image: "/member-1.webp",
    },
    {
      name: "Phạm Thị Hạnh",
      image: "/member-1.webp",
    },
    {
      name: "Nguyễn Văn A",
      image: "/member-1.webp",
    },
    {
      name: "Trần Thị B",
      image: "/member-1.webp",
    },
    {
      name: "Lê Văn C",
      image: "/member-1.webp",
    },
    {
      name: "Hoàng Thị D",
      image: "/member-1.webp",
    },
  ];

  return (
    <section className="container px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-600" />
              <span className="font-bold">OneHousing</span>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <span className="font-bold">proAgent</span>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4">
              Đội ngũ Pro Agent
              <br />
              chuyên nghiệp
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-6">
              OneHousing tự hào và vinh danh những gương mặt cá nhân, tập thể Pro Agent xuất sắc trong thời gian vừa
              qua.
            </p>
            <Button size="lg" className="px-8">
              Gặp gỡ chuyên gia
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <TeamSlider members={agents} />
        </div>
      </div>
    </section>
  );
}
