console.log("Digite o seu peso");
process.stdin.once('data', function (data){
let  n1 = Number(data.toString().trim());
    console.log("Digite a sua altura");
    process.stdin.once('data', function (data){
    let n2 = Number(data.toString().trim());
    imc =n1 / (n2*n2)
    console.log("IMC = ", imc)
    if(imc < 18.5){
        console.log("Abaixo do peso")
        }else if (imc > 18.6 && imc < 24.9){
        console.log("Peso ideal. Parabéns")
            }else if (imc > 25.0 && imc < 29.9){
            console.log("Levemente acima do peso")
                }else if (imc > 30.0 && imc < 34.9){
                console.log("Obesdidade grau I")
                    }else if (imc > 35.0 && imc < 39.9){
                    console.log("Obesidade grau II. Severa")
                        } else {
                            console.log("Obesidade grau III. Mórbida")
                        }
    process.exit()
})})