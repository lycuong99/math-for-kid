"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Eye, Heart, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { SuggestionList } from "./SuggestionList";

const properties = [
  {
    id: "1",
    title: "Căn 2PN tòa L2 - LUMIÈRE SpringBay - C4L2.2205A",
    location: "H. Văn Giang, T.Hưng Yên",
    badge: "Mua từ CĐT",
    details: ["2", "68.6m²", "Đông Bắc"],
    price: "6.12 tỷ",
    pricePerM2: "89 triệu/m²",
    images: ["/suggest-1.webp"],
    tag: "TẦNG 22",
  },
  {
    id: "2",
    title: "Đất nền cách Đường liên xã Yên Mỹ - Duyên Hà - Vạn Phúc 100m, diện tích 237m²",
    location: "H. Thanh Trì, TP.Hà Nội",
    details: ["237m²", "Đông Bắc"],
    price: "13.5 tỷ",
    pricePerM2: "57 triệu/m²",
    images: ["/suggest-1.webp"],
  },
  {
    id: "3",
    title: "Đất nền cách Đường nối Từ Hiệp đến Ngũ Hiệp 30m, diện tích 54m²",
    location: "H. Thanh Trì, TP.Hà Nội",
    details: ["54m²", "Tây Bắc"],
    price: "4.4 tỷ",
    pricePerM2: "81 triệu/m²",
    images: ["/suggest-1.webp"],
  },
  {
    id: "4",
    title: "Nhà mặt ngõ cách Đường Triều Khúc 100m, diện tích 75m² x 8 tầng, mặt tiền 5m",
    location: "H. Thanh Trì, TP.Hà Nội",
    details: ["8 tầng", "75m²", "Đông Nam"],
    price: "21.5 tỷ",
    pricePerM2: "287 triệu/m²",
    images: ["/suggest-1.webp"],
  },
];

export function SuggestionTabsComponent() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Gợi ý cho bạn</h2>
      <Tabs defaultValue="most-suitable" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="most-suitable" className="flex items-center gap-2">
            <ThumbsUp className="h-4 w-4" />
            Phù hợp nhất
          </TabsTrigger>
          <TabsTrigger value="recently-viewed" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Xem gần đây
          </TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Cần yêu thích
          </TabsTrigger>
        </TabsList>
        <TabsContent value="most-suitable">
          <SuggestionList properties={properties} favorites={favorites} onToggleFavorite={toggleFavorite} />
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" className="px-8">
              Xem tất cả
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="recently-viewed">
          <div className="text-center py-8 text-muted-foreground">Không có bất động sản nào được xem gần đây</div>
        </TabsContent>
        <TabsContent value="favorites">
          <div className="text-center py-8 text-muted-foreground">
            Không có bất động sản nào trong danh sách yêu thích
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
