"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { submitContactForm } from "@/app/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="cta" size="xl" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Enviando..." : "Enviar Mensaje"}
    </Button>
  );
}

export default function ContactForm({ serviceOptions }: { serviceOptions: string[] }) {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(submitContactForm, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Éxito" : "Error",
        description: state.message,
        variant: state.success ? "success" : "destructive",
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Nombre Completo</Label>
          <Input type="text" id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input type="email" id="email" name="email" required />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Teléfono (Opcional)</Label>
          <Input type="tel" id="phone" name="phone" />
        </div>
        <div>
          <Label htmlFor="company">Empresa (Opcional)</Label>
          <Input type="text" id="company" name="company" />
        </div>
      </div>
      <div>
        <Label htmlFor="service">Servicio de Interés</Label>
        <Select name="service" required>
          <SelectTrigger id="service">
            <SelectValue placeholder="Selecciona un servicio" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Mensaje</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>
      <div className="text-center">
        <SubmitButton />
      </div>
    </form>
  );
}
