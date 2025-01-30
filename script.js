document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const html = document.documentElement;

    const savedTheme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", savedTheme);

    toggleBtn.addEventListener("click", () => {
        const isDark = html.getAttribute("data-theme") === "dark";
        const newTheme = isDark ? "light" : "dark";
        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });

    if (document.getElementById("marcada")) {
        localStorage.setItem("ultimaPagina", window.location.href);
    }

    const marcador = document.getElementById("marcador");
    if (marcador) {
        marcador.addEventListener("click", function () {
            const ultimaPagina = localStorage.getItem("ultimaPagina") || "/genesis";
            window.location.href = ultimaPagina;
        });
    }
});