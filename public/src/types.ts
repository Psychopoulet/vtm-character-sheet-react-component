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
    "talent": "alertness" | "athletics" | "awareness" | "brawl" | "dodge" | "empathy" | "expression" | "intimidation" | "leadership" | "streetwise" | "subterfuge";
    "skill": "Animaux" | "Armes à feu" | "Artisanat" | "Conduite" | "Etiquette" | "Furtivité" | "Mêlée" | "Représentation" | "Sécurité" | "Survie";
    "knowledge": "Erudition" | "Finance" | "Informatique" | "Investigation" | "Loi" | "Médecine" | "Linguistique" | "Occultisme" | "Politique" | "Science";
}

export interface Advantage {
    "discipline": "Domination" | "Force d'âme" | "Présence" | "Aliénation" | "Célérité" | "Occultation" | "Occultisme";
    "background": "Troupeau" | "Génération" | "Ressources" | "Concacts" | "Influence" | "Statut" | "Alliés" | "Mentor";
    "virtue": "Conscience/Conviction" | "Maîtrise de soi / Instinct" | "Courage";
}

export type Will = "Volonté";

export type Characteristic = Attribute["physical"] | Attribute["social"] | Attribute["mental"]
    | Ability["talent"] | Ability["skill"] | Ability["knowledge"]
    | Advantage["discipline"] | Advantage["background"] | Advantage["virtue"]
    | Will;

export interface UsedCharacteristic {
    "code": Characteristic;
    "value"?: number | undefined;
}

export interface NamedUsedCharacteristic extends UsedCharacteristic {
    "name": string;
}
