import ammoDict from "../json/ammo_cal.json" assert {type: 'json'};

export function createEle(ammoList) {
    const ammo_types_ele = document.querySelector(".ammo-types");
    ammoList.forEach((ammo_type) => {
        const top_layer = create_item_section(ammo_type[0].gridImageLink,
            get_caliber_name(ammo_type[0].caliber));
        const caliber_section = create_caliber_section(ammo_type);
        ammo_types_ele.append(top_layer, caliber_section);
    });
}

function get_caliber_name(calId) {
    // Check if valid Caliber ID.
    if (calId in ammoDict) {
        return ammoDict[calId];
    }
    return false;
}

function create_caliber_section(ammo_array) {
    const top_panel = create_div_class("panel");
    const middle_layer = create_item_section(ammo_array[0].gridImageLink, ammo_array[0].name);
    const middle_panel = create_div_class("panel");

    middle_panel.append(create_ammo_info_element(ammo_array[0]));
    top_panel.append(middle_layer, middle_panel);

    return top_panel;
}


function create_item_section(grid_image, title) {
    const section = document.createElement("div");
    const head_img = document.createElement("img");
    const head_title = document.createElement("h3");
    const arrow = document.createElement("i");

    section.classList.add("item", "section");
    head_img.src = grid_image;
    head_img.alt = "section header image";
    head_title.innerText = title;
    arrow.classList.add("fa-solid", "fa-chevron-up");

    section.append(head_img, head_title, arrow);
    return section
}

function create_ammo_info_element(ammo) {
    const ammo_info = create_div_class("ammo_info");
    const column = create_div_class("column");
    const peaces = [["damage", ammo.damage], ["pen", ammo.penetration], ["ar damage", ammo.armorDamage],
        ["frag%", ammo.fragChance], ["recoil", ammo.recoil], ["accuracy", ammo.accuracy]];

    peaces.forEach((bit) => {
        const peace = create_peace(bit[0], bit[1])
        column.appendChild(peace);
    });

    ammo_info.appendChild(column);

    return ammo_info;
}

function create_peace(type, value) {
    const peace = create_div_class("peace");
    peace.innerText = type + "<br>" + value
    return peace;
}

function create_div_class(class_name) {
    const div = document.createElement("div");
    div.classList.add(class_name)
    return div;
}
