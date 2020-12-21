var burgerName = document.getElementsByName('burger-name')[0];
var ingredients = document.getElementsByName('ingredient');
var checkedIngredients = [];

var couponCodes = ['65849RIUFRJ', '76584UHJBGF', '09872MJCKOS'];
var totalPriceElement = document.getElementById('total-price');
var parsedPrice = parseInt(totalPriceElement.innerHTML);

document.getElementById('form-submit').addEventListener('click', function () {
  // Obbligo di scelta del nome
  if (!burgerName.value) {
    alert('Devi dare un nome al tuo burger');
  } else {

    // Obbligo di scelta degli ingredienti
    checkedIngredients = [];
    var twoChecked = false;
    for (var i = 0; i < ingredients.length; i++) {
      if (ingredients[i].checked) {
        checkedIngredients.push(ingredients[i]);
      }
      if (checkedIngredients.length >= 2) {
        twoChecked = true;
      }
    }
    if (!twoChecked) {
      alert('Devi selezionare almeno 2 ingredienti');
    } else {

      // Calcolo prezzo totale
      var totalPrice = parsedPrice;
      for (var z = 0; z < checkedIngredients.length; z++) {
        if (checkedIngredients[z].value.indexOf('.') > -1) {
          totalPrice += parseFloat(checkedIngredients[z].value);
        } else {
          totalPrice += parseInt(checkedIngredients[z].value);
        }
      }
      totalPriceElement.innerHTML = totalPrice;

      // Calcolo prezzo finale con coupon
      for (var x = 0; x < couponCodes.length; x++) {
        if (document.getElementById('coupon').value === couponCodes[x]) {
          totalPriceElement.innerHTML = (totalPrice - (totalPrice * 25 / 100)).toFixed(2);
        }
      }
    }
  }
});
