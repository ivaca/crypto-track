export const addCoin = (coins, newCoin) => {
  if (!coins) return [];
  for (let i = 0; i < coins.length; i++) {
    if (coins[i].FROMSYMBOL === newCoin.FROMSYMBOL) {
      coins[i] = { ...coins[i], ...newCoin };
      // Object.assign(coins[i], newCoin);
      return coins;
    }
  }

  coins.push(newCoin);
  return coins;
};
