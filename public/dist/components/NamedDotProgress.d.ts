import React from "react";
export interface NamedDotProgressProps {
    "name": string;
    "value": number;
    "max": number;
}
/**
 * Horizontal dot rating for a named stat (VTM-style OOOOO track).
 */
export declare function NamedDotProgress({ name, value, max }: NamedDotProgressProps): React.JSX.Element;
