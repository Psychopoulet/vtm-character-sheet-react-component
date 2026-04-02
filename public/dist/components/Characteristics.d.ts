import React from "react";
import type { NamedUsedCharacteristic } from "../types";
export interface CharacteristicsProps {
    "title": string;
    "globalMinValue": number;
    "cols": ReadonlyArray<{
        "title": string;
        "characteristics": NamedUsedCharacteristic[];
        "minValue"?: number;
    }>;
}
export declare function Characteristics({ title, globalMinValue, cols }: CharacteristicsProps): React.JSX.Element;
