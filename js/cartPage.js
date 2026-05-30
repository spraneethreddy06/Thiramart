const cartContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach((id, index) => {
    const product = products.find(p => p.id === id);

    if (product) {
      total += product.price;

      const div = document.createElement("div");
      div.classList.add("cart-card");

      div.innerHTML = `
        <div>
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
        </div>

        <button onclick="removeItem(${index})">Remove</button>
      `;

      cartContainer.appendChild(div);
    }
  });

  totalPriceEl.classList.add("total-box");
  totalPriceEl.innerText = "Total: ₹" + total;
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart();
}

loadCart();
function placeOrder() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  cart.forEach(id => {
    const product = products.find(p => p.id === id);
    if (product) total += product.price;
  });

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({ total });

  localStorage.setItem("orders", JSON.stringify(orders));

  localStorage.removeItem("cart");

  alert("Order placed successfully!");

  window.location.href = "dashboard.html";
}