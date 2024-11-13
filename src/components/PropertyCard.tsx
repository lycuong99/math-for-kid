"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    badge?: string;
    details: string[];
    price: string;
    pricePerM2: string;
    images: string[];
    tag?: string;
  };
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function PropertyCard({ property, isFavorite, onToggleFavorite }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={property.images[0]}
          alt={property.title}
          width={400}
          height={300}
          className="w-full aspect-[4/3] object-cover"
        />
        {property.badge && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-sm rounded">
            {property.badge}
          </span>
        )}
        {property.tag && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 text-sm rounded">
            {property.tag}
          </span>
        )}
        <button
          onClick={() => onToggleFavorite(property.id)}
          className="absolute bottom-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
        </button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium line-clamp-2 mb-2">{property.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
        <div className="flex gap-2 mb-3">
          {property.details.map((detail, index) => (
            <span key={index} className="text-sm px-2 py-1 bg-muted rounded-full">
              {detail}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-lg font-bold text-blue-600">{property.price}</p>
            <p className="text-sm text-muted-foreground">{property.pricePerM2}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
