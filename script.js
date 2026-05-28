document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded Successfully");

    // ===================== PARTICLE BACKGROUND =====================
    const canvas = document.getElementById("networkCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const particleCount = window.innerWidth < 600 ? 50 : 90;
    let mouse = { x: null, y: null };

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 2.5 + 1;
            this.speedX = (Math.random() - 0.5) * 1.5;
            this.speedY = (Math.random() - 0.5) * 1.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

            // Attract particles toward mouse — they cluster and connect near cursor
            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 160) {
                    this.x += dx * 0.025;
                    this.y += dy * 0.025;
                }
            }
        }

        draw() {
            ctx.fillStyle = "rgba(255, 102, 0, 0.85)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createParticles() {
        particlesArray = [];
        for (let i = 0; i < particleCount; i++) {
            particlesArray.push(new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            ));
        }
    }

    function connectParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = i + 1; j < particlesArray.length; j++) {
                let dx = particlesArray[i].x - particlesArray[j].x;
                let dy = particlesArray[i].y - particlesArray[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 140) {
                    let alpha = 1 - distance / 140;
                    ctx.strokeStyle = `rgba(255, 102, 0, ${alpha * 0.5})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(p => p.update());
        particlesArray.forEach(p => p.draw());
        connectParticles();
        requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createParticles();
    });

    createParticles();
    animate();

    // ===================== PROFILE PHOTO LIGHTBOX =====================
    const profileImg   = document.getElementById("profileImg");
    const lightbox     = document.getElementById("photoLightbox");
    const lightboxClose = document.getElementById("lightboxClose");

    profileImg.addEventListener("click", () => {
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
    });

    function closeLightbox() {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
    }

    lightboxClose.addEventListener("click", closeLightbox);

    // Click backdrop to close
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) closeLightbox();
    });

    // Escape key to close
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeLightbox();
    });

    // ===================== TYPING ANIMATION =====================
    const typedText = document.getElementById("typed-text");
    const titles = [
        "VibeCode Developer",
        "UI/UX Designer",
        "Graphic Designer",
        "Cybersecurity Enthusiast"
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
        const current = titles[titleIndex];

        if (!isDeleting) {
            typedText.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                isDeleting = true;
                setTimeout(typeLoop, 2000);
                return;
            }
        } else {
            typedText.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                setTimeout(typeLoop, 300);
                return;
            }
        }

        setTimeout(typeLoop, isDeleting ? 55 : 110);
    }

    typeLoop();

    // Progress bars removed — no percentages shown

    // ===================== SCROLL REVEAL =====================
    const revealElements = document.querySelectorAll(".reveal");

    function handleReveal() {
        revealElements.forEach((el, i) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 30) {
                // Small stagger per card (20ms) so they cascade quickly
                const delay = (i % 6) * 60;
                setTimeout(() => el.classList.add("visible"), delay);
            }
        });
    }

    // ===================== ACTIVE NAV ON SCROLL =====================
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveNav() {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    }

    // ===================== HEADER SCROLL STYLE =====================
    const header = document.querySelector("header");

    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    // ===================== SCROLL TO TOP BUTTON =====================
    const scrollTopBtn = document.getElementById("scrollTop");

    function handleScrollTop() {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.classList.remove("visible");
        }
    }

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ===================== COMBINED SCROLL HANDLER =====================
    window.addEventListener("scroll", () => {
        handleReveal();
        updateActiveNav();
        handleHeaderScroll();
        handleScrollTop();
    });

    // Initial calls
    handleReveal();
    updateActiveNav();

    // ===================== SMOOTH SCROLL NAV =====================
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) return;
            target.scrollIntoView({ behavior: "smooth" });
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });

            // Close mobile nav if open
            const nav = document.querySelector("nav");
            nav.classList.remove("open");
        });
    });

    // ===================== HAMBURGER MENU =====================
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    hamburger.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
            nav.classList.toggle("open");
        }
    });

    // ===================== CONTACT FORM — Formspree (direct, no redirect) =====================
    const contactForm = document.getElementById("contactForm");
    const formStatus  = document.getElementById("formStatus");

    if (contactForm) {
        contactForm.addEventListener("submit", async e => {
            e.preventDefault();

            const name    = contactForm.querySelector("#fname").value.trim();
            const email   = contactForm.querySelector("#femail").value.trim();
            const message = contactForm.querySelector("#fmessage").value.trim();

            if (!name || !email || !message) {
                formStatus.textContent = "Please fill in all fields.";
                formStatus.className = "form-status error";
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.textContent = "Please enter a valid email address.";
                formStatus.className = "form-status error";
                return;
            }

            const btn = contactForm.querySelector(".form-btn");
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            try {
                const res = await fetch("https://formspree.io/f/mpqnonlv", {
                    method: "POST",
                    headers: { "Accept": "application/json" },
                    body: new FormData(contactForm)
                });

                if (res.ok) {
                    formStatus.textContent = "Message sent! I'll get back to you soon.";
                    formStatus.className = "form-status success";
                    contactForm.reset();
                    setTimeout(() => {
                        formStatus.textContent = "";
                        formStatus.className = "form-status";
                    }, 6000);
                } else {
                    throw new Error();
                }
            } catch {
                formStatus.textContent = "Something went wrong. Please try again.";
                formStatus.className = "form-status error";
            } finally {
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            }
        });
    }
});
