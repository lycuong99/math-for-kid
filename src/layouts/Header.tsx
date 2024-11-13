"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Nav from "./Navbar";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto ">
        <div className="flex items-center gap-6">
          <Link className="flex items-center gap-2 font-bold" href="#">
            <Logo />
          </Link>
          <Nav />
        </div>
        <Button variant="outline">Đăng nhập</Button>
      </div>
    </header>
  );
}
