import { defineType, defineField } from "sanity";

export const certificate = defineType({
  name: "certificate",
  title: "Certificate",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Certificate Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "issuer",
      title: "Issuing Organization",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Education & Academics",
          "Technical & Digital Skills",
          "Analytical & Quantitative Skills",
          "Research & Scientific Skills",
          "Interpersonal & Communication Skills",
          "Professional & Career Development",
          "Ethics, Responsibility & Social Impact",
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "file",
      title: "Certificate File (PDF or Image)",
      type: "file",
      options: {
        accept: ".pdf,.png,.jpg,.jpeg",
      },
    }),
  ],
});
