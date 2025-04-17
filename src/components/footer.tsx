"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Mail } from "lucide-react";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Esquema de validación para el formulario de newsletter
const newsletterSchema = z.object({
  email: z.string().email({
    message: "Por favor, introduce un email válido.",
  }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function Footer() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Inicializar el formulario de newsletter
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determinar qué logo mostrar basado en el tema
  const logoSrc = !mounted
    ? "/logo-light-theme.png"
    : theme === "dark" || (theme === "system" && resolvedTheme === "dark")
    ? "/logo-dark-theme.png"
    : "/logo-light-theme.png";

  // Función para manejar el envío del formulario de newsletter
  async function onSubmitNewsletter(data: NewsletterFormValues) {
    console.log(data);
    setIsSubmitting(true);

    try {
      // Aquí iría la lógica para suscribir al usuario al newsletter
      // Por ahora, simulamos una espera y mostramos un toast de éxito
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast("¡Suscripción exitosa!", {
        description: "Te has suscrito correctamente a nuestro newsletter.",
      });

      form.reset();
    } catch (error) {
      toast("Error", {
        description: `Ha ocurrido un error al procesar tu suscripción. Por favor, inténtalo de nuevo. El error es: ${error}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-3">
            <div className="relative h-8 w-40">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="The Gaming Corps Logo"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Tu portal de noticias sobre videojuegos y tecnología.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>contacto@thegamingcorps.com</span>
            </div>
            <div className="flex space-x-3 pt-2">
              <Link
                href="https://x.com/TheGamingcorps"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.243 1H14.5l-4.244 4.846L15.5 15h-4.679l-3.643-4.572L3.9 15H1.5l4.64-5.296L.5 1h4.75l3.361 4.216L12.243 1zm-.734 12h1.29L4.526 2.945h-1.33L11.51 13z" />
                </svg>
                <span className="sr-only">X</span>
              </Link>
              <Link
                href="https://www.facebook.com/Thegamingcorps"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/thegamingcorps__/"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@thegamingcorps"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-tiktok"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/nosotros"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Suscríbete para recibir las últimas noticias.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmitNewsletter)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Tu email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="custom-button primary-button w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Procesando..." : "Suscribirse"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} The Gaming Corps. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
