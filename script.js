//Color inverter function (dark-mode)
function invertColors() {
    document.body.classList.toggle("inverted");
}

//An event listener to figure out when buttons are pressed
document.addEventListener("DOMContentLoaded", () => {
    //dark mode
    const darkModeButton = document.getElementById("darkModeButton");
    if (darkModeButton) {
        darkModeButton.addEventListener("click", invertColors);
    }

    //toggle and untoggle list
    const toggleButton = document.getElementById("toggleButton");
    const composerList = document.getElementById("composerList");

    if (toggleButton && composerList) {
        toggleButton.addEventListener("click", () => {
            composerList.style.display =
            composerList.style.display === "none" ? "block" : "none";
        });
    }
});
