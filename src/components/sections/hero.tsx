import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          <span className="block">Laibell: Marketing y Sitios Web</span>
          <span className="text-primary">que hacen crecer tu empresa.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80">
          En Laibell transformamos tu presencia digital en un motor de ventas. Creamos experiencias web que no solo se ven bien, sino que convierten visitantes en clientes leales.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="cta" size="xl">
            <Link href="#contact">Cotizar Ahora</Link>
          </Button>
          <Button asChild variant="secondary" size="xl" className="border border-white/20 bg-white/10 hover:bg-white/20">
            <Link href="#plans">Ver Planes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
