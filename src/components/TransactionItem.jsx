import { TYPES, getCategory } from "../interfaces/transaction";

export default function TransactionItem({ tx, onEdit, onDelete }) {
  const isIncome = tx.type === TYPES.INCOME;
  const cat = getCategory(tx.category);
  const fmt = (n) =>
    new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(n);

  return (
    <div className="group card p-4 flex items-center gap-4 hover:shadow-md transition">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${cat.color}`}
      >
        {cat.icon}
      </div>

      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-slate-900 truncate">
            {tx.title}
          </span>
          <span className="text-[11px] uppercase tracking-wide text-slate-500 border border-slate-200 rounded px-1.5 py-0.5">
            {cat.name}
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-0.5">
          {new Date(tx.date).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      <div
        className={`font-semibold tabular-nums ${
          isIncome ? "text-emerald-600" : "text-rose-600"
        }`}
      >
        {isIncome ? "+" : "-"}
        {fmt(tx.amount)}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(tx)}
          className="text-sm bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg transition"
        >
          Düzenle
        </button>
        <button
          onClick={() => onDelete(tx.id)}
          className="text-sm bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 text-rose-600 px-3 py-1.5 rounded-lg transition"
        >
          Sil
        </button>
      </div>
    </div>
  );
}
