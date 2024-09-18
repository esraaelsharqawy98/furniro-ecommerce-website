export const formatCurrency = (amount) => {
    if (isNaN(amount)) {
        return "0.00"; 
    }
    return new Intl.NumberFormat('en-IN').format(amount);
};