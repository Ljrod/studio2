import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import faqsData from "@/data/faqs.json";
import { type FaqItem } from "@/lib/types";

export default function Faq() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">Preguntas Frecuentes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">Respuestas a tus dudas más comunes. Si no encuentras lo que buscas, ¡contáctanos!</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {(faqsData.faqs as FaqItem[]).map((faq) => (
             <AccordionItem key={faq.id} value={`item-${faq.id}`} className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden transition-all duration-300">
               <AccordionTrigger className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-lg text-left hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring no-underline">
                 {faq.question}
               </AccordionTrigger>
               <AccordionContent className="px-6 pb-6 text-foreground/80">
                 {faq.answer}
               </AccordionContent>
             </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
