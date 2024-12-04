const users = [
    { email: "user1@example.com", password: "password123" },
    { email: "user2@example.com", password: "mypassword" }
  ];
  

  document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
   
    const user = users.find((u) => u.email === email && u.password === password);
  
    let errorMessageContainer = document.querySelector(".error-message");
    if (!errorMessageContainer) {
      errorMessageContainer = document.createElement("p");
      errorMessageContainer.className = "error-message text-danger mt-2";
      const form = document.getElementById("loginForm");
      form.appendChild(errorMessageContainer);
    }
  
    if (user) {

      const username = email.split("@")[0]; 
      localStorage.setItem("username", username);
      window.location.href = "welcome.html"; 
    } else {

      errorMessageContainer.textContent = "Incorrect email or password";
    }
  });
  
  if (window.location.pathname.includes("welcome.html")) {
    const username = localStorage.getItem("username");
    const usernameDisplay = document.getElementById("usernameDisplay");
  
    if (username) {
      usernameDisplay.textContent = username;
    } else {
      usernameDisplay.textContent = "Guest";
    }
  }
  
  document.getElementById("logoutBtn")?.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "index.html";
  });