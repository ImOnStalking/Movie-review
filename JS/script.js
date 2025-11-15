//lightmode and darkmode toggle
var button = document.getElementById("Lightmode");
var body = document.body;
button.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        button.innerHTML = '<i class="bi bi-moon-fill"></i>';
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        button.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    }
});

//welcome alert
window.addEventListener("load", function() {

    alert("Welcome to Movie Sphere! Enjoy exploring movies.");
});

//login modal functionality
var loginButton = document.querySelector("#loginModal button[type='submit']");
if (loginButton) {
    loginButton.addEventListener("click", function(event) {
        event.preventDefault();
        var emailInput = document.querySelector("#email");
        var passwordInput = document.querySelector("#password");
        if (emailInput.value && passwordInput.value) {
            alert("Login successful! Welcome back "+(emailInput.value));
            window.location.href = "index.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
}


