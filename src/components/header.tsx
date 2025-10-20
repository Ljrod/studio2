"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Servicios" },
  { href: "#plans", label: "Planes" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b transition-colors duration-300",
        isScrolled ? "border-white/10" : "border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-foreground">
            <Image src="/isologo.svg" alt="Isologo de Laibell" width={32} height={32} />
            <span>Laibell</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-foreground/80 rounded-md transition-colors duration-300 hover:text-foreground hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild variant="cta" className="hidden sm:inline-flex">
              <Link href="#contact">Cotizar Ahora</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col items-center gap-4 p-4 border-t border-white/5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={handleLinkClick} className="block w-full text-center px-4 py-3 text-base font-medium text-foreground/80 rounded-md transition-colors duration-300 hover:text-foreground hover:bg-white/10">
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={handleLinkClick} className="block w-full text-center px-4 py-3 text-base font-medium text-foreground/80 rounded-md transition-colors duration-300 hover:text-foreground hover:bg-white/10">
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
