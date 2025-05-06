import { defineType, defineField } from "sanity";

export const youtubeType = defineType({
  name: "youtube",
  type: "object",
  title: "YouTube Video",
  fields: [
    defineField({
      name: "url",
      title: "YouTube URL",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["https"] }),
    }),
  ],
  preview: {
    select: {
      url: "url",
    },
    prepare({ url }) {
      return {
        title: "YouTube Video",
        subtitle: url,
      };
    },
  },
});
