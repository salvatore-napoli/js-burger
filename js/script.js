var burgerName = document.getElementsByName('burger-name')[0];
var ingredients = document.getElementsByName('ingredient');
var checkedIngredients = [];

document.getElementById('form-submit').addEventListener('click', function () {
  if (!burgerName.value) {
  alert('Devi dare un nome al tuo burger');
  }

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
  }
}
)
