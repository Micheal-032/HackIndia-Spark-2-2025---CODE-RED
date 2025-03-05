// TruLink AI JS NASA Pipeline 🚀
document.addEventListener("DOMContentLoaded", () => {
    console.log("🔥 TruLink AI System Activated");

    // Navbar Scroll Effect
    window.addEventListener("scroll", () => {
        let navbar = document.querySelector(".navbar");
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Smooth Scroll Function
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Hero Text Typing Animation
    let text = ".";
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            document.querySelector(".hero-content h1").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 1000);

    // Scroll Reveal Animation
    const sections = document.querySelectorAll(".about, .features, .contact");
    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Feature Box Hover Animation Sound
    document.querySelectorAll(".feature-box").forEach(box => {
        box.addEventListener("mouseenter", () => {
            let sound = new Audio("assets/audio/hover.mp3");
            sound.play();
        });
    });

    // Contact Form Validation
    const form = document.querySelector("#contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("🚀 TruLink AI Thanks You for Contacting Us!");
    });

    // Background Parallax Effect
    window.addEventListener("scroll", () => {
        document.querySelector(".hero").style.backgroundPositionY = `${window.scrollY * 0.5}px`;
    });
});