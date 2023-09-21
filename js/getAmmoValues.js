import {apiCall} from "./apiCall.js";

export async function getAmmoValues() {
    let data;
    data = await apiCall("ammo (limit: 10){item {name gridImageLink inspectImageLink }" +
        "damage recoilModifier accuracyModifier fragmentationChance caliber penetrationPower armorDamage }");
    return data;
}
