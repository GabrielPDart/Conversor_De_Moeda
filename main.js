function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  
  if(valor == "") {
    alert("Informe o valor a ser convertido")
    }else{
      var valorEmReaisNumerico = parseFloat(valor);

      var valorEmDolar = valorEmReaisNumerico / 5.25;

      console.log(valorEmDolar);

      var elementoValorConvertido = document.getElementById("valorConvertido");
      var valorConvertido = "O Valor em Dólar é U$ " + valorEmDolar.toFixed(2);
      elementoValorConvertido.innerHTML = valorConvertido;
      document.getElementById("valor").value = "";
     }
}

function ConverterEuro(){
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  if(valor == "") {
    alert("Informe o valor a ser convertido")
    }else{
      var valorEmEuroNumerico = parseFloat(valor);

      var valorEmEuro = valorEmEuroNumerico * 5.23;

      console.log(valorEmEuro);

      var elementoValorConvertido = document.getElementById("valorConvertido");
      var valorConvertido = "O Valor em Euro é EUR " + valorEmEuro.toFixed(2);
      elementoValorConvertido.innerHTML = valorConvertido;
      document.getElementById("valor").value = "";
    }
}

function ConverterReais() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  if(valor == "") {
    alert("Informe o valor a ser convertido")
    }else{
      var valorEmDolarNumerico = parseFloat(valor);

      var valorEmReal = valorEmDolarNumerico * 5.25;

      console.log(valorEmReal);

      var elementoValorConvertido = document.getElementById("valorConvertido");
      var valorConvertido = "O Valor em Real é R$ " + valorEmReal.toFixed(2);
      elementoValorConvertido.innerHTML = valorConvertido;
      document.getElementById("valor").value = "";
    }
}

function ConverterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  if(valor == "") {
    alert("Informe o valor a ser convertido")
    }else{
      var valorEmRealNumerico = parseFloat(valor);

      var valorEmBitcoin = valorEmRealNumerico * 101.1;

      console.log(valorEmBitcoin);

      var elementoValorConvertido = document.getElementById("valorConvertido");
      var valorConvertido =
      "O Valor em BitCoin é BTC " + valorEmBitcoin.toFixed(2);
      elementoValorConvertido.innerHTML = valorConvertido;
      document.getElementById("valor").value = "";
    }
}

