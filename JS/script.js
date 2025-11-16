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



//login modal functionality
var loginButton = document.querySelector("#loginModal button[type='submit']");
if (loginButton) {
    loginButton.addEventListener("click", function(event) {
        event.preventDefault();
        var emailInput = document.querySelector("#email");
        if (emailInput.value) {
            alert("Login successful! Welcome back " + emailInput.value);
            window.location.href = "index.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
}

// Alert on login show
var loginModal = document.getElementById('loginModal');
if (loginModal) {
    loginModal.addEventListener('show.bs.modal', function () {
        alert("Login to access personalized features!");
    });
}


