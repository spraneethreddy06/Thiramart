const images = [
  "assets/images/img1.jpg",
  "assets/images/img2.jpg",
  "assets/images/img3.jpg",
  "assets/images/img4.jpg",
  "assets/images/img5.jpg",
  "assets/images/img6.jpg",
  "assets/images/img7.jpg",
  "assets/images/img8.jpg",
  "assets/images/img9.jpg",
  "assets/images/img10.jpg",
  "assets/images/img11.jpg",
  "assets/images/img12.jpg",
  "assets/images/img13.jpg",
  "assets/images/img14.jpg",
  "assets/images/img15.jpg"
];

const categories = ["shoes", "watch", "electronics", "bags", "accessories"];

const productNames = [
  "Nike Air Max", "Adidas Runner", "Puma Sport Shoes", "Reebok Classic",
  "Apple Watch", "Samsung Galaxy Watch", "Noise Smart Watch",
  "Sony Headphones", "Boat Earbuds", "JBL Speaker",
  "Dell Laptop", "HP Mouse", "Logitech Keyboard",
  "Leather Bag", "Travel Backpack", "Office Bag",
  "Wallet Premium", "Belt Leather", "Sunglasses",
  "Gaming Mouse", "Gaming Keyboard", "Mechanical Keyboard"
];

const products = [];

for (let i = 1; i <= 50; i++) {
  const category = categories[i % categories.length];
  const name = productNames[i % productNames.length];
  const price = Math.floor(Math.random() * 20000) + 500;

  // 🔥 SMART IMAGE ROTATION (15 IMAGES LOOP)
  const image = images[i % images.length];

  products.push({
    id: i,
    name: `${name} ${i}`,
    price: price,
    category: category,
    image: image
  });
}