function calcule() {
  var numero1 = document.querySelector("input#txtn1");
  var res = document.getElementById("resultado");

  if (numero1.value.length == 0) {
    alert("Digite um número!");
  } else {
    var n1 = Number(numero1.value);
    res.innerHTML = "";
    for (a = 0; a <= 10; a++) {
      let item = document.createElement("option");
      item.text = `${n1} X ${a} = ${n1 * a}`;
      item.value = `res ${a}`;
      res.appendChild(item);
    }
  }
}
