class Ammo {
    constructor(ammo) {
        this.name = ammo.item.name;
        this.caliber = ammo.caliber;
        this.damage = ammo.damage;
        this.penetration = ammo.penetrationPower;
        this.armorDamage = ammo.armorDamage;
        this.fragChance = Ammo.decToProc(ammo.fragChance) ;
        this.gridImageLink = ammo.item.gridImageLink;
        this.inspectImage = ammo.item.inspectImage;
        this.recoil = Ammo.decToProc(ammo.recoilModifier);
        this.accuracy = Ammo.decToProc(ammo.accuracyModifier);

    }

    static decToProc (decimal) {
        // Calculate the decimal chance to percentages.
        return decimal * 100
    }
}