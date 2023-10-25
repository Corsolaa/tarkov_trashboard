import {tarkovApiCall} from "../tarkovApiCall.js";

// Queries the Tarkov Api with the right string and returns data.
export async function getAmmoValues() {
    let data;
    data = await tarkovApiCall("ammo {item {name gridImageLink inspectImageLink }" +
        "damage projectileCount recoilModifier accuracyModifier fragmentationChance caliber " +
        "penetrationPower armorDamage }");
    return data;
}
