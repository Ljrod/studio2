import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Laibell: Marketing Digital y Sitios Web que Convierten",
    template: "%s | Laibell",
  },
  description: "En Laibell, creamos estrategias de marketing digital, páginas web y gestionamos redes sociales para hacer crecer tu empresa. Potencia tu presencia online y convierte visitantes en clientes.",
  keywords: "marketing digital, diseño web, desarrollo web, gestión de redes sociales, SEO, conversión, Laibell",
  authors: [{ name: "Laibell" }],
  metadataBase: new URL("https://www.laibell.com"),
  openGraph: {
    title: "Laibell: Marketing Digital y Sitios Web que Convierten",
    description: "Creamos estrategias de marketing y sitios web que impulsan el crecimiento de tu empresa.",
    url: "https://www.laibell.com",
    siteName: "Laibell",
    images: [
      {
        url: "/og-image.jpg", // Debes crear esta imagen en /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laibell: Marketing Digital y Sitios Web que Convierten",
    description: "Creamos estrategias de marketing y sitios web que impulsan el crecimiento de tu empresa.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/isologo.svg",
    shortcut: "/isologo.svg",
    apple: "/isologo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Laibell",
            "url": "https://www.laibell.com/",
            "logo": "https://www.laibell.com/isologo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+56912345678",
              "contactType": "customer service",
              "email": "info@laibell.com"
            },
            "sameAs": []
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Laibell",
            "image": "https://www.laibell.com/og-image.jpg",
            "url": "https://www.laibell.com/",
            "telephone": "+56912345678",
            "email": "info@laibell.com",
            "description": "Agencia de marketing digital, diseño web y gestión de redes sociales enfocada en la conversión y el crecimiento empresarial.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CL"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          }) }}
        />
      </body>
    </html>
  );
}
