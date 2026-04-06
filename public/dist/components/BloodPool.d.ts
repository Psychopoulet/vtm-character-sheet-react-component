import React from "react";
import type { BloodValue } from "../types";
export interface BloodPoolProps {
    /** Current blood in the pool (filled cells from the start of the grid, e.g. remaining points). */
    "current": BloodValue;
    /** Maximum blood pool capacity for the character. */
    "max": BloodValue;
}
/** Classic Blood Pool track is 1–40. */
export declare const BLOOD_POOL_MAX = 40;
/** Blood pool grid: shows current vs max as filled / empty cells. */
export declare function BloodPool({ current, max }: BloodPoolProps): React.JSX.Element;
