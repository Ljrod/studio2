import Link from "next/link";
import { Button } from "@/components/ui/button";
import { plans } from "@/data/plans.json";
import { type Plan } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

function PlanCard({ plan }: { plan: Plan }) {
  const isFeatured = plan.featured;
  return (
    <div className={cn(
        "bg-background border border-white/10 rounded-lg p-8 flex flex-col h-full relative",
        isFeatured && "border-2 border-primary scale-105 shadow-[0_0_30px_rgba(0,229,255,0.2)]"
      )}>
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bold text-sm px-4 py-1 rounded-full">
          Más Popular
        </div>
      )}
      <h3 className="font-headline text-2xl font-bold">{plan.name}</h3>
      <p className="text-foreground/60 mt-2">{plan.description}</p>
      <div className="my-8">
        <span className="text-5xl font-bold font-headline">{plan.price}</span>
        <span className="text-foreground/60"> {plan.period}</span>
      </div>
      <ul className="space-y-3 text-foreground/90 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button asChild variant={isFeatured ? "cta" : "secondary"} size="lg" className="w-full">
            <Link href="#contact">{plan.cta_text}</Link>
        </Button>
      </div>
    </div>
  );
}

export default function Plans() {
  return (
    <section id="plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">Planes a tu Medida</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">Elige el impulso perfecto para tu proyecto. Sin sorpresas, con resultados claros.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {(plans as Plan[]).map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
