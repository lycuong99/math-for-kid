"use client";

import Image from "next/image";

interface MemberCardProps {
  name: string;
  image: string;
}

export function MemberCard({ name, image }: MemberCardProps) {
  return (
    <div className="relative aspect-[3/4] bg-gray-950 rounded-lg overflow-hidden">
      <Image src={image} alt={name} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-4">{name}</h3>
        <div className="flex items-center justify-between">
          <Image src="/one-housing.png" alt="OneHousing" width={60} height={30} className="h-6 w-auto" />
          <Image src="/pro-agent.png" alt="proAgent" width={60} height={30} className="h-6 w-auto" />
        </div>
      </div>
    </div>
  );
}
