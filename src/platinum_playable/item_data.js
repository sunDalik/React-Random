const Rarity = Object.freeze({ C: 1, B: 2, A: 3, S: 4 })

export const getRarityColor = (rarity) => {
    if (rarity === Rarity.B) return "#94c9f2"
    else if (rarity === Rarity.A) return "#84f081"
    else if (rarity === Rarity.S) return "#f5e476"
    else return "#ffffff";
}

const EquipmentType = Object.freeze({ Footwear: "Footwear", Armor: "Armor", Headwear: "Headwear", Weapon: "Weapon" })

class Item {
    constructor(name, description, rarity, type, imagePath) {
        this.name = name;
        this.description = description;
        this.rarity = rarity;
        this.type = type;
        this.imagePath = imagePath;
    }
}

export const itemData = [
    new Item("Knight Boots", "Immunity to hazards\n+0.5 defense", Rarity.A, EquipmentType.Footwear, "images/footwear/knight_boots.png"),
    new Item("Mushroom Greaves", "Immunity to poison hazards\n+0.25 defense\nYou absorb poison beneath you", Rarity.B, EquipmentType.Footwear, "images/footwear/mushroom_greaves.png"),
    new Item("Old Ballet Shoes", "All spiders in 6 tile radius take 0.25 damage whenever you move", Rarity.C, EquipmentType.Footwear, "images/footwear/old_ballet_shoes.png"),
    new Item("Possessed Sandals", "Moving from a tile damages all enemies that stood near that tile by 1 dmg", Rarity.A, EquipmentType.Footwear, "images/footwear/possessed_sandals.png"),
    new Item("Leather Armor", "+0.5 defense", Rarity.C, EquipmentType.Armor, "images/armor/leather_armor.png"),
    new Item("Summoner Belt", "Summons cat minions that deal 0.5 damage to enemies they touch\n+0.5 defense\n+0.5 minion attack", Rarity.A, EquipmentType.Armor, "images/armor/summoner_belt.png"),
    new Item("Wings", "Immunity to hazards\n50% to dodge any attack\nIf you fail to dodge 2 times in a row, the 3rd dodge is guaranteed to succeed", Rarity.S, EquipmentType.Armor, "images/armor/wings.png"),
    new Item("Wizard Robe", "+1 magic use\n+1 magic attack", Rarity.A, EquipmentType.Armor, "images/armor/wizard_robe.png"),
    new Item("Bronze Armor", "+1 defense", Rarity.B, EquipmentType.Armor, "images/armor/bronze_armor.png"),
    new Item("Electric Armor", "+0.5 defense\n+0.25 attack\nTake half damage from electric bullets", Rarity.B, EquipmentType.Armor, "images/armor/electric.png"),
    new Item("Fallen Angel Wings", "Save you from death with 1 hp\nBreak after 2 revivals", Rarity.C, EquipmentType.Armor, "images/armor/fallen_angel_wings.png"),
    new Item("Barbarian Helmet", "+0.75 attack", Rarity.B, EquipmentType.Headwear, "images/headwear/barbarian_helmet.png"),
    new Item("Blade Crown", "Whenever you attack with a weapon, a blade appears and deals 1 damage to all enemies around you", Rarity.S, EquipmentType.Headwear, "images/headwear/blade_crown.png"),
    new Item("Crown of Malice", "+0.25 attack", Rarity.C, EquipmentType.Headwear, "images/headwear/crown_of_malice.png"),
    new Item("Guard Helmet", "+0.5 defense", Rarity.B, EquipmentType.Headwear, "images/headwear/guard_helmet.png"),
    new Item("Kitsune Mask", "+0.5 attack\n+0.5 minion attack", Rarity.C, EquipmentType.Headwear, "images/headwear/kitsune_mask.png"),
    new Item("Stone Mask", "+1.5 attack\nAny healing for this character is reduced to 0.25", Rarity.A, EquipmentType.Headwear, "images/headwear/stone_mask.png"),
    new Item("Witch Hat", "+0.5 magic attack", Rarity.C, EquipmentType.Headwear, "images/headwear/witch_hat.png"),
    new Item("Assassin's Dagger", "Attack 1.5\nIf there is a space behind the target, teleports you behind it and gives it 1 stun", Rarity.S, EquipmentType.Weapon, "images/weapons/assassin_dagger.png"),
    new Item("Book of Flames", "Attack 2\nAttacks in T shape", Rarity.S, EquipmentType.Weapon, "images/weapons/book_of_flames.png"),
    new Item("Book of Ice", "Range 2\nAttacked enemy gets 4 stun", Rarity.B, EquipmentType.Weapon, "images/weapons/book_of_ice.png"),
    new Item("Book of Thunders", "Casts a thunder on the closest enemy in a direction\nHas enormous area of effect\nThunder applies 1 stun", Rarity.A, EquipmentType.Weapon, "images/weapons/book_of_thunders.png"),
    new Item("Book of Webs", "Range 6\nAttack 2\nCasts 3 web lines", Rarity.A, EquipmentType.Weapon, "images/weapons/book_of_webs.png"),
    new Item("Boomeraxe", "Range 3\nAttack 1 in melee\nAttack 0.5 at range 2\nAttack 0.25 at range 3", Rarity.C, EquipmentType.Weapon, "images/weapons/boomeraxe.png"),
    new Item("Bow", "Range 3\nAttack = 1 at full range | 0.75 at range 2 | 0.25 at range 1", Rarity.B, EquipmentType.Weapon, "images/weapons/bow.png"),
    new Item("Knife", "Attack 1\nRange 1", Rarity.C, EquipmentType.Weapon, "images/weapons/knife.png"),
    new Item("Pawn Swords", "Attacks two diagonal enemies", Rarity.C, EquipmentType.Weapon, "images/weapons/pawn_swords.png"),
    new Item("Prismaxe", "Range 3\nAttack 1 in melee\nAttack 0.5 in ranged\nUpon attacking releases 3 prismaxes that deal 0.5 damage", Rarity.A, EquipmentType.Weapon, "images/weapons/prismaxe.png"),
    new Item("Scythe", "Attacks 5 enemies in front of you", Rarity.A, EquipmentType.Weapon, "images/weapons/scythe.png"),
    new Item("Maiden's Short Sword", "Attack 1.25\nIf you wield two of these, it attacks 3 enemies in front of you, moves you and deals 2.5 damage to the middle enemy", Rarity.B, EquipmentType.Weapon, "images/weapons/maiden_dagger.png"),
    new Item("Crossbow", "Range 3\nAttack 1", Rarity.A, EquipmentType.Weapon, "images/weapons/crossbow.png"),
    new Item("Cerberus Bow", "Range 3\nAttack = 1 at full range | 0.75 at range 2 | 0.25 at range 1\nThis bow can fire up to 2 additional diagonal arrows", Rarity.A, EquipmentType.Weapon, "images/weapons/cerberus_bow.png"),
    //new Item("name", "descr", Rarity.C, EquipmentType.Weapon),
];