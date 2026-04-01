import React from "react";
import type { UsedCharacteristic } from "../types";
export type NamedDotProgressProps = UsedCharacteristic & {
    /** Total dots in the track (default 5, common for attributes). */
    "max"?: number;
};
/**
 * Horizontal dot rating for a named stat (VTM-style OOOOO track).
 */
export declare function NamedDotProgress({ name, value, max }: NamedDotProgressProps): React.JSX.Element;
