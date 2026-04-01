import React from "react";
import type { UsedCharacteristic } from "../types";
export type CharacteristicsProps = {
    "title": string;
    "globalMinValue": number;
    "cols": ReadonlyArray<{
        "title": string;
        "characteristics": UsedCharacteristic[];
        "minValue"?: number;
    }>;
};
export declare function Characteristics({ title, globalMinValue, cols }: CharacteristicsProps): React.JSX.Element;
