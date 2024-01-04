const search_bar = document.querySelector(".search_bar_con input");
const clear_but = document.querySelector(".clear_but");

search_bar.addEventListener("input", () => {
    search_result(search_bar.value);
});

clear_but.addEventListener("click", () => {
    search_bar.value = "";
    search_result(search_bar.value);
});

function search_result(query) {
    const top_layers = document.querySelectorAll(".top-layer");
    top_layers.forEach((top_bit) => {
        const title = top_bit.querySelector("h3");
        const is_visible = title.innerText.includes(query);

        top_bit.classList.toggle("hide", !is_visible);
    })
}

search_result("");