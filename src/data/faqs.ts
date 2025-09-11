export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "How do I place an order?",
    answer: "Orders can be placed through our WhatsApp, or by phone. Simply choose your dishes, confirm your time slot, and we’ll prepare everything fresh for you.",
  },
  {
    question: "How do I pay?",
    answer: "We accept cash on delivery/collection, bank transfer, or secure online payment (depending on your preference).",
  },
  {
    question: "What’s the usual delivery time?",
    answer: "Delivery is normally completed within 1 hour of your chosen time slot. We’ll keep you updated once your order is on its way.",
  },
  {
    question: "Are vegetarian/vegan meals available?",
    answer: "Yes – we offer a range of fresh vegetarian dishes (and vegan options on request). Please ask us if you have special dietary needs.",
  },
  {
    question: "Do you offer Halal food?",
    answer: "Yes – all of our meals are prepared with 100% halal ingredients.",
  },
  {
    question: "Can I customize my order?",
    answer: "Yes – you can request changes such as spice level, portion size, or ingredient swaps when ordering (subject to availability).",
  },
  {
    question: "Do you take bulk or catering orders?",
    answer: "Yes – we cater for family gatherings, parties, and office events. Please book larger orders at least 2–3 days in advance."
  }
];
