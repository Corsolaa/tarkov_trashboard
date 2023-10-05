const accordions = document.querySelectorAll(".section");

accordions.forEach((item) => {
    item.addEventListener(("click"), () => {
        item.classList.toggle("active");
        let panel = item.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = panel.scrollHeight + "px";
            setTimeout(() => {
                panel.style.maxHeight = null;
            }, 50);
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            setTimeout(() => {
                panel.style.maxHeight = "fit-content";
            }, 300);
        }
    })
});