# Landing Page Laibell - Versión Next.js

Este proyecto es una landing page para la marca Laibell, reconstruida con **Next.js 14 (App Router)** y **Tailwind CSS**. Está optimizada para SEO, performance, y conversión, manteniendo la gestión de contenido a través de archivos JSON.

## ✨ Stack Tecnológico

- **Next.js 14 (App Router)**: Framework de React para producción.
- **React y TypeScript**: Para construir la interfaz de usuario.
- **Tailwind CSS con Shadcn/ui**: Para estilos y componentes UI.
- **Lucide React**: Para los íconos.
- **JSON**: Para gestionar el contenido dinámico de la página.
- **Vercel**: Para el despliegue.

---

## 🚀 Cómo Empezar

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

## 📝 Cómo Editar el Contenido

Toda la información de las secciones dinámicas (Servicios, Planes, Testimonios y FAQ) se gestiona a través de archivos JSON en la carpeta `src/data`.

### 1. Editar Servicios

-   **Archivo:** `src/data/services.json`
-   **Instrucciones:** Modifica el `title` y los `bullets`. El campo `icon` corresponde a un nombre de ícono del paquete `lucide-react`. Puedes buscar más íconos en [lucide.dev](https://lucide.dev/).

### 2. Editar Planes

-   **Archivo:** `src/data/plans.json`
-   **Instrucciones:** Edita los textos, precios y características. Para destacar un plan, cambia `featured` a `true` (solo uno debería tenerlo).

### 3. Editar Testimonios

-   **Archivo:** `src/data/testimonials.json`
-   **Instrucciones:** Reemplaza los textos y la URL de la imagen del avatar.

### 4. Editar Preguntas Frecuentes (FAQ)

-   **Archivo:** `src/data/faqs.json`
-   **Instrucciones:** Modifica las preguntas y respuestas.

### 5. Editar Textos Estáticos

Los textos principales (Hero, títulos de sección, footer) se encuentran directamente en los componentes de React en `src/components/sections/*.tsx`. Búscalos y edítalos allí.

---

## 🚀 Cómo Desplegar en Vercel

Desplegar este proyecto en Vercel es el método recomendado.

1.  **Crea una cuenta en Vercel** y conecta tu repositorio de Git (GitHub, GitLab, etc.).
2.  **Importa el Proyecto:** En tu dashboard de Vercel, haz clic en "Add New..." -> "Project".
3.  **Selecciona tu Repositorio:** Elige el repositorio de Git que contiene este proyecto.
4.  **Configura el Proyecto:** Vercel detectará automáticamente que es un proyecto de Next.js. Los ajustes por defecto son correctos.
5.  **Haz clic en "Deploy"**. Vercel se encargará de instalar las dependencias, construir el proyecto y desplegarlo.

---

## 📧 Conectar Formulario de Contacto

El formulario de contacto utiliza **Server Actions** de Next.js. Actualmente, solo imprime los datos en la consola del servidor. Para enviar un correo real:

1.  **Elige un servicio de envío de correos:** Como [Resend](https://resend.com/) (recomendado para Vercel) o [Nodemailer](https://nodemailer.com/).

2.  **Actualiza la Server Action:**
    -   Abre el archivo `src/app/actions.ts`.
    -   Busca la función `submitContactForm`.
    -   Dentro de esta función, encontrarás un `console.log` con los datos del formulario.
    -   Reemplaza el `console.log` con la lógica para enviar el correo usando el servicio que elegiste.

    **Ejemplo con Resend (requiere `npm install resend`):**
    ```typescript
    // src/app/actions.ts

    import { Resend } from 'resend';

    const resend = new Resend(process.env.RESEND_API_KEY); // Guarda tu API key en variables de entorno

    export async function submitContactForm(prevState: any, formData: FormData) {
        // ... (extracción de datos)

        console.log("Datos del formulario a enviar:", data);

        try {
            await resend.emails.send({
                from: 'Laibell <onboarding@resend.dev>', // Tu dominio verificado en Resend
                to: ['info@laibell.com'],
                subject: 'Nuevo Mensaje de Contacto desde la Web',
                // Puedes usar React para crear plantillas de correo
                html: `<p>Nombre: ${data.name}</p><p>Email: ${data.email}</p><p>Mensaje: ${data.message}</p>`
            });

            return {
                success: true,
                message: "¡Mensaje enviado con éxito!",
            };
        } catch (error) {
            console.error("Error al enviar el correo:", error);
            return {
                success: false,
                message: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
            };
        }
    }
    ```

3.  **Vuelve a Desplegar:** Sube los cambios a tu repositorio de Git y Vercel actualizará el sitio automáticamente con la nueva funcionalidad.
