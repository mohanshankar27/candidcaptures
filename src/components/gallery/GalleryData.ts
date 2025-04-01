
export const galleryImages = [
  {
    url: "/lovable-uploads/944206cf-acec-4d0e-88cf-b2a20851be6a.png",
    alt: "Family portrait with elderly couple in traditional attire against purple background",
  },
  {
    url: "/lovable-uploads/395ab6f6-5a91-46b8-bdf3-44499d8493c4.png",
    alt: "Family portrait with parents and daughter against black background",
  },
  {
    url: "/lovable-uploads/ee93278b-e620-468b-b539-46e8f10a87cd.png",
    alt: "Multi-generation family portrait with grandparents, parents, and children against black background",
  },
  {
    url: "/lovable-uploads/6d887d9c-2c78-4713-8ccb-e9e0692fdbeb.png",
    alt: "Family portrait with adult sons and elderly parents against black background",
  },
  {
    url: "/lovable-uploads/fc003ada-77fe-4a80-9cad-6cee492da608.png",
    alt: "Outdoor couple portrait with natural lighting against blurred green background",
  },
  {
    url: "/lovable-uploads/60b1c9a1-b1ce-45fd-a8c0-ce3d3176c459.png",
    alt: "Family portrait with mother and children in traditional attire against natural background",
  },
  {
    url: "/lovable-uploads/7ace083a-8683-45e7-9aae-df69d4ccccd2.png",
    alt: "Traditional couple portrait with husband and wife in ethnic attire against studio backdrop",
  },
  {
    url: "/lovable-uploads/05aaefdf-2ab5-40d5-9e5e-7d310164aefb.png",
    alt: "Modern couple portrait with matching attire in outdoor setting",
  },
];

// Preload important images for faster rendering
export const preloadGalleryImages = () => {
  galleryImages.slice(0, 5).forEach(image => {
    const img = new Image();
    img.src = image.url;
  });
};
