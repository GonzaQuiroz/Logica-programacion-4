function calcularFibonacci() {
    var numeroInput = document.getElementById("numeroInput");
    var resultadoDiv = document.getElementById("resultado");

    var n = parseInt(numeroInput.value);

    if (isNaN(n) || n < 0) {
      resultadoDiv.textContent = "lo ingresado no es valido vuelva a intentarlo ";
      return;
    }

    var fibonacci = [0, 1];
    for (var i = 2; i < n; i++) {
      var next = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(next);
    }

    resultadoDiv.textContent = "La serie de Fibonacci con " + n + " términos es: " + fibonacci.join(", ");
    console.log(fibonacci);
  }