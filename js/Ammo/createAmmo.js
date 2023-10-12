import {getAmmoValues} from "./getAmmoValues.js";
import ammoDict from "../../json/ammo_cal.json" assert { type: 'json' };

// Creates all the Ammo Object from the API data.
async function createAmmo() {
    const ammo_chart = await getAmmoValues()
    let ammo = [];

    ammo_chart.forEach((ammo_bit) => {
        ammo.push(new Ammo(ammo_bit));
    });

    return ammo
}

function createEle(ammoList) {
    let hello, bruh, boo;
    hello, bruh, boo+= "bruh"

}

const ammo = createAmmo();

console.log(ammo)