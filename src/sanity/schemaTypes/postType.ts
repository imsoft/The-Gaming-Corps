import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "excerpt",
      title: "Resumen",
      type: "text",
      description: "Breve descripción o introducción del post.",
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Imagen Principal",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Texto alternativo",
        }),
      ],
    }),

    // ✅ Cambiado a array de referencias
    defineField({
      name: "categories",
      title: "Categorías",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: [{ type: "category" }] }),
      ],
    }),

    defineField({
      name: "subcategories",
      title: "Subcategorías",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: [{ type: "subcategory" }] }),
      ],
    }),

    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
    }),
    defineField({
      name: "readingTime",
      title: "Tiempo de lectura (min)",
      type: "number",
    }),
    defineField({
      name: "featured",
      title: "Destacado",
      type: "boolean",
    }),
    defineField({
      name: "highlightedInHero",
      title: "Mostrar en al inicio",
      type: "boolean",
      description:
        "Si se activa, este artículo aparecerá como destacado en la sección principal del sitio.",
    }),
    defineField({
      name: "body",
      title: "Contenido",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return {
        ...selection,
        subtitle: author ? `por ${author}` : "",
      };
    },
  },
});
