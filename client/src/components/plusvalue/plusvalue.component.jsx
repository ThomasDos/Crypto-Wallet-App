import React from "react";

const PlusValue = ({ wallet, data }) => {
  let money = 0;
  let sold = [0];
  let diffOperation = [0, 0];
  const initialValueTransactions = [
    { coin: "BTC", price: 0, quantity: 0, dateString: "1970-01-01" },
  ];

  let positiveTransactions = wallet.filter((ope) => ope.quantity > 0);
  if (positiveTransactions.length === 0)
    positiveTransactions = initialValueTransactions;
  let negativeTransaction = wallet.filter((ope) => ope.quantity < 0);

  if (negativeTransaction.length === 0)
    negativeTransaction = initialValueTransactions;
  if (negativeTransaction.length > 0) {
    sold = negativeTransaction.map((ope) => data[ope.coin] * ope.quantity);
    sold = sold.reduce((acc, cur) => acc + cur);
  }
  diffOperation = positiveTransactions.map((ope) => {
    return (data[ope.coin] - ope.price) * ope.quantity;
  });
  money = diffOperation.reduce((acc, cur) => acc + cur);

  money = money + sold;

  return (
    <div>
      {money > 0 ? "+" : ""}
      {money} €
    </div>
  );
};

export default PlusValue;
