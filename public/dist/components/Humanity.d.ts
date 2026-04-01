import React from "react";
/** Classic Humanity / Path track is 1–10. */
export declare const HUMANITY_MAX = 10;
export interface HumanityProps {
    /** Current Humanity rating (0 … HUMANITY_MAX). */
    "value": number;
}
/**
 * Humanity track: ten positions, filled from the left up to the current rating (VTM-style).
 */
export declare function Humanity({ value }: HumanityProps): React.JSX.Element;
