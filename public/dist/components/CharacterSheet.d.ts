import React from "react";
import type { Secte, Clan, GenerationValue, BloodValue, HumanityValue, WillpowerValue, ExperienceValue, UsedCharacteristic } from "../types";
export interface CharacterSheetProps {
    "name": string;
    "player": string;
    "secte": Secte;
    "clan": Clan;
    "generation"?: GenerationValue;
    "experience"?: ExperienceValue;
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
    "dammages"?: number;
}
/** Example layout inspired by the classic VTM sheet PDF (header + sample tracks). */
export declare function CharacterSheet({ name, player, secte, clan, generation, experience, characteristics, bloodPool, humanity, willpower, dammages }: CharacterSheetProps): React.JSX.Element;
