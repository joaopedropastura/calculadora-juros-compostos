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
    const $result = $("#resultado")
    const $juros = $("#rendimento")
    const $investido = $("#investido")
    const $ganhos = $("#ganhos")
    const $textResult = $(".result-text")

    init = isNaN(init) ? 0 : init
    monthValue = isNaN(monthValue) ? 0 : monthValue
    
    var opt_val = opt_taxa == "anual" ? ((Math.pow((1 + (tax / 100)), (1 / 12))) -1) : (tax / 100)
    const timeTaxa = $("#opt-taxa option:selected").text()
    console.log(timeTaxa)
    tax = opt_val;
 
    let montanteFinal = init * (Math.pow(1 + tax, month)) + (monthValue *(Math.pow(1 + tax, month) - 1)/ tax)
    let valorInvestido = init + (monthValue * month)
    let taxAcumulado = montanteFinal - valorInvestido
    // console.log(valorInvestido)
    // console.log(taxAcumulado)
    // console.log(montanteFinal)
    $textResult.css({"display" : "flex"})
    $investido.text(valorInvestido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    $juros.text(taxAcumulado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    $ganhos.text(((taxAcumulado/valorInvestido)*100).toFixed(2) + "%") 
    $result.text( montanteFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

}

//taxa de juros selic
fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json").then(resp=>{
    console.log(resp.json())
})

//dolar
async function getDollarValue(){
    var result = await fetch(urlCoins)
    var dolarData = await result.json()
    const $dolar = $("#usd")
    const $euro = $("#eur")
    const $bitCoin = $("#btc")
    let dolValue = parseFloat(dolarData.USDBRL.bid)
    let eurValue = parseFloat(dolarData.EURBRL.bid)
    let btcValue = parseFloat(dolarData.BTCBRL.bid)


    $dolar.text(dolValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    $euro.text(eurValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    $bitCoin.text(btcValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))


    console.log(dolarData)
    console.log(dolarData.USDBRL.bid)
    console.log(dolarData.EURBRL.bid)
    console.log(dolarData.BTCBRL.bid)
    
    // var bids = dolarData.map(d => d.bid)
    // console.log(bids)

    // dolarData.map((dolToDay) => {
    //     var div = $("#coins")
    //     var content = $("<span></span>")

    //     console.log(dolToDay.ask)

    // })
}

getDollarValue()