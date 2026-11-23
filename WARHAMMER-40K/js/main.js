
// =====================================
// MENÚ DE NAVEGACIÓN
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Cerrar menú después de seleccionar una sección

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
        menuToggle.textContent = "☰";

    });

});


// =====================================
// AÑO AUTOMÁTICO DEL FOOTER
// =====================================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();
