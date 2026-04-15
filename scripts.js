const convertButton = document.querySelector('.convert-button');    
const currencySelect = document.querySelector('.currency-select');
let rates = null
async function getRates() {
  const response = await fetch("https://v6.exchangerate-api.com/v6/458cc18b904dda275013f150/latest/BRL");
  const data = await response.json();

  return { 
    usd: data.conversion_rates.USD,
    eur: data.conversion_rates.EUR,
    gbp: data.conversion_rates.GBP
}
}
async function loadRates() {
  rates = await getRates();
}
loadRates()

async function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value;
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
    const currencyValueConverted = document.querySelector('.currency-value');
    // const rates = await getRates();
    // const dolarToday = 5.2
    // const euroToday = 6.2
    const bitcoinToday = 360.000
    const libraToday = 6.8



    if (currencySelect.value === 'dolar') {
        currencyValueConverted.textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD' 
    }).format(inputCurrencyValue * rates.usd);
    }

    if (currencySelect.value === 'euro') {
        currencyValueConverted.textContent = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue * rates.eur);
    }

    if (currencySelect.value === 'bitcoin') {
        currencyValueConverted.textContent = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 6
        }).format(inputCurrencyValue / bitcoinToday);
    }
    if (currencySelect.value === 'libra') {
        currencyValueConverted.textContent = new Intl.NumberFormat('en-GB', { 
            style: 'currency', 
            currency: 'GBP' 
        }).format(inputCurrencyValue * rates.gbp);
    }


    currencyValueToConvert.textContent = new Intl.NumberFormat('pt-BR', { 
        style: 'currency',
        currency: 'BRL' 
    }).format(inputCurrencyValue);  

    

    // currencyValueConverted.textContent = `US$ ${convertedValue.toFixed(2)}`;
}
convertButton.addEventListener('click', convertValues);


currencySelect.addEventListener('change', () =>{
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')

    if (currencySelect.value === 'dolar') {
        currencyName.textContent = 'Dólar americano'
        currencyImg.src = 'assets/Dolar.png'
    }
    if (currencySelect.value === 'euro') {
        currencyName.textContent = 'Euro'
        currencyImg.src = 'assets/Euro.png'
    }
    if (currencySelect.value === 'bitcoin') {
        currencyName.textContent = 'Bitcoin'
        currencyImg.src = 'assets/Bitcoin.png'
    }
    if (currencySelect.value === 'libra') {
        currencyName.textContent = 'Libra'
        currencyImg.src = 'assets/Libra.png'
    }
    convertValues() // Deixa o botao converter inutil
})

