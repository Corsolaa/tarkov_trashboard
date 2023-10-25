import {getAmmoValues} from "./getAmmoValues.js";

export async function createAmmoObjects() {
    const ammoChart = await getAmmoValues()
    let ammo = [];

    ammoChart.forEach((ammoBit) => {
        ammo.push(new Ammo(ammoBit));
    });

    return ammo
}

