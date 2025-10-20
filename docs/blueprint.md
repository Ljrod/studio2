# **App Name**: Laibell Landing

## Core Features:

- Navbar con Menús Desplegables: Implementación de una barra de navegación accesible con menús desplegables para Servicios, Planes, Recursos y Contacto, utilizando <details> y <summary> para la accesibilidad.
- Hero Persuasivo: Creación de una sección Hero con propuesta de valor centrada en los beneficios de Laibell (Marketing y Sitios Web que impulsan el crecimiento empresarial) y CTAs claros para la conversión.
- Servicios Dinámicos: Renderización dinámica de tarjetas de servicios desde el archivo /data/services.json, mostrando icono, título, descripción y un CTA para cada servicio.
- Planes Comparativos: Visualización de planes comparativos desde /data/plans.json, con una tarjeta destacada para resaltar el plan recomendado.
- Testimonios Auténticos: Presentación de testimonios de clientes desde /data/testimonials.json, mostrando credibilidad y confianza en los servicios de Laibell.
- FAQ Interactivo: Implementación de una sección de preguntas frecuentes con acordeones accesibles (<details>) cargados desde /data/faqs.json, proporcionando respuestas claras y concisas.
- Formulario de Contacto Validado: Formulario de contacto con validación en el cliente (HTML5 + JS) para asegurar la correcta entrada de datos (nombre, email, etc.).  Incluye un bloque comentado con un ejemplo de llamada a fetch(POST) a una FUNCTION_URL placeholder para la integración futura con una Firebase Function.

## Style Guidelines:

- Esquema de color oscuro con fondo #0B0F19 para una apariencia moderna y profesional.
- Color de texto principal: #E6EAF2 para garantizar la legibilidad en el fondo oscuro.
- Color de acento principal: #00E5FF para resaltar elementos interactivos y detalles importantes.
- Color de llamada a la acción (CTA): #FF2D77 para botones y enlaces clave, atrayendo la atención del usuario.
- Color de éxito: #22C55E para indicar confirmaciones y acciones completadas.
- Titulares: 'Space Grotesk' (sans-serif) para un estilo moderno y tecnológico.  Nota: currently only Google Fonts are supported.
- Cuerpo de texto: 'Inter' (sans-serif) para una lectura cómoda y clara. Note: currently only Google Fonts are supported.
- Iconografía:  Íconos claros y minimalistas que complementen la tipografía y mejoren la usabilidad.
- Diseño responsivo y adaptable a diferentes tamaños de pantalla para garantizar una experiencia consistente en todos los dispositivos.
- Microinteracciones sutiles (hover/focus/transitions) en elementos interactivos para proporcionar feedback visual y mejorar la experiencia del usuario.