function calcular(){
    var numero = parseInt(document.querySelector('input#txt1').value);
    var i;
    i = parseInt(i);
    var op;
    op = parseInt(op);

    if (isNaN(numero) || numero === '') {
        alert("Por favor, digite um número.");
        return;
    }

    var resultadoDiv = document.querySelector('#resultado');
    resultadoDiv.innerHTML = ''; 

    for (var i = 1; i <= 10; i++) {
        var op = numero * i;
        resultadoDiv.innerHTML += `${numero} x ${i} = ${op}<br>`;
    }

}