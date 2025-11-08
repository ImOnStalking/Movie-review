var button = document.getElementById("Lightmode");
var body = document.body;
button.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        button.innerHTML = '<i class="bi bi-moon-fill"></i>'; // Change icon to moon
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        button.innerHTML = '<i class="bi bi-brightness-high-fill"></i>'; // Change icon to sun
    }
});


