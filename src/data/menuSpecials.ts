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
    body: "Body text for whatever you’d like to add more about the dish.",
    src: "/special_1.jpg",
    alt: "Nihari",
  },
  {
    title: "Kheer",
    body: "Body text for whatever you’d like to add more about the dish.",
    src: "/special_2.jpg",
    alt: "Kheer",
  },
  {
    title: "Mixed Platter",
    body: "Body text for whatever you’d like to add more about the dish.",
    src: "/special_3.jpg",
    alt: "Mixed Platter",
  },
];
