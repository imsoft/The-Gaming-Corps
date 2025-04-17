"use client";

import { useRouter, usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Category } from "@/lib/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

interface Props {
  categories: Category[];
}

export default function CategoryCombobox({ categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [openCat, setOpenCat] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  const [selectedCategory, selectedSubcategory] = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    const slugIndex = parts.indexOf("categoria");
    const category = parts[slugIndex + 1] || null;
    const subcategory = parts[slugIndex + 2] || null;
    return [category, subcategory];
  }, [pathname]);

  const selectedCat = categories.find((c) => c.slug === selectedCategory);

  const handleCategorySelect = (slug: string) => {
    setOpenCat(false);
    router.push(`/categoria/${slug}`);
  };

  const handleSubcategorySelect = (slug: string) => {
    setOpenSub(false);
    if (selectedCategory) {
      router.push(`/categoria/${selectedCategory}/${slug}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-xl">
      {/* Categoría */}
      <Popover open={openCat} onOpenChange={setOpenCat}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-[220px] justify-start text-left"
          >
            {selectedCat?.name || "Selecciona una categoría"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[220px] p-0">
          <Command>
            <CommandInput placeholder="Buscar categoría..." />
            <CommandEmpty>No hay resultados.</CommandEmpty>
            <CommandGroup heading="Categorías">
              {categories.map((cat) => (
                <CommandItem
                  key={cat._id}
                  value={cat.name}
                  onSelect={() => handleCategorySelect(cat.slug)}
                >
                  {cat.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Subcategoría */}
      {selectedCat?.subcategories?.length ? (
        <Popover open={openSub} onOpenChange={setOpenSub}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[220px] justify-start text-left"
            >
              {selectedSubcategory
                ? selectedCat.subcategories.find(
                    (s) => s.slug === selectedSubcategory
                  )?.name
                : "Selecciona una subcategoría"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[220px] p-0">
            <Command>
              <CommandInput placeholder="Buscar subcategoría..." />
              <CommandEmpty>No hay subcategorías.</CommandEmpty>
              <CommandGroup heading="Subcategorías">
                {selectedCat.subcategories.map((sub) => (
                  <CommandItem
                    key={sub._id}
                    value={sub.name}
                    onSelect={() => handleSubcategorySelect(sub.slug)}
                  >
                    {sub.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      ) : null}
    </div>
  );
}
