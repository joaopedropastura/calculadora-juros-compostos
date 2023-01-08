
function getVal() {
    const initValue = document.getElementById("valorInit").value
    const monthValue = document.getElementById("valorInter").value
    const taxValue = document.getElementById("tax").value
    const month = document.getElementById("month").value
    calculaMontante(initValue, monthValue, month, taxValue)
}

function calculaMontante(init, monthValue, month, tax) {
    console.log(init, monthValue, month, tax)
    let montanteFinal = init
    tax = tax/100
    montanteFinal += monthValue *Math.pow((1+tax), )

    console.log(montanteFinal)
}


