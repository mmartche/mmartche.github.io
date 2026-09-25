function toggleLanguages() {
    document
        .getElementById("languageOptions")
        .classList.toggle("show");
}

document.addEventListener("click", function (event) {
    const selector = document.querySelector(".language-selector");

    if (!selector.contains(event.target)) {
        document
            .getElementById("languageOptions")
            .classList.remove("show");
    }
});