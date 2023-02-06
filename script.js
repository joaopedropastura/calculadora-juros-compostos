const urlCoins = "http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"


function getVal() {
    const initValue = parseInt($("#valorInit").val())
    const monthValue = parseInt($("#valorInter").val())
    const taxValue =  parseInt($("#tax").val())
    const month = parseInt($("#month").val())
    const opt_taxa = $("#opt-taxa").val()

    calculaMontante(initValue, monthValue, month, taxValue, opt_taxa)
}

function calculaMontante(init, monthValue, month, tax, opt_taxa) {

    monthValue = isNaN(monthValue) ? 0 : monthValue
    init = isNaN(init) ? 0 : init

    console.log(monthValue)
    console.log(init)

    const $result = $("#resultado")
    const $juros = $("#rendimento")
    const $investido = $("#investido")
    var opt_val = opt_taxa == "Anual" ? ((Math.pow((1+(tax/100)),(1/12)))-1) : tax/100
    
    tax = opt_val;
    // console.log("opt_taxa =" + opt_taxa)
    // console.log("taxa =" + tax)
    let montanteFinal = init * (Math.pow(1+tax, month)) + (monthValue *(Math.pow(1+tax, month) - 1)/ tax)
    let valorInvestido = init + (monthValue*month)
    let taxAcumulado = montanteFinal - valorInvestido
    console.log(valorInvestido)
    console.log(taxAcumulado)
    console.log(montanteFinal)
    $result.empty()
    $juros.empty()
    $investido.empty()

    $investido.text("Valor Investido: R$" + valorInvestido.toFixed(2))
    $juros.text("Juros acumulados: R$" + taxAcumulado.toFixed(2))
    $result.text("Valor final: R$" + montanteFinal.toFixed(2))

}

//taxa de juros selic
fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json").then(resp=>{
    console.log(resp.json())
})

//dolar
async function getDollarValue(){
    var result = await fetch(urlCoins)
    var dolarData = await result.json()

    // console.log(dolarData)
    // console.log(dolarData.USDBRL.bid)
    // console.log(dolarData.EURBRL.bid)
    // console.log(dolarData.BTCBRL.bid)
    
    // var bids = dolarData.map(d => d.bid)
    // console.log(bids)

    // dolarData.map(p.

    // dolarData.map((dolToDay) => {
    //     var div = $("#coins")
    //     var content = $("<span></span>")

    //     console.log(dolToDay.ask)

    // })
}

getDollarValue()