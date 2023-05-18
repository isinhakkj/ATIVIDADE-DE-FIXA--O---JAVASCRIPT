n1 = Number(window.prompt('Informe o primeiro valor: '))
n2 = Number(window.prompt('Informe o segundo valor: '))
operacao = window.prompt('Escolha qual operação desejar: soma, multiplicação, divisão')

switch (operacao) {
    case 'soma':
        result = n1 + n2 ; 
        break;
    case 'multiplicação':     
        result = n1 * n2 ; 
        break;
    case 'divisão': 
        result = n1 / n2 ;
        break;
}

alert(`A ${operacao} dos dois valores é: ${result}`)