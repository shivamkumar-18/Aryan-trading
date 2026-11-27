/**
 * Website copy. DRAFT TEXT written for this brief; the client must read and
 * approve every line before launch (see README "Content to confirm").
 * Nothing here promises profits, returns or tips.
 */
export const audiences = [
  { title: "Beginners", text: "Start from zero. We explain how the market works in plain language before any chart or strategy." },
  { title: "College students", text: "Build a real skill early. Ask us which batch fits around your college timetable." },
  { title: "Working professionals", text: "Learn in a structured classroom, not from random videos. Ask about evening and weekend options." },
];

export const courses = [
  {
    title: "Stock Market Foundation",
    level: "Beginner",
    summary: "The base every trader needs, taught step by step.",
    points: ["How exchanges, brokers and orders work", "Demat and trading account basics", "Reading price quotes and simple charts", "Charges, taxes and risk basics"],
  },
  {
    title: "Technical Analysis",
    level: "Intermediate",
    summary: "Read charts with a clear method instead of guesswork.",
    points: ["Candlesticks, trends and support or resistance", "Common chart patterns", "Moving averages, RSI and volume", "Building your own trade checklist"],
  },
  {
    title: "Options Trading",
    level: "Intermediate to advanced",
    summary: "Understand options and their risk before you place a trade.",
    points: ["Calls, puts, strike, premium and expiry", "Reading the option chain", "Option Greeks in simple terms", "Defined-risk strategies and expiry-day risks"],
  },
  {
    title: "Live Market Practice",
    level: "Practice",
    summary: "Apply what you learn in real market hours, with guidance.",
    points: ["Supervised practice during market hours", "Paper trading and a trade journal", "Position sizing and risk rules", "Review sessions on your own trades"],
  },
] as const;

export const steps = [
  { title: "Book a free demo class", text: "Fill the form or message us on WhatsApp. No payment needed." },
  { title: "Meet the mentor", text: "Ask your questions and see how a class runs." },
  { title: "Choose your course and batch", text: "We suggest a course that matches your level and your schedule." },
  { title: "Learn and practise", text: "Classroom learning first, then guided practice in live market hours." },
];

export const faqs = [
  { q: "Do I need any market knowledge to join?", a: "No. The Stock Market Foundation course starts from the basics and needs no earlier experience." },
  { q: "Are the classes online or in a classroom?", a: "Our batches are offline, held in person at our classroom. The address is in the contact section." },
  { q: "What happens in the free demo class?", a: "You meet the mentor, see how a class is taught and ask any questions. There is no payment and no obligation to join." },
  { q: "Do you give stock tips or manage money?", a: "No. Aryan Trading Classes is a training institute. We do not provide stock tips, buy or sell calls, PMS or investment advisory services." },
  { q: "Will I make profits after the course?", a: "No course can promise profits. Trading involves risk of loss. We teach you how to analyse, size positions and manage risk so that you can make informed decisions." },
  { q: "How do I get fees and batch timings?", a: "Message us on WhatsApp or fill the form. We reply with the current batches and fees." },
];
