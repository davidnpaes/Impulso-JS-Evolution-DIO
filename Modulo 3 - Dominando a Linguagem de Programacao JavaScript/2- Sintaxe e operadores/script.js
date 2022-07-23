function numbers(num1, num2){
    const compare = num1 == num2;
    var compareOutput
    (compare) ? compareOutput = 'os números' + num1 + ' e ' + num2 + 'são iguais. ' : 'os números' + num1 + ' e ' + num2 + 'não são iguais. '

    const sum = num1 + num2;
    var sumOut = 'Sua soma é ' + sum + ', '

    if(sum < 10){
        var compareToTen = 'que é menor que 10 e '
    } else if (sum > 10){
        compareToTen = 'que é maior que 10 e '
    }else {
        compareToTen = 'que é igual a 10 e '
    }

    if(sum < 20){
        var compareToTwenty = 'e menor que 20.'
    } else if (sum > 10){
        compareToTwenty = 'e maior que 20.'
    }else {
        compareToTwenty = 'e igual a 20.'
    }

    console.log(compareOutput + sumOut + compareToTen + compareToTwenty)
}
console.log("pirca")

// var num1 = Number(prompt("Digite o primeiro numero"));
// var num2 = Number(prompt("Digite o segundo numero"));

// numbers(num1, num2)
