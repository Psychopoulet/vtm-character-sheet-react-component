import React from "react";
import type { Secte, Clan, Archetype, // Concept,
BloodValue, HumanityValue, WillpowerValue, ExperienceValue, UsedCharacteristic } from "../types";
export interface CharacterSheetProps {
    "name": string;
    "player": string;
    "secte": Secte;
    "clan": Clan;
    "nature": Archetype;
    "demeanor": Archetype;
    "characteristics"?: UsedCharacteristic[];
    "bloodPool"?: BloodValue;
    "humanity"?: {
        "current": HumanityValue;
        "max"?: HumanityValue;
    };
    "willpower"?: {
        "current": WillpowerValue;
        "max"?: WillpowerValue;
    };
    "experience"?: ExperienceValue;
    "dammages"?: number;
}
/** Example layout inspired by the classic VTM sheet PDF (header + sample tracks). */
export declare function CharacterSheet({ name, player, secte, clan, nature, demeanor, experience, characteristics, bloodPool, humanity, willpower, dammages }: CharacterSheetProps): React.JSX.Element;
