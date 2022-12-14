
function getVal() {
    const initValue = document.getElementById("valorInit").value
    const monthValue = document.getElementById("valorInter").value
    const taxValue = document.getElementById("tax").value
    const month = document.getElementById("month").value
    calculaMontante(initValue, monthValue, month, taxValue)
}

function calculaMontante(init, monthValue, month, tax) {
    console.log(init, monthValue, month, tax)
    let montante = init
    tax = tax/100
    montanteFinal += montante *Math.pow((1+tax), month)
    console.log(montanteFinal)
}


