export type Review = {
  rating: number; // 1-5
  quote: string;
  name: string;
  location: string;
};

export const reviews: Review[] = [
  { rating: 5, quote: "A true taste of home with every bite! The flavors were incredibly authentic, spices perfectly balanced, and the portions were generous - this is the best desi food I've had in a long time!", name: "Moeed", location: "Slough" },
  { rating: 5, quote: "Really delicious home cooked food with a professional touch. Shazia always works with you to meet your requirements and uses good quality ingredients which you can tell through the taste of her food which never feels oily or unhealthy. My must try dishes are chicken fried rice, kabuli pulao, nihari, kadhi, spring rolls, lasagne - lots of variety!", name: "Saima", location: "Slough" },
  { rating: 5, quote: "This lady has an amazing talent for cooking,she is so kind and understanding and nothing is too much trouble, plenty of food and a really good price, I highly recommend and I will not be going anywhere else 😀 very happy full family 😀 …", name: "Annmarie", location: "Hounslow" },
  { rating: 5, quote: "Best butter chicken I ever had and all her food is very delicious and high quality. She deserves even more than 5 stars", name: "Sabrinaet", location: "Windsor" },
  { rating: 5, quote: "I like ur pizza and naan..very delicious and yummy.Naan was very soft and taste was too good.", name: "Saira", location: "Maidenhead" },
  { rating: 4, quote: "The pizza was absolutely delicious, packed with flavor and cooked perfectly. While it’s a bit on the higher side price-wise, the quality and taste definitely make it worth it!", name: "H Khan", location: "Slough" },
  { rating: 5, quote: "", name: "Wadood", location: "Slough" },
  { rating: 5, quote: "", name: "Waqas", location: "Windsor" }
];
