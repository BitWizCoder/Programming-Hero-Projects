let totaPrice = 0;

function handleClick(target) {
  // Title
  const selectedItems = document.getElementById("selected-items");
  const itemName = target.parentNode.childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItems.appendChild(li);

  let total = document.getElementById("total");
  let totalInt = parseInt(total.textContent);
  let price = document.getElementById("price");
  let priceInt = parseInt(price.textContent);

  totaPrice += priceInt;

  total.textContent = totaPrice;

  const itemPrice = target.parentNode.childNodes[7].innerText;
}
