const themeButton = document.getElementById("themeButton");
const savedTheme = localStorage.getItem("website-theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeIcon() {
    if (!themeButton) return;
    const icon = themeButton.querySelector("i");
    if (!icon) return;
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}
updateThemeIcon();

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const currentTheme =
            document.body.classList.contains("dark-mode")
                ? "dark"
                : "light";
        localStorage.setItem("website-theme", currentTheme);
        updateThemeIcon();
    });
}
