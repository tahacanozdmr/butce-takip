import { useEffect, useState } from "react";
import { CATEGORIES, TYPES } from "../interfaces/transaction";

const empty = {
  title: "",
  amount: "",
  type: TYPES.EXPENSE,
  category: CATEGORIES[0].name,
  date: new Date().toISOString().slice(0, 10),
};

export default function TransactionForm({ onSubmit, editing, onCancel }) {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editing) {
      setForm({
        title: editing.title,
        amount: editing.amount,
        type: editing.type,
        category: editing.category,
        date: editing.date,
      });
    } else {
      setForm(empty);
    }
  }, [editing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return setError("Başlık boş olamaz.");
    const amount = Number(form.amount);
    if (!amount || amount <= 0) return setError("Tutar 0'dan büyük olmalı.");
    setError("");
    onSubmit({ ...form, amount });
    setForm(empty);
  };

  const isIncome = form.type === TYPES.INCOME;

  return (
    <form onSubmit={handleSubmit} className="card p-6 mb-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-slate-900">
          {editing ? "İşlemi Düzenle" : "Yeni İşlem"}
        </h2>
        <div className="flex bg-slate-100 border border-slate-200 rounded-xl p-1 text-sm">
          <button
            type="button"
            onClick={() => setForm({ ...form, type: TYPES.EXPENSE })}
            className={`px-4 py-1.5 rounded-lg transition ${
              !isIncome
                ? "bg-white text-rose-600 shadow-sm font-medium"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Gider
          </button>
          <button
            type="button"
            onClick={() => setForm({ ...form, type: TYPES.INCOME })}
            className={`px-4 py-1.5 rounded-lg transition ${
              isIncome
                ? "bg-white text-emerald-600 shadow-sm font-medium"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Gelir
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Başlık (örn. Kahve)"
          className="input lg:col-span-2"
        />
        <input
          name="amount"
          type="number"
          step="0.01"
          value={form.amount}
          onChange={handleChange}
          placeholder="Tutar (₺)"
          className="input"
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="input"
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="input lg:col-span-2"
        >
          {CATEGORIES.map((c) => (
            <option key={c.name} value={c.name}>
              {c.icon}  {c.name}
            </option>
          ))}
        </select>

        <div className="flex gap-2 lg:col-span-2">
          <button type="submit" className="btn-primary flex-1">
            {editing ? "Güncelle" : "Ekle"}
          </button>
          {editing && (
            <button type="button" onClick={onCancel} className="btn-ghost">
              İptal
            </button>
          )}
        </div>
      </div>
      {error && <p className="text-rose-600 text-sm mt-3">{error}</p>}
    </form>
  );
}
