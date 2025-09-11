export type DeliveryInfo = {
  title: string;
  body: string;
};

export const deliveryCards: DeliveryInfo[] = [
  {
    title: "Which areas do you deliver to?",
    body: "We deliver across Slough and nearby areas. If you’re unsure whether we cover your location, just send us a quick WhatsApp message to confirm.",
  },
  {
    title: "Do you offer same-day delivery?",
    body: "Yes – if you place your order in the morning, we’ll do our best to deliver the same day. For guaranteed availability, please place your order at least a day in advance.",
  },
  {
    title: "Can I pick up my order instead of delivery?",
    body: "Of course! You’re welcome to collect directly from our kitchen in Slough. The full address will be shared once your order is confirmed.",
  },
  {
    title: "How much is delivery?",
    body: "Delivery charges depend on your area. We’ll confirm the exact fee when you place your order.",
  }
];
