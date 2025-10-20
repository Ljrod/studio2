import Link from "next/link";
import Image from "next/image";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-foreground/60 hover:text-primary transition-colors duration-300">
      {children}
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold font-headline text-foreground justify-center md:justify-start">
              <Image src="/isologo.svg" alt="Isologo de Laibell" width={32} height={32} />
              <span>Laibell</span>
            </Link>
            <p className="mt-4 text-foreground/60">Impulsando el crecimiento de tu negocio en el mundo digital.</p>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg text-foreground">Navegación</h4>
            <ul className="mt-4 space-y-2">
              <FooterLink href="#services">Servicios</FooterLink>
              <FooterLink href="#plans">Planes</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#contact">Contacto</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg text-foreground">Contacto</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="mailto:info@laibell.com" className="text-foreground/60 hover:text-primary transition-colors duration-300">info@laibell.com</a></li>
              <li><a href="tel:+56912345678" className="text-foreground/60 hover:text-primary transition-colors duration-300">+56 9 1234 5678</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Laibell. Todos los derechos reservados.</p>
          <div className="mt-4 space-x-4">
            <Link href="#" className="hover:text-primary transition">Política de Privacidad</Link>
            <span>&bull;</span>
            <Link href="#" className="hover:text-primary transition">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
