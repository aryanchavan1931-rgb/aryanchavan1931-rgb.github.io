// Auto year script
const year = new Date().getFullYear();
document.getElementById("year").innerText = "Current Year: " + year;
document.getElementById("yearFooter").innerText = year;

// Smooth scroll
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
