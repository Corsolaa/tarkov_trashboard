import ammoInfo from "../../json/ammo_data.json" assert {type: 'json'};

// Queries the Tarkov Api with the right string and returns data.
export async function getAmmoValues() {
    return ammoInfo.data.ammo;
}
