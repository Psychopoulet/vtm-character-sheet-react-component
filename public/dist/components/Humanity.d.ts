import React from "react";
import type { HumanityValue } from "../types";
export interface HumanityProps {
    "current": HumanityValue;
    "max": HumanityValue;
}
export declare function Humanity({ current, max }: HumanityProps): React.JSX.Element;
