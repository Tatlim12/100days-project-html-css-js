document.addEventListener("DOMContentLoaded", () => {

  let quantity = 0;
  const price = 129.99;

  const count = document.getElementById("quantity");
  const cart = document.getElementById("cart");
  const badge = document.getElementById("badge");

  document.getElementById("increaseBtn").onclick = increase;
  document.getElementById("decreaseBtn").onclick = decrease;
  document.getElementById("addToCartBtn").onclick = addToCart;

  document.getElementById("cartBtn").onclick = () => {
    cart.classList.toggle("show");
  };

  loadCart();

  function increase() {
    quantity++;
    count.innerText = quantity;
  }

  function decrease() {
    if (quantity > 1) {
      quantity--;
      count.innerText = quantity;
    }
  }

  function addToCart() {
    const total = (price * quantity).toFixed(2);

    cart.innerHTML = `
      <h4>Cart</h4>
      <p>
        ${quantity} × Fall Limited Sneakers<br>
        Total: <strong>$${total}</strong>
      </p>
      <button onclick="removeItem()">🗑 Remove</button>
    `;

    badge.innerText = quantity;
    saveCart();
    cart.classList.add("show");
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify({ quantity }));
  }

  function loadCart() {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data && data.quantity) {
      quantity = data.quantity;
      count.innerText = quantity;
      badge.innerText = quantity;
    }
  }

  window.removeItem = function () {
    localStorage.removeItem("cart");
    badge.innerText = 0;

    cart.innerHTML = `
      <h4>Cart</h4>
      <p>Your cart is empty.</p>
    `;
  };

});

function changeImg(img) {
  document.getElementById("mainImage").src = img.src.replace("-thumbnail", "");
}
