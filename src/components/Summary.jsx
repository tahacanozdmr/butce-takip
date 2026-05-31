import { TYPES } from "../interfaces/transaction";

export default function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === TYPES.INCOME)
    .reduce((sum, t) => sum + Number(t.amount), 0);
  const expense = transactions
    .filter((t) => t.type === TYPES.EXPENSE)
    .reduce((sum, t) => sum + Number(t.amount), 0);
  const balance = income - expense;

  const fmt = (n) =>
    new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 2,
    }).format(n);

  const cards = [
    {
      label: "Toplam Gelir",
      value: income,
      text: "text-emerald-600",
      accent: "bg-emerald-500",
    },
    {
      label: "Toplam Gider",
      value: expense,
      text: "text-rose-600",
      accent: "bg-rose-500",
    },
    {
      label: "Bakiye",
      value: balance,
      text: balance >= 0 ? "text-slate-900" : "text-orange-600",
      accent: balance >= 0 ? "bg-slate-900" : "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {cards.map((c) => (
        <div
          key={c.label}
          className="card p-5 relative overflow-hidden transition hover:shadow-md"
        >
          <div className={`absolute left-0 top-0 bottom-0 w-1 ${c.accent}`} />
          <p className="text-sm text-slate-500">{c.label}</p>
          <p className={`text-2xl font-semibold mt-2 tabular-nums ${c.text}`}>
            {fmt(c.value)}
          </p>
        </div>
      ))}
    </div>
  );
}
