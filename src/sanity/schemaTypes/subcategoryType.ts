import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const subcategoryType = defineType({
  name: "subcategory",
  title: "Subcategory",
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
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "category",
      title: "Categoría padre",
      type: "reference",
      to: [{ type: "category" }],
    }),
  ],
});
