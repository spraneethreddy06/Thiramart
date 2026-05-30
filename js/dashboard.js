const user = JSON.parse(localStorage.getItem("loggedInUser"));

const welcome = document.getElementById("welcome");
const adminSection = document.getElementById("admin-section");
const userSection = document.getElementById("user-section");
const ordersDiv = document.getElementById("orders");

if (!user) {
  alert("Please login first");
  window.location.href = "login.html";
}

welcome.innerText = `Welcome, ${user.name} (${user.role})`;

// ROLE BASED UI
if (user.role === "admin") {
  userSection.style.display = "none";
} else {
  adminSection.style.display = "none";
}

// Fake orders
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function loadOrders() {
  ordersDiv.innerHTML = "";

  if (orders.length === 0) {
    ordersDiv.innerHTML = "<p>No orders yet</p>";
    return;
  }

  orders.forEach((o, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>Order ${i + 1}: ₹${o.total}</p>
    `;
    ordersDiv.appendChild(div);
  });
}

loadOrders();

// LOGOUT
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../index.html";
}