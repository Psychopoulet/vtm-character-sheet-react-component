type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc["length"]]>;
type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
export type Secte = "sabbat" | "camarilla" | "anarch" | "independent";
export type Clan = "brujah" | "gangrel" | "malkavian" | "nosferatu" | "toreador" | "tremere" | "ventrue" | "lasombra" | "tzimisce" | "assamite" | "banu-haqim" | "giovanni" | "ravnos" | "salubri" | "the-ministry";
export type Archetype = "anarchist" | "architect" | "autocrat" | "bon-vivant" | "bravo" | "capitalist" | "caregiver" | "celebrant" | "chameleon" | "child" | "competitor" | "conformist" | "conniver" | "creep-show" | "critic" | "curmudgeon" | "dabbler" | "deviant" | "director" | "enigma" | "eye-of-the-storm" | "fanatic" | "gallant" | "guru" | "idealist" | "judge" | "loner" | "martyr" | "masochist" | "monster" | "nihilist" | "pedagogue" | "penitent" | "perfectionist" | "rebel" | "rogue" | "sadist" | "scientist" | "sociopath" | "soldier" | "survivor" | "thrill-seeker" | "traditionalist" | "trickster" | "visionary";
export type GenerationValue = IntRange<1, 13>;
export type BloodValue = IntRange<0, 40>;
export type HumanityValue = IntRange<1, 10>;
export type WillpowerValue = IntRange<0, 10>;
export type ExperienceValue = IntRange<0, 50>;
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
    "discipline": "alienation" | "animalism" | "auspex" | "bardo" | "celerity" | "chimery" | "daimoinon" | "domination" | "fortitude" | "kineticism" | "melpominee" | "mytherceria" | "necromancy" | "obeah" | "obtenebration" | "occultation" | "ogham" | "potence" | "presence" | "protean" | "quietus" | "sanguinus" | "serpentis" | "spiritus" | "temporis" | "thanatose" | "thaumaturgy" | "valeren" | "vicissitude" | "visceratika";
    "background": "Troupeau" | "Génération" | "Ressources" | "Concacts" | "Influence" | "Statut" | "Alliés" | "Mentor";
    "virtue": "Conscience/Conviction" | "Maîtrise de soi / Instinct" | "Courage";
}
export type Humanity = "humanity";
export type WillPower = "willpower";
export type Characteristic = Attribute["physical"] | Attribute["social"] | Attribute["mental"] | Ability["talent"] | Ability["skill"] | Ability["knowledge"] | Advantage["discipline"] | Advantage["background"] | Advantage["virtue"] | Humanity | WillPower;
export interface UsedCharacteristic {
    "code": Characteristic;
    "value"?: number | undefined;
}
export interface NamedUsedCharacteristic extends UsedCharacteristic {
    "name": string;
}
export {};
