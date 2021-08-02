module.exports = (wallet, coin) => {
  return wallet
    .filter((op) => op.coin === coin)
    .map((myCoin) => myCoin.quantity)
    .reduce((acc, current) => acc + current, 0);
};
