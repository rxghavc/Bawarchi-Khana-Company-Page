export type Dish = {
  title: string;
  body: string;
  src: string;
  alt: string;
};

// Note: filenames contain spaces and '#'. Use URL-encoded paths to avoid issues in URLs.
export const menuSpecials: Dish[] = [
  {
    title: "Chicken Biryani",
    body: "Body text for whatever you’d like to add more about the dish.",
    src: "/special_1.jpg",
    alt: "Chicken Biryani",
  },
  {
    title: "Kottu Parotta",
    body: "Body text for whatever you’d like to add more about the dish.",
    src: "/special_2.jpg",
    alt: "Kottu Parotta",
  },
  {
    title: "Vegetable Salad",
    body: "Body text for whatever you’d like to add more about the dish.",
    src: "/special_3.jpg",
    alt: "Vegetable Salad",
  },
];
