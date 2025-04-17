import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
    }),
    defineField({
      name: "subcategories",
      title: "Subcategorías",
      type: "array",
      of: [{ type: "reference", to: [{ type: "subcategory" }] }],
      readOnly: true,
      description:
        "Este campo se llena automáticamente con las subcategorías relacionadas.",
    }),
  ],
});
