import React from "react";

const PlusValue = ({ wallet, data }) => {
  const positiveTransactions = wallet.filter((ope) => ope.quantity > 0);
  const negativeTransaction = wallet.filter((ope) => ope.quantity < 0);
  let sold = negativeTransaction.map((ope) => data[ope.coin] * ope.quantity);

  const diffOperation = positiveTransactions.map(
    (ope) => (data[ope.coin] - ope.price) * ope.quantity
  );
  let money = 0;
  if (wallet.length > 0) {
    money = diffOperation.reduce((acc, cur) => acc + cur);
    sold = sold.reduce((acc, cur) => acc + cur);

    money = money + sold;
  }

  return (
    <div>
      {money > 0 ? "+" : ""}
      {money} €
    </div>
  );
};

export default PlusValue;
