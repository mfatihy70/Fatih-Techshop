function updateCartBadge() {
  const cart = JSON.parse(sessionStorage.getItem("cart"));
  let totalCount = 0;

  for (const key in cart) {
    if (cart.hasOwnProperty(key)) {
      totalCount += cart[key].count;
    }
  }

  const badge = document.getElementById("badge");
  badge.textContent = totalCount.toString();
}

function addToCart(category, name, price, databaseID) {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || {};

  if (cart[name]) {
    cart[name].count++;
  } else {
    cart[name] = { price: price, count: 1 };
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
}

function onClick(ElementName, databaseID) {
  const element = document.getElementById(ElementName);
  addToCart(element.getAttribute("type"), element.getAttribute("name"), element.getAttribute("price"), databaseID);
}



document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("cart")) {
    sessionStorage.setItem("cart", JSON.stringify({}));
  }

  document.getElementById("laptopwk").addEventListener("click", function(){onClick("Laptop", 1)});
  document.getElementById("handywk").addEventListener("click", function(){onClick("Handy", 2)});
  document.getElementById("pcwk").addEventListener("click", function(){onClick("PC", 3)});
  updateCartBadge();
});


/*function updateCartBadge() {
  const cart = JSON.parse(sessionStorage.getItem("cart"));
  let totalCount = 0;

  for (const key in cart) {
      if (cart.hasOwnProperty(key)) {
          totalCount += cart[key].count;
      }
  }

  const badge = document.getElementById("badge");
  badge.textContent = totalCount.toString();
}

function addToCart(category, name, price, databaseID) {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || {};

  if (cart[name]) {
      cart[name].count++;
  } else {
      cart[name] = { price: price, count: 1 };
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
}

function handleProductInteraction(category, name, price, databaseID) {
  addToCart(category, name, price, databaseID);
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.parentElement.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data).querySelector(".product-image img");
  var cart = document.getElementById("cartIcon");
  var clonedElement = draggedElement.cloneNode(true);
  cart.appendChild(clonedElement);
  handleProductInteraction(data, "", 0, 0);
}

document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("cart")) {
      sessionStorage.setItem("cart", JSON.stringify({}));
  }

  // Add event listeners for product images
  document.querySelectorAll(".product img").forEach(function (img) {
      img.addEventListener("click", function () {
          var parentElement = this.parentElement;
          handleProductInteraction(
              parentElement.getAttribute("type"),
              parentElement.getAttribute("name"),
              parentElement.getAttribute("price"),
              parentElement.getAttribute("databaseID")
          );
      });
  });

  // Add event listener for the cart icon
  document.getElementById("cartIcon").addEventListener("drop", function (event) {
      drop(event);
  });

  updateCartBadge();
});
*/