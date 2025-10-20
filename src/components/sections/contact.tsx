import ContactForm from "@/components/contact-form";
import servicesData from "@/data/services.json";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">Hablemos de tu Proyecto</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">Completa el formulario y uno de nuestros especialistas se pondrá en contacto contigo para ofrecerte una solución a medida.</p>
        </div>
        <ContactForm serviceOptions={servicesData.services.map(s => s.title)} />
      </div>
    </section>
  );
}
