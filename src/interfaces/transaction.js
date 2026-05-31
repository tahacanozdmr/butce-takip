// Transaction = {
//   id: string,
//   title: string,
//   amount: number,
//   type: "income" | "expense",
//   category: string,
//   date: string (ISO)
// }

export const CATEGORIES = [
  { name: "Yemek", icon: "🍽️", color: "bg-orange-100 text-orange-700" },
  { name: "Market", icon: "🛒", color: "bg-lime-100 text-lime-700" },
  { name: "Ulaşım", icon: "🚗", color: "bg-sky-100 text-sky-700" },
  { name: "Fatura", icon: "📄", color: "bg-amber-100 text-amber-700" },
  { name: "Kira", icon: "🏠", color: "bg-rose-100 text-rose-700" },
  { name: "Eğlence", icon: "🎬", color: "bg-pink-100 text-pink-700" },
  { name: "Sağlık", icon: "💊", color: "bg-red-100 text-red-700" },
  { name: "Eğitim", icon: "📚", color: "bg-indigo-100 text-indigo-700" },
  { name: "Alışveriş", icon: "🛍️", color: "bg-fuchsia-100 text-fuchsia-700" },
  { name: "Spor", icon: "⚽", color: "bg-emerald-100 text-emerald-700" },
  { name: "Seyahat", icon: "✈️", color: "bg-cyan-100 text-cyan-700" },
  { name: "Teknoloji", icon: "💻", color: "bg-violet-100 text-violet-700" },
  { name: "Hediye", icon: "🎁", color: "bg-pink-100 text-pink-700" },
  { name: "Maaş", icon: "💼", color: "bg-green-100 text-green-700" },
  { name: "Yatırım", icon: "📈", color: "bg-teal-100 text-teal-700" },
  { name: "Diğer", icon: "📌", color: "bg-gray-100 text-gray-700" },
];

export const CATEGORY_NAMES = CATEGORIES.map((c) => c.name);

export const getCategory = (name) =>
  CATEGORIES.find((c) => c.name === name) ||
  CATEGORIES[CATEGORIES.length - 1];

export const TYPES = {
  INCOME: "income",
  EXPENSE: "expense",
};

export const TYPE_LABELS = {
  income: "Gelir",
  expense: "Gider",
};
