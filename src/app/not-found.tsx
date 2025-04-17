import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Página no encontrada</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </>
  );
}
