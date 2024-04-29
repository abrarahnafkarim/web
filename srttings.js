document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simplified login verification
    if (username === "admin" && password === "password") {
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
});
