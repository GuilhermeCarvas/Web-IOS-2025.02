let idade = 17
let temDInheiro = true
let temCadUnico = false

// > maior que
// >= maior ou igual
// < menor que
// <= menor ou igual a 

if (idade >= 18) {
    if (temDInheiro == true) {
        console.log("Bora pagar o quebra!!!");
    }
    else {
        if (temCadUnico == true) {
            console.log("CNH no 0800");
        }
        else {
            console.log("Você não tem dinheiro e não tem cadastro!");
        }
    }
}
else {
    console.log("SE LIGA VOCÊ É MUITO NOVO PARA ISSO!!! 🤬");
}