import {getAmmoValues} from "./getAmmoValues.js";

const ammo_chart = await getAmmoValues()

function createAmmo() {
    let counter = 0;
    let ammo = [];

    while (counter < ammo_chart.length) {
        const ammoBit = new Ammo(ammo_chart[counter])
        ammo.push(ammoBit)
        counter++;
    }

    return ammo
}

const ammo = createAmmo();

console.log(ammo)