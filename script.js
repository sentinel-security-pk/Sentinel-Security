// Sentinel Security JS

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation on scroll
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{
    threshold:0.2
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.8s ease";
    observer.observe(card);
});

// ===== EmailJS Contact Form =====

emailjs.init({
    publicKey: "j0zPQIImF3ifisgBJ",
});

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
const btn=document.getElementById("submit-btn");

btn.textContent="Sending...";
        emailjs.sendForm(
            "service_gi5ul1r",
            "template_t8zrnhj",
            this
        )
.then(() => {

    const status=document.getElementById("form-status");
    const btn=document.getElementById("submit-btn");

    status.className="success";
    status.textContent="✅ Message sent successfully.";

    btn.textContent="Send Message";

    form.reset();

})

.catch((error)=>{

    const status=document.getElementById("form-status");
    const btn=document.getElementById("submit-btn");

    status.className="error";
    status.textContent="❌ Failed to send message.";

    btn.textContent="Send Message";

    console.error(error);

});
    });

}
// Active Navigation on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
