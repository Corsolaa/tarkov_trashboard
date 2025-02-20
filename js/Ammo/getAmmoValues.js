const response = await fetch('json/ammo_data.json');
const ammoInfo = await response.json();

// Queries the Tarkov Api with the right string and returns data.
export async function getAmmoValues() {
    return ammoInfo.data.ammo;
}
