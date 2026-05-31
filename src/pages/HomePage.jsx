import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CATEGORIES } from "../interfaces/transaction";
import Summary from "../components/Summary";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

export default function HomePage() {
  const [transactions, setTransactions] = useLocalStorage("transactions", []);
  const [editing, setEditing] = useState(null);
  const [filter, setFilter] = useState("Tümü");
  const [query, setQuery] = useState("");

  const handleAddOrUpdate = (data) => {
    if (editing) {
      setTransactions(
        transactions.map((t) =>
          t.id === editing.id ? { ...t, ...data } : t
        )
      );
      setEditing(null);
    } else {
      setTransactions([
        { id: crypto.randomUUID(), ...data },
        ...transactions,
      ]);
    }
  };

  const handleDelete = (id) => {
    if (!confirm("Bu işlemi silmek istediğinize emin misiniz?")) return;
    setTransactions(transactions.filter((t) => t.id !== id));
    if (editing?.id === id) setEditing(null);
  };

  const filtered = transactions
    .filter((t) => (filter === "Tümü" ? true : t.category === filter))
    .filter((t) =>
      query.trim()
        ? t.title.toLowerCase().includes(query.trim().toLowerCase())
        : true
    );

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
              B
            </div>
            <div className="text-left">
              <h1 className="text-lg font-semibold text-slate-900 leading-tight">
                Bütçe Takip
              </h1>
              <p className="text-xs text-slate-500">
                Gelir & giderlerinizi şık biçimde yönetin
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <Summary transactions={transactions} />

        <TransactionForm
          onSubmit={handleAddOrUpdate}
          editing={editing}
          onCancel={() => setEditing(null)}
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            İşlemler
            <span className="text-xs text-slate-400 font-normal">
              ({filtered.length})
            </span>
          </h2>
          <div className="flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ara..."
              className="input text-sm py-2"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="input text-sm py-2"
            >
              <option>Tümü</option>
              {CATEGORIES.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.icon}  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <TransactionList
          transactions={filtered}
          onEdit={setEditing}
          onDelete={handleDelete}
        />

        <footer className="text-center text-xs text-slate-400 mt-12">
          © {new Date().getFullYear()} Bütçe Takip · React + Vite + Tailwind
        </footer>
      </main>
    </div>
  );
}
