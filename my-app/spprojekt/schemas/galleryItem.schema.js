export default {
  name: "galleryImage",
  type: "document",
  title: "GalleryItems",
  fields: [
    {
      name: "caption",
      type: "string",
      title: "caption",
    },
    {
      name: "category",
      type: "string",
      title: "kategoria",
    },

    {
      name: "data_dodania",
      type: "date",
      title: "data",
    },
    {
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
