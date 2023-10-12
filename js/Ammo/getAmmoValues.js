import {apiCall} from "../apiCall.js";

// Queries the Tarkov Api with the right string and returns data.
export async function getAmmoValues() {
    let data;
    data = await apiCall("ammo (limit: 10){item {name gridImageLink inspectImageLink }" +
        "damage projectileCount recoilModifier accuracyModifier fragmentationChance caliber penetrationPower armorDamage }");
    return data;
}
