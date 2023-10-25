// The inputted array gets split in multiple arrays with all the right calibers combined.
export function sortAmmo (ammoList) {
    let count = 0;
    let sortedAmmo = [];
    let ammoPlace = {};

    ammoList.forEach((ammoBit) => {
        // When the caliber is not yet in the array.
        if (!(ammoBit.caliber in ammoPlace)) {
            // Add the caliber to the arrayIndex.
            ammoPlace[ammoBit.caliber] = count;
            sortedAmmo[count] = [ammoBit];
            count++;
        } else {
            // Just add the caliber to the respected index.
            let pointer = ammoPlace[ammoBit.caliber];
            sortedAmmo[pointer].push(ammoBit);
        }
    });

    // Sort ever ammo array so that the highest penetration power is on top.
    sortedAmmo.forEach((cal) => {
        cal.sort((a, b) => {
            return a.penetration - b.penetration;
        }).reverse();
    })

    return sortedAmmo;
}