import TransactionItem from "./TransactionItem";

export default function TransactionList({ transactions, onEdit, onDelete }) {
  if (transactions.length === 0) {
    return (
      <div className="card text-center py-14 text-slate-500">
        Henüz işlem yok. Yukarıdaki formdan yeni bir işlem ekleyin.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {transactions.map((tx) => (
        <TransactionItem
          key={tx.id}
          tx={tx}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
