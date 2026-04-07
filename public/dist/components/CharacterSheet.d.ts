import React from "react";
import type { Secte, Clan, Nature, // Concept,
GenerationValue, BloodValue, HumanityValue, WillpowerValue, ExperienceValue, UsedCharacteristic } from "../types";
export interface CharacterSheetProps {
    "name": string;
    "player": string;
    "secte": Secte;
    "clan": Clan;
    "nature": Nature;
    "demeanor": Nature;
    "generation": GenerationValue;
    "characteristics"?: UsedCharacteristic[];
    "bloodPool"?: {
        "current"?: BloodValue;
        "characterMax"?: BloodValue;
    };
    "humanity"?: HumanityValue;
    "willpower"?: {
        "current"?: WillpowerValue;
        "characterMax"?: WillpowerValue;
    };
    "experience"?: ExperienceValue;
    "dammages"?: number;
}
/** Example layout inspired by the classic VTM sheet PDF (header + sample tracks). */
export declare function CharacterSheet({ name, player, secte, clan, nature, demeanor, generation, experience, characteristics, bloodPool, humanity, willpower, dammages }: CharacterSheetProps): React.JSX.Element;
