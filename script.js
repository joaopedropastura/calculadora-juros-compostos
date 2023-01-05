
function getVal() {
    const initValue = parseInt($("#valorInit").val())
    const monthValue = parseInt($("#valorInter").val())
    const taxValue =  parseInt($("#tax").val())
    const month = parseInt($("#month").val())
    calculaMontante(initValue, monthValue, month, taxValue)
}

function calculaMontante(init, monthValue, month, tax) {
    console.log(init, monthValue, month, tax)

    tax = ((Math.pow((1+(tax/100)),(1/12)))-1)*100
    tax = tax/100
    let fv = init * (Math.pow(1+tax, month)) + (monthValue *(Math.pow(1+tax, month) - 1)/ tax)

    console.log(fv)
}


