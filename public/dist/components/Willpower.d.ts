import React from "react";
import type { WillpowerValue } from "../types";
export interface WillpowerProps {
    "current": WillpowerValue;
    "max": WillpowerValue;
}
export declare function Willpower({ current, max }: WillpowerProps): React.JSX.Element;
