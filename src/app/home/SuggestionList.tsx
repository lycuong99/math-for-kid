"use client";

import { PropertyCard } from "../../components/PropertyCard";

interface SuggestionListProps {
  properties: Array<{
    id: string;
    title: string;
    location: string;
    badge?: string;
    details: string[];
    price: string;
    pricePerM2: string;
    images: string[];
    tag?: string;
  }>;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export function SuggestionList({ properties, favorites, onToggleFavorite }: SuggestionListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          isFavorite={favorites.includes(property.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
