document.addEventListener("DOMContentLoaded", function fillCurr() {
	var dropBox = document.getElementById("capt_currency");
	var currList = ["BTC", "AUD", "BRL", "CAD", "CHF", "CNY", "EUR", "GBP", "HKD", "IDR", "ILS", "MXN", "NOK", "NZD", "PLN", "RON", "RUB", "SEK", "SGD", "TRY", "USD", "ZAR"];

	for(var i = 0; i < currList.length; i++) {
		var opt = currList[i];
		var ele = document.createElement("option");
		ele.textContent = opt;
		ele.value = opt;
		dropBox.appendChild(ele);
	}
	capt_ticker();
})

function capt_ticker(){
	var currValue = document.getElementById("capt_currency")
	var currSymbol = currValue.options[currValue.selectedIndex].value;
	
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var data = JSON.parse(httpRequest.responseText);
            document.getElementById("capt_ticker").innerHTML = data[currSymbol];
        }
    };
    
	httpRequest.open('GET', 'https://api.captcoin.com/ticker/' + currSymbol);
    httpRequest.send();
}
