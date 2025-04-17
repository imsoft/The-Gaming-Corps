"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Definir el esquema de validación con Zod
const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un email válido.",
  }),
  asunto: z.string().min(5, {
    message: "El asunto debe tener al menos 5 caracteres.",
  }),
  mensaje: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
  privacidad: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactoPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Inicializar el formulario con useForm y el resolver de zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
      privacidad: false,
    },
  });

  // Función para manejar el envío del formulario
  async function onSubmit(data: FormValues) {
    console.log(data);
    setIsSubmitting(true);

    try {
      // Aquí iría la lógica para enviar el formulario a un backend
      // Por ahora, simulamos una espera y mostramos un toast de éxito
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast("Mensaje enviado", {
        description:
          "Hemos recibido tu mensaje. Te responderemos lo antes posible.",
      });

      form.reset();
    } catch (error) {
      toast("Error", {
        description: `Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo. Mensaje del error: ${error}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o sugerencia? Estamos aquí para ayudarte.
            Completa el formulario a continuación y te responderemos lo antes
            posible.
          </p>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-card border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6">Envíanos un mensaje</h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="asunto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asunto</FormLabel>
                    <FormControl>
                      <Input placeholder="Asunto de tu mensaje" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mensaje"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escribe tu mensaje aquí..."
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="privacidad"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Acepto la{" "}
                        <Link
                          href="/politica-privacidad"
                          className="text-blue-600 hover:underline"
                        >
                          política de privacidad
                        </Link>{" "}
                        y el tratamiento de mis datos
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="custom-button primary-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
