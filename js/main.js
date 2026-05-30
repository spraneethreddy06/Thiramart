const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(data) {
  productList.innerHTML = "";

  // fake skeleton loading
  for (let i = 0; i < 4; i++) {
    const skel = document.createElement("div");
    skel.className = "skeleton";
    productList.appendChild(skel);
  }

  setTimeout(() => {
    productList.innerHTML = "";

    data.forEach((product, index) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      `;

      productList.appendChild(card);

      // scroll animation effect
      setTimeout(() => {
        card.classList.add("show");
      }, index * 120);
    });

  }, 600);
}

// FILTER FUNCTION
function filterProducts() {
  let searchValue = searchInput.value.toLowerCase();
  let categoryValue = categoryFilter.value;

  let filtered = products.filter(p => {
    let matchSearch = p.name.toLowerCase().includes(searchValue);
    let matchCategory = categoryValue === "all" || p.category === categoryValue;

    return matchSearch && matchCategory;
  });

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

displayProducts(products);
function showToast(message) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".product-card").forEach(el => {
  observer.observe(el);
});