export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN').format(amount);
};