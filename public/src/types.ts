export type Secte = "Sabbat" | "Camarilla" | "Independent";
export type Clan = "Brujah" | "Gangrel" | "Malkavien" | "Nosferatu" | "Toreador" | "Tremere" | "Ventrue"
    | "Lasombra" | "Tzimisce"
    | "Assamite" | "Banu Haqim" | "Disciples de Set" | "Ravnos";

export interface Attribute {
    "physical": "strength" | "dexterity" | "stamina";
    "social": "charisma" | "manipulation" | "appearance";
    "mental": "intelligence" | "perception" | "wits";
}

export interface Ability {
    "talent": "alertness" | "athletics" | "brawl" | "dodge" | "empathy" | "expression" | "intimidation" | "leadership" | "legerdemain" | "streetwise" | "subterfuge";
    "skill": "animal_ken" | "crafts" | "etiquette" | "drive" | "firearms" | "larceny" | "melee" | "performance" | "ride" | "stealth" | "survival";
    "knowledge": "academics" | "awareness" | "enigmas" | "finance" | "investigation" | "law" | "linguistics" | "medicine" | "occult" | "politics" | "science" | "technology";
}

export interface Advantage {
    "discipline": "alienation" | "animalism" | "auspex" | "bardo" | "celerity" | "chimery" | "daimoinon" | "domination" | "fortitude" | "kineticism" | "melpominee" | "necromancy" | "obtenebration" | "occultation" | "potence" | "presence" | "protean" | "quietus" | "sanguinus" | "serpentis" | "spiritus" | "thanatose" | "thaumaturgy" | "vicissitude";
    "background": "Troupeau" | "Génération" | "Ressources" | "Concacts" | "Influence" | "Statut" | "Alliés" | "Mentor";
    "virtue": "Conscience/Conviction" | "Maîtrise de soi / Instinct" | "Courage";
}

export type Humanity = "humanity";
export type WillPower = "willpower";

export type Characteristic = Attribute["physical"] | Attribute["social"] | Attribute["mental"]
    | Ability["talent"] | Ability["skill"] | Ability["knowledge"]
    | Advantage["discipline"] | Advantage["background"] | Advantage["virtue"]
    | Humanity | WillPower;

export interface UsedCharacteristic {
    "code": Characteristic;
    "value"?: number | undefined;
}

export interface NamedUsedCharacteristic extends UsedCharacteristic {
    "name": string;
}
