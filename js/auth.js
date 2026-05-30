function register() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!email || !password || !name) {
    alert("Please fill all fields");
    return;
  }

  const exists = users.find(u => u.email === email);

  if (exists) {
    alert("User already exists!");
    return;
  }

  users.push({ name, email, password, role });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");

  window.location.href = "login.html";
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));

  alert("Login successful!");

  window.location.href = "../index.html";
}