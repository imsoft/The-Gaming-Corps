"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-40 sm:w-48">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="The Gaming Corps Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" active={pathname === "/"}>
              Inicio
            </NavLink>
            <NavLink href="/blog" active={pathname.startsWith("/blog")}>
              Blog
            </NavLink>
            <NavLink href="/nosotros" active={pathname === "/nosotros"}>
              Nosotros
            </NavLink>
            <NavLink href="/contacto" active={pathname === "/contacto"}>
              Contacto
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* Menú de hamburguesa para móviles */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="p-0"
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <SheetHeader className="mb-6">
                <SheetTitle>The Gaming Corps</SheetTitle>
                <SheetDescription>
                  La comunidad de gamers más grande de Latinoamérica.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col items-center space-y-4 text-center">
                <MobileNavLink
                  href="/"
                  active={pathname === "/"}
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </MobileNavLink>
                <MobileNavLink
                  href="/blog"
                  active={pathname.startsWith("/blog")}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </MobileNavLink>
                <MobileNavLink
                  href="/nosotros"
                  active={pathname === "/nosotros"}
                  onClick={() => setIsOpen(false)}
                >
                  Nosotros
                </MobileNavLink>
                <MobileNavLink
                  href="/contacto"
                  active={pathname === "/contacto"}
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </MobileNavLink>
              </nav>
            </SheetContent>
          </Sheet>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative font-medium text-sm transition-colors hover:text-foreground",
        active ? "text-blue-500" : "text-muted-foreground",
        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
        active && "after:scale-x-100"
      )}
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

function MobileNavLink({
  href,
  active,
  onClick,
  children,
}: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-center py-3 text-base font-medium transition-colors hover:text-foreground",
        active ? "text-blue-500" : "text-muted-foreground",
        active && "bg-accent/50 rounded-md"
      )}
    >
      {children}
    </Link>
  );
}
