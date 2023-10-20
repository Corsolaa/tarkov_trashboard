import ammoDict from "../json/ammo_cal.json" assert { type: 'json' };

const ammo_types = document.querySelector(".ammo-types");

function get_caliber_name(calId): string | boolean {
    // Check if valid Caliber ID.
    if (calId in ammoDict) {
        return ammoDict[calId];
    }
    return false;
}

function create_item_section(img_source, title): HTMLDivElement {
    const section = document.createElement("div");
    const head_img = document.createElement("img");
    const head_title = document.createElement("h3");
    const arrow = document.createElement("i");

    section.classList.add("item", "section");
    head_img.src = img_source;
    head_img.alt = "section header image";
    head_title.innerText = title;
    arrow.classList.add("fa-solid", "fa-chevron-up");

    return section.append(head_img, head_title, arrow);
}

function create_caliber_section(calId, ammo_array): void {
    // Create top layer
    const top_layer = create_item_section(ammo_array[0].gridImageLink, get_caliber_name(calId));
    const top_panel = document.createElement("div");
    top_panel.classList.add("panel");

    const middle_layer = create_item_section(ammo_array[0].gridImageLink, get_caliber_name());
    //Create middle layer
}

