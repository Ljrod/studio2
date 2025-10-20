"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Por favor, ingresa tu nombre." }),
  email: z.string().email({ message: "Por favor, ingresa un correo válido." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, { message: "Por favor, selecciona un servicio." }),
  message: z.string().min(1, { message: "Por favor, escribe tu mensaje." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Por favor, corrige los errores en el formulario.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  // --- SIMULACIÓN DE ENVÍO ---
  // En un proyecto real, aquí integrarías un servicio de envío de correos como Resend, Nodemailer, etc.
  // Por ahora, solo mostramos los datos en la consola del servidor.
  console.log("Datos del formulario a enviar:", data);

  // Simulación de una llamada a una API
  await new Promise(resolve => setTimeout(resolve, 1000));

  // --- BLOQUE PARA INTEGRACIÓN FUTURA ---
  /*
  try {
    // const response = await fetch('TU_FUNCTION_URL_AQUI', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // if (!response.ok) throw new Error('Error en el servidor');
    
    // const result = await response.json();
    // if (!result.success) throw new Error(result.error || 'No se pudo enviar el mensaje.');

    return {
      success: true,
      message: "¡Mensaje enviado con éxito!",
    };
  } catch (error) {
    console.error("Error al enviar formulario:", error);
    return {
      success: false,
      message: "Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.",
    };
  }
  */

  return {
    success: true,
    message: "¡Mensaje enviado con éxito! (Simulación)",
  };
}
