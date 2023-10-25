class Ammo {
    constructor(ammo) {
        this.name = ammo.item.name;
        this.caliber = ammo.caliber;
        this.damage = Ammo.calcDamage(ammo.damage, ammo.projectileCount);
        this.penetration = ammo.penetrationPower;
        this.armorDamage = ammo.armorDamage;
        this.fragChance = Ammo.decToProc(ammo.fragmentationChance) ;
        this.gridImageLink = ammo.item.gridImageLink;
        this.inspectImage = ammo.item.inspectImage;
        this.recoil = Ammo.decToProc(ammo.recoilModifier);
        this.accuracy = Ammo.decToProc(ammo.accuracyModifier);
    }

    // Calculate the decimal chance to percentages.
    static decToProc (decimal) {
        return decimal * 100
    }

    // When there are multiple projectiles, not it in damage.
    static calcDamage (damage, projectileCount) {
        if (projectileCount > 1) {
            return damage + "x" + projectileCount;
        }
        return damage;
    }
}