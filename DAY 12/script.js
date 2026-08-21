let footerYear = document.querySelector(".footer-year");
if(footerYear){
    footerYear.textContent=new Date().getFullYear();
}

// THEME TOGGLE
const themeButton = document.querySelector(".theme-toggle");

if (themeButton) {

    // ALWAYS START IN LIGHT MODE
    document.body.classList.add("light-theme");
    themeButton.textContent = "🌞";


    // =========================================
    // TOGGLE THEME
    // =========================================

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {

            themeButton.textContent = "🌞";

        } else {

            themeButton.textContent = "🌙";

        }

    });

}