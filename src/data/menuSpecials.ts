export type Dish = {
  title: string;
  body: string;
  src: string;
  alt: string;
};

// Note: filenames contain spaces and '#'. Use URL-encoded paths to avoid issues in URLs.
export const menuSpecials: Dish[] = [
  {
    title: "Nihari",
    body: "Consists of slow-cooked meat, mainly a shank cut of beef, lamb and mutton, or goat meat, as well as chicken and bone marrow. It is flavoured with long pepper, a relative of black pepper.",
    src: "/special_1.jpg",
    alt: "Nihari",
  },
  {
    title: "Kheer",
    body: "A pudding or porridge popular in the Indian subcontinent, usually made by boiling milk, sugar or jaggery, and rice. It can be additionally flavoured with dried fruits, nuts, cardamom and saffron.",
    src: "/special_2.jpg",
    alt: "Kheer",
  },
  {
    title: "Mixed Platter",
    body: "A hearty combination of char-grilled chicken pieces and succulent seekh kebabs, served alongside spiced bulgur rice. Accompanied by fire-roasted tomatoes and peppers, this platter blends smoky, aromatic flavors perfect for sharing.",
    src: "/special_3.jpg",
    alt: "Mixed Platter",
  },
];
