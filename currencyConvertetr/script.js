


const exchangeRates = {
  USD: 1,
  INR: 74.83,
  
};

document.getElementById('convertBtn').addEventListener('click', function() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  if (isNaN(amount) || !exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    alert('Invalid input');
    return;
  }

  const result = convertCurrency(amount, fromCurrency, toCurrency);
  document.getElementById('result').innerText = `${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`;
});

function convertCurrency(amount, fromCurrency, toCurrency) {
  if (fromCurrency !== "USD") {
    amount = amount / exchangeRates[fromCurrency];
  }
  const convertedAmount = amount * exchangeRates[toCurrency];
  return convertedAmount.toFixed(2);
}
