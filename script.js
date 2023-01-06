
function getVal() {
    const initValue = parseInt($("#valorInit").val())
    const monthValue = parseInt($("#valorInter").val())
    const taxValue =  parseInt($("#tax").val())
    const month = parseInt($("#month").val())
    const opt_taxa = $("#opt-taxa").val()
    calculaMontante(initValue, monthValue, month, taxValue, opt_taxa)
}

function calculaMontante(init, monthValue, month, tax, opt_taxa) {
    
    console.log(opt_taxa)
    var opt_val = opt_taxa == "Anual" ? ((Math.pow((1+(tax/100)),(1/12)))-1) : tax
    console.log("opt_taxa =" + opt_taxa)
    tax = opt_val;

    console.log("taxa =" + tax)
    let montanteFinal = init * (Math.pow(1+tax, month)) + (monthValue *(Math.pow(1+tax, month) - 1)/ tax)
    let valorInvestido = init + (monthValue*month)
    let taxAcumulado = montanteFinal - valorInvestido
    console.log(montanteFinal)
    console.log(valorInvestido)
    console.log(taxAcumulado)
}


