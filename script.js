const convertButton = document.querySelector(".convert-button") //selecionando o botão
const switchSelector = document.querySelector("#selecterValue") //selecionando o seletor

//criando a função de converter valores

function convertValues() {
    const imageResult = document.querySelector(".imgResultAfter")
    const valueInput = document.querySelector(".valueInput").value /*pegando valor do input */
    const dolarToday = 5.35 /*valor do dólar do dia*/
    const euroToday = 5.74


    const valueResultBefore = document.querySelector(".valueResultBefore")
    const valueResultAfter = document.querySelector(".valueResultAfter")

    if (switchSelector.value === "dolar") {
        imageResult.src = "assets/Dolar.png"

        const currencyText = document.querySelector(".currencyText")
        currencyText.innerHTML = "US $"

        valueResultAfter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / dolarToday /*dividindo o valor do real pelo dólar do dia*/)
    }

    if (switchSelector.value === "euro") {
        imageResult.src = "assets/Euro.png"

        const currencyText = document.querySelector(".currencyText")
        currencyText.innerHTML = "EUR €"

        valueResultAfter.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput / euroToday)
    }


    valueResultBefore.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valueInput)

}





function switchCurrency () {
    convertValues ()

    
}


convertButton.addEventListener("click", convertValues);

switchSelector.addEventListener("change", switchCurrency);




