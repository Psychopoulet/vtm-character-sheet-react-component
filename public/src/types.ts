export type Secte = "Sabbat" | "Camarilla" | "Independent";
export type Clan = "Brujah" | "Gangrel" | "Malkavien" | "Nosferatu" | "Toreador" | "Tremere" | "Ventrue"
    | "Lasombra" | "Tzimisce"
    | "Assamite" | "Banu Haqim" | "Disciples de Set" | "Ravnos";

export type AttributePhysical = "Force" | "Dextérité" | "Vigueur";
export type AttributeSocial = "Charisme" | "Manipulation" | "Apparence";
export type AttributeMental = "Intelligence" | "Perception" | "Astuce";
export type AbilityTalent = "Athlétisme" | "Bagarre" | "Commandement" | "Empathie" | "Esquive" | "Expression de la rue" | "Expression" | "Intimidation" | "Subterfuge" | "Vigilance";
export type AbilitySkill = "Animaux" | "Armes à feu" | "Artisanat" | "Conduite" | "Etiquette" | "Furtivité" | "Mêlée" | "Représentation" | "Sécurité" | "Survie";
export type AbilityKnowledge = "Erudition" | "Finance" | "Informatique" | "Investigation" | "Loi" | "Médecine" | "Linguistique" | "Occultisme" | "Politique" | "Science";
export type AdvantageDiscipline = "Domination" | "Force d'âme" | "Présence" | "Aliénation" | "Célérité" | "Occultation" | "Occultisme";
export type AdvantageBackground = "Troupeau" | "Génération" | "Ressources" | "Concacts" | "Influence" | "Statut" | "Alliés" | "Mentor";
export type AdvantageVirtues = "Conscience/Conviction" | "Maîtrise de soi / Instinct" | "Courage";
export type Will = "Volonté";

export type Characteristic = AttributePhysical | AttributeSocial | AttributeMental
    | AbilityTalent | AbilitySkill | AbilityKnowledge
    | AdvantageDiscipline | AdvantageBackground | AdvantageVirtues
    | Will;

export interface UsedCharacteristic {
    "name": Characteristic;
    "value"?: number | undefined;
}
