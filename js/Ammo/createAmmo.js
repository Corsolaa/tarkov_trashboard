import {getAmmoValues} from "./getAmmoValues.js";
import {createEle} from "../createElements.js";
import {accordions_movement} from "../functions.js";

// Creates all the Ammo Object from the API data.
async function createAmmo() {
    const ammo_chart = await getAmmoValues()
    let ammo = [];

    ammo_chart.forEach((ammo_bit) => {
        ammo.push(new Ammo(ammo_bit));
    });

    return ammo
}

const ammo = await createAmmo()

createEle([ammo])

console.log(ammo);

accordions_movement();