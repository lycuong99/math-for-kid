"use client";

import { SuggestionTabsComponent } from "@/app/home/SuggestionSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Home, MapPin } from "lucide-react";
import { TeamSection } from "./TeamSection";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Ký gửi nhà cho OneHousing</h1>
            <p className="text-3xl font-bold tracking-tight mt-2">Nhận tiền mặt trong 48H</p>
          </div>
          <Card className="p-6">
            <Tabs defaultValue="chung-cu">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="chung-cu">
                  <Building2 className="h-4 w-4 mr-2" />
                  Chung cư
                </TabsTrigger>
                <TabsTrigger value="biet-thu">
                  <Home className="h-4 w-4 mr-2" />
                  Biệt thự
                </TabsTrigger>
                <TabsTrigger value="nha-dat">
                  <MapPin className="h-4 w-4 mr-2" />
                  Nhà đất
                </TabsTrigger>
              </TabsList>
              <TabsContent value="chung-cu" className="space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Thành phố Hà Nội" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hanoi">Thành phố Hà Nội</SelectItem>
                    <SelectItem value="hcm">Thành phố Hồ Chí Minh</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Dự án" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="project1">Dự án 1</SelectItem>
                    <SelectItem value="project2">Dự án 2</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tòa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tower1">Tòa A</SelectItem>
                    <SelectItem value="tower2">Tòa B</SelectItem>
                  </SelectContent>
                </Select>
                <div className="grid grid-cols-2 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tầng" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="floor1">Tầng 1</SelectItem>
                      <SelectItem value="floor2">Tầng 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Mã căn" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unit1">Căn 01</SelectItem>
                      <SelectItem value="unit2">Căn 02</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full" size="lg">
                  Nhận giá bán đề xuất
                </Button>
              </TabsContent>
            </Tabs>
            <div className="mt-6 grid grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Chào giá trong</p>
                <p className="text-xl font-bold">10 phút</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Chốt thỏa thuận trong</p>
                <p className="text-xl font-bold">48 giờ</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-blue-600 rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">CÓ KHÁCH MUA NGAY</h2>
                <p className="text-6xl font-bold">TRONG</p>
                <p className="text-8xl font-bold">48h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-8">
        <SuggestionTabsComponent />
      </section>

      <section className="container mx-auto px-4 py-8">
        <TeamSection />
      </section>
    </main>
  );
}
