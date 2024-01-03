import ammoDict from "../json/ammo_cal_name.json" assert {type: 'json'};

export function createAmmoTypesContent(ammoList) {
    const ammoTypesEle = document.querySelector(".ammo-types");

    ammoList.forEach((ammoType) => {
        const topLayer = createItemDivSection(ammoType[0].gridImageLink,
            getCaliberName(ammoType[0].caliber));
        const caliberSection = createCaliberDivSection(ammoType);
        ammoTypesEle.append(topLayer, caliberSection);
    });
}

function getCaliberName(calId) {
    // Check if valid Caliber ID.
    if (calId in ammoDict) {
        return ammoDict[calId];
    }
    return false;
}

function createCaliberDivSection(ammoArray) {
    const top_panel = createDivWithClass("panel");
    ammoArray.forEach((ammoBit) => {
        const middleLayer = createItemDivSection(ammoBit.gridImageLink, ammoBit.name);
        const middlePanel = createDivWithClass("panel");

        middlePanel.append(createAmmoInfoElement(ammoBit));
        top_panel.append(middleLayer, middlePanel);
    })

    return top_panel;
}


function createItemDivSection(gridImage, title) {
    const section = document.createElement("div");
    const headImage = document.createElement("img");
    const headTitle = document.createElement("h3");
    const arrow = document.createElement("i");

    section.classList.add("item", "section");
    headImage.src = gridImage;
    headImage.alt = "section header image";
    headTitle.innerText = title;
    arrow.classList.add("fa-solid", "fa-chevron-up");

    section.append(headImage, headTitle, arrow);
    return section
}

function createAmmoInfoElement(ammo) {
    const ammoInfo = createDivWithClass("ammo_info");
    const column = createDivWithClass("column");
    const peaces = [["damage", ammo.damage], ["pen", ammo.penetration], ["damage (ar)", ammo.armorDamage],
        ["frag%", ammo.fragChance], ["recoil", ammo.recoil], ["accuracy", ammo.accuracy]];

    peaces.forEach((bit) => {
        const peace = createPeaceElement(bit[0], bit[1]);
        column.appendChild(peace);
    });

    ammoInfo.appendChild(column);
    return ammoInfo;
}

function createPeaceElement(type, value) {
    const peace = createDivWithClass("peace");
    peace.innerHTML = type + "<br>" + value;
    return peace;
}

function createDivWithClass(className) {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
}
