function crypto() {
  var cryptoamount = document.getElementById("cryptoamount").value;
  var cryptocurrency = document.getElementById("cryptocurrency").value;
  var converterAmount;

  switch (cryptocurrency) {
    case "BTC":
      converterAmount = cryptoamount * 398555886;
      break;
    case "BNT":
      converterAmount = cryptoamount * 6028;
      break;
    case "BCN":
      converterAmount = cryptoamount * 3;
      break;
    case "ADA":
      converterAmount = cryptoamount * 5440;
      break;
    case "DASH":
      converterAmount = cryptoamount * 624287;
      break;
    case "BAT":
      converterAmount = cryptoamount * 3252;
      break;
    case "BTS":
      converterAmount = cryptoamount * 119;
      break;
    case "BCH":
      converterAmount = cryptoamount * 1678630;
      break;
    case "BTG":
      converterAmount = cryptoamount * 183215;
      break;
    case "WAVES":
      converterAmount = cryptoamount * 38458;
      break;

    default:
      converterAmount = 0;
  }
  var result = document.getElementById("result-crypto");
  result.innerHTML = cryptoamount + " " + cryptocurrency + " = " + converterAmount + " IDR ";
}
