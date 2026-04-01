import React from "react";
import type { UsedCharacteristic } from "../types";
export interface AbilitiesProps {
    readonly "characteristics": UsedCharacteristic[];
}
export declare function Abilities({ characteristics }: AbilitiesProps): React.JSX.Element;
