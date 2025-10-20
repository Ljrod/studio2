import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import servicesData from "@/data/services.json";
import { type Service } from "@/lib/types";
import * as Icons from "lucide-react";

const LucideIcon = ({ name, className }: { name: string; className?: string }) => {
  const Icon = Icons[name as keyof typeof Icons];
  if (!Icon || typeof Icon !== 'object') {
    // Si el ícono no se encuentra o no es un componente válido, no renderizar nada.
    // Esto evita errores si el JSON contiene un nombre de ícono incorrecto.
    console.warn(`Icono no encontrado: ${name}`);
    return null;
  }
  return <Icon className={className} />;
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="bg-background border border-white/10 rounded-lg p-2 transform transition-all duration-300 hover:scale-105 hover:border-primary">
      <CardHeader>
        <div className="text-primary mb-4">
          <LucideIcon name={service.icon} className="w-8 h-8" />
        </div>
        <CardTitle className="font-headline text-2xl font-bold">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-foreground/80 mb-6">
          {service.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2">
              <Icons.Check className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <Link href={service.cta_link} className="font-bold text-primary hover:underline">
          Saber más &rarr;
        </Link>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">Nuestros Servicios</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">Soluciones integrales para llevar tu negocio al siguiente nivel.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(servicesData.services as Service[]).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
