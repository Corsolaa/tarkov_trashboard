import {createAmmoTypesContent} from "./createElements.js";
import {sortAmmo} from "./Ammo/sortAmmo.js";
import {accordionsMovement} from "./functions.js";
import {createAmmoObjects} from "./Ammo/createAmmoObjects.js";

createAmmoTypesContent(sortAmmo(await createAmmoObjects()));

accordionsMovement();