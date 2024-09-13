
function celsiusFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


function calcular() {

    const tempCelsiusFahrenheit = document.getElementById('tempCelsiusFahrenheit').checked;
    const tempFahrenheitCelsius = document.getElementById('tempFahrenheitCelsius').checked;
    

    const numero = parseFloat(document.getElementById('numero').value);
    
    let resultado;
    

    if (tempCelsiusFahrenheit) {
        resultado = celsiusFahrenheit(numero);
        document.getElementById('resultado').innerText = `${numero} °C é igual a ${resultado.toFixed(2)} °F`;
    } else if (tempFahrenheitCelsius) {
        resultado = fahrenheitCelsius(numero);
        document.getElementById('resultado').innerText = `${numero} °F é igual a ${resultado.toFixed(2)} °C`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, selecione uma opção de conversão.';
    }
}

function limparCampos() {
    document.getElementById('tempCelsiusFahrenheit').checked = false;
    document.getElementById('tempFahrenheitCelsius').checked = false;
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerText = '';
}
