// Change text dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("text").textContent = "You just changed the text!";
});

// Modify CSS styles dynamically
document.getElementById("title").style.color = "blue";

// Add or remove an element when a button is clicked
document.getElementById("toggleElementBtn").addEventListener("click", function() {
    let element = document.getElementById("elementToToggle");
    element.style.display = element.style.display === "none" ? "block" : "none";
});