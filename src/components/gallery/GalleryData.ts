
export const galleryImages = [
  {
    url: "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
    alt: "Studio portrait with dramatic lighting against dark background",
  },
  {
    url: "/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png",
    alt: "Black and white portrait with dramatic lighting",
  },
  {
    url: "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
    alt: "Artistic bridal preparation photoshoot with dramatic lighting",
  },
  {
    url: "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png",
    alt: "Romantic beach bonfire photoshoot with fairy lights and colorful flags",
  },
  {
    url: "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
    alt: "Traditional ceremony with floral garlands and festive lighting",
  },
  {
    url: "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
    alt: "Elegant portrait with traditional jewelry and attire in dramatic lighting",
  },
  {
    url: "/lovable-uploads/4b2215ec-b75e-423e-812a-6e97df0f3f51.png",
    alt: "Fashion beauty portrait with vibrant red hair and pink makeup against dark background",
  },
  {
    url: "/lovable-uploads/76c4dc73-9f40-47ed-93a1-2756461af452.png",
    alt: "Traditional family portrait with parents and baby in cultural attire",
  },
  {
    url: "/lovable-uploads/7cfed8a5-b603-4ce2-82c9-edb577bfb8bd.png",
    alt: "Decorative ornate rocking horse with traditional vibrant paintwork",
  },
  {
    url: "/lovable-uploads/a564c3a2-4602-4fb5-bdda-403ea9a78318.png",
    alt: "Portrait of a young woman in traditional blue and turquoise saree with jewelry",
  },
  {
    url: "/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png",
    alt: "Wedding portrait with elegant couple in traditional attire",
  },
  {
    url: "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
    alt: "Couple in traditional wedding attire with elegant styling",
  },
  {
    url: "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
    alt: "Traditional celebration with colorful decorations and styling",
  },
  {
    url: "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
    alt: "Wedding celebration with traditional elements and decorations",
  },
  {
    url: "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
    alt: "Ceremonial traditions with cultural significance and styling",
  },
  {
    url: "/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png",
    alt: "Cultural celebration with traditional elements and decorations",
  },
  {
    url: "/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png",
    alt: "Beautiful portrait photography with cultural elements",
  },
  {
    url: "/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png",
    alt: "Elegant portrait with traditional styling and artistic lighting",
  },
];

// Preload important images for faster rendering
export const preloadGalleryImages = () => {
  galleryImages.slice(0, 5).forEach(image => {
    const img = new Image();
    img.src = image.url;
  });
};
