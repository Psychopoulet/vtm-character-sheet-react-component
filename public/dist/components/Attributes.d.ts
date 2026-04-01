import React from "react";
import type { UsedCharacteristic } from "../types";
export interface AttributesProps {
    readonly "characteristics": UsedCharacteristic[];
}
export declare function Attributes({ characteristics }: AttributesProps): React.JSX.Element;
