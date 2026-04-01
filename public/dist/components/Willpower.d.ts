import React from "react";
export interface WillpowerProps {
    /** Temporary Willpower remaining (filled cells from the start). */
    "current": number;
    /** Permanent Willpower rating (pool size). */
    "max": number;
    /** Columns in the grid (default 10, matches classic sheet rows). */
    "columns"?: number;
}
/** Classic Willpower / Path track is 1–10. */
export declare const WILLPOWER_MAX = 10;
/**
 * Willpower pool: filled vs empty circles for current temporary Willpower vs permanent maximum.
 */
export declare function Willpower({ current, max }: WillpowerProps): React.JSX.Element;
