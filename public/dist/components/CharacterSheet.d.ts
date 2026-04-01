import React from "react";
import type { Secte, Clan, UsedCharacteristic } from "../types";
export interface CharacterSheetProps {
    "name": string;
    "player": string;
    "secte": Secte;
    "clan": Clan;
    "characteristics"?: UsedCharacteristic[];
    "bloodPool"?: {
        "current"?: number;
        "characterMax"?: number;
    };
    "humanity"?: number;
    "willpower"?: {
        "current"?: number;
        "characterMax"?: number;
    };
    "dammages"?: number;
}
/** Example layout inspired by the classic VTM sheet PDF (header + sample tracks). */
export declare function CharacterSheet({ name, player, secte, clan, characteristics, bloodPool, humanity, willpower, dammages }: CharacterSheetProps): React.JSX.Element;
