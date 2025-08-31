export type Review = {
  rating: number; // 1-5
  quote: string;
  name: string;
  location: string;
};

export const reviews: Review[] = [
  { rating: 5, quote: "Best biryani I’ve ever had!", name: "Ayesha", location: "Slough" },
  { rating: 5, quote: "Incredible flavors and perfect spice.", name: "Rahul", location: "Reading" },
  { rating: 5, quote: "Authentic taste, generous portions.", name: "Fatima", location: "Hounslow" },
  { rating: 5, quote: "So good, we ordered again the next day!", name: "Imran", location: "Windsor" },
  { rating: 5, quote: "Fragrant rice and tender meat, truly amazing.", name: "Sara", location: "Maidenhead" },
  { rating: 5, quote: "Hands down the best biryani in town.", name: "Omar", location: "Slough" },
];
