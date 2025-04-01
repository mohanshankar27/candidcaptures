
// MediaItemType defines the structure of a media item for the interactive bento gallery
export interface MediaItemType {
  id: number;
  type: string;
  title: string;
  desc: string;
  url: string;
  span: string;
}

// Wedding gallery items
export const weddingGalleryItems: MediaItemType[] = [
  {
    id: 1,
    type: "image",
    title: "Wedding Ceremony",
    desc: "Capturing the sacred vows and beautiful ceremony moments",
    url: "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
    span: "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "First Dance",
    desc: "The magical first dance as a married couple",
    url: "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Bride Preparation",
    desc: "The intimate moments before walking down the aisle",
    url: "/lovable-uploads/76c4dc73-9f40-47ed-93a1-2756461af452.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Ring Exchange",
    desc: "The symbolic exchange of rings",
    url: "/lovable-uploads/6b3d57da-a4b7-4ab6-8282-a666fc5400b4.png",
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Reception Details",
    desc: "Beautiful decor and details that make the day special",
    url: "/lovable-uploads/507c487a-ec87-4401-ace4-4b27d7bcd2e0.png",
    span: "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "Couple Portraits",
    desc: "Romantic portraits capturing the love between the newlyweds",
    url: "/lovable-uploads/702c4c46-bfdd-4ecf-a98c-37ccd7b5f7b4.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
];

// Portrait gallery items
export const portraitGalleryItems: MediaItemType[] = [
  {
    id: 1,
    type: "image",
    title: "Professional Headshots",
    desc: "Premium corporate headshots for professionals",
    url: "/lovable-uploads/9bc16cc2-a103-4803-a922-903bd674693c.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Family Portraits",
    desc: "Capturing the joy and connection of families",
    url: "/lovable-uploads/0ef8c636-5a0e-4fe4-aedb-03f82bc3c8d4.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Senior Portraits",
    desc: "Celebrate academic achievements with senior portraits",
    url: "/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Creative Portrait",
    desc: "Artistic portrait photography with creative lighting",
    url: "/lovable-uploads/6b1e5df0-9fb9-4289-835f-ee80acf9fdfa.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Lifestyle Portrait",
    desc: "Natural, candid portraits in everyday settings",
    url: "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
];

// Event gallery items
export const eventGalleryItems: MediaItemType[] = [
  {
    id: 1,
    type: "image",
    title: "Corporate Events",
    desc: "Professional coverage for business conferences and meetings",
    url: "/lovable-uploads/0abd204c-da72-4a05-87ae-39929aeedd9f.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Birthday Celebrations",
    desc: "Capturing the joy of birthday parties and special occasions",
    url: "/lovable-uploads/0da1d025-7654-4fe8-928f-c4b58b4f6a2c.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Concerts & Performances",
    desc: "Dynamic photography of live performances and entertainment",
    url: "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png",
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Award Ceremonies",
    desc: "Elegant coverage of award shows and recognition events",
    url: "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
    span: "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Charity Events",
    desc: "Capturing the spirit of charitable gatherings and fundraisers",
    url: "/lovable-uploads/9c986aa2-6da0-4710-b9f7-c6195506ba38.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
];

// Commercial gallery items
export const commercialGalleryItems: MediaItemType[] = [
  {
    id: 1,
    type: "image",
    title: "Product Photography",
    desc: "High-quality product images for e-commerce and marketing",
    url: "/lovable-uploads/469e56bd-78fb-4a44-b55c-04dfba69656b.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Food Photography",
    desc: "Appetizing food imagery for restaurants and publications",
    url: "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Real Estate",
    desc: "Showcasing properties with professional interior and exterior photography",
    url: "/lovable-uploads/3b0c013d-b9fb-40c8-b991-7781c698945e.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Advertising",
    desc: "Creative commercial photography for advertising campaigns",
    url: "/lovable-uploads/43b3b2f5-3919-44f7-8575-f1e18682bf73.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Corporate Branding",
    desc: "Visual assets for corporate identity and branding materials",
    url: "/lovable-uploads/a564c3a2-4602-4fb5-bdda-403ea9a78318.png",
    span: "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
];

// Demo gallery items
export const demoGalleryItems: MediaItemType[] = [
  {
    id: 1,
    type: "image",
    title: "Anurag Mishra",
    desc: "Driven, innovative, visionary",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Dog Puppy",
    desc: "Adorable loyal companion.",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Forest Path",
    desc: "Mystical forest trail",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "Falling Leaves",
    desc: "Autumn scenery",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "video",
    title: "Bird Parrot",
    desc: "Vibrant feathered charm",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "Beach Paradise",
    desc: "Sunny tropical beach",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "video",
    title: "Shiva Temple",
    desc: "Peaceful Shiva sanctuary.",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
];
