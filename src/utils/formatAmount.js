export const formatAmount = (amount) => {
    const amountNumber = Number(amount)
    return (amountNumber / 1e18).toFixed(2);
  }