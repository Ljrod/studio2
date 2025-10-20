import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import testimonialsData from "@/data/testimonials.json";
import { type Testimonial } from "@/lib/types";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="bg-background border border-white/10 rounded-lg p-8 h-full flex flex-col">
      <CardContent className="p-0 flex-grow">
        <p className="text-foreground/80">"{testimonial.quote}"</p>
      </CardContent>
      <div className="flex items-center mt-6">
        <Image 
          src={testimonial.avatar_url} 
          alt={`Avatar de ${testimonial.name}`} 
          width={48} 
          height={48} 
          className="w-12 h-12 rounded-full mr-4 object-cover" 
          loading="lazy"
        />
        <div>
          <p className="font-bold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-foreground/60">{testimonial.company}</p>
        </div>
      </div>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">Confían en Nosotros</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">Historias de éxito de empresas que transformaron su presencia digital con Laibell.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(testimonialsData.testimonials as Testimonial[]).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
