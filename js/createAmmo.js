import {getAmmoValues} from "./getAmmoValues.js";

const ammo_chart = await getAmmoValues()

function createAmmo() {
    let i = 0;
    let ammo = [];

    while (i < ammo_chart.length) {
        const ammoBit = new Ammo(ammo_chart[i])
        ammo.push(ammoBit)
        i++;
    }

    console.log(ammo)
}

createAmmo();