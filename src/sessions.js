function updateCartBadge() {
  const cart = JSON.parse(sessionStorage.getItem("cart"));
  let totalCount = 0;

  for (const key in cart) {
    if (cart.hasOwnProperty(key)) {
      totalCount += cart[key].count;
    }
  }

  const badge = document.getElementById("badge");
  if (totalCount == 0){
    badge.style.visibility = "hidden";
  } else  {
    badge.style.visibility = "visible";
    badge.textContent = totalCount.toString();
  }
}

function addToCart(name, price) {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || {};

  if (cart[name]) {
    cart[name].count++;
  } else {
    cart[name] = { price: price, count: 1 };
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
}

function onClick(ElementName) {
  const element = document.getElementById(ElementName);
  addToCart(element.getAttribute("name"), element.getAttribute("price"));
}

document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("cart")) {
    sessionStorage.setItem("cart", JSON.stringify({}));
  }

  document.getElementById("laptopwk").addEventListener("click", function(){onClick("Laptop", 1)});
  document.getElementById("handywk").addEventListener("click", function(){onClick("Handy", 2)});
  document.getElementById("pcwk").addEventListener("click", function(){onClick("PC", 3)});
  //TODO: Add Drag and Drop functionality
  updateCartBadge();
});