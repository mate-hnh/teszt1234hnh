// Mobil menü
const menuToggle = document.getElementById("menu-toggle");
const navMobile = document.getElementById("nav-mobile");

if (menuToggle && navMobile) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    navMobile.classList.toggle("open");
  });

  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("open");
      navMobile.classList.remove("open");
    });
  });
}

// Scroll to top gomb
const scrollTopBtn = document.getElementById("scroll-top");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Hírlevél form – egyelőre csak demó
const newsletterForm = document.getElementById("newsletter-form");
const newsletterMessage = document.getElementById("newsletter-message");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.email.value.trim();

    if (!email || !newsletterMessage) return;

    newsletterMessage.textContent =
      "Köszi a feliratkozást! A valódi hírlevél rendszert később kötjük majd össze az oldallal.";
    newsletterForm.reset();
  });
}

// Kapcsolat form – szintén csak demó
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!contactMessage) return;

    contactMessage.textContent =
      "Az üzenetküldés itt még demó. Később backendhez vagy e-mail szolgáltatóhoz köthető.";
    contactForm.reset();
  });
}
