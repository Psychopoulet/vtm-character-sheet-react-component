import React from "react";
import type { BloodValue } from "../types";
export interface BloodPoolProps {
    "current": BloodValue;
    "max": BloodValue;
}
export declare const BLOOD_POOL_MAX = 40;
export declare function BloodPool({ current, max }: BloodPoolProps): React.JSX.Element;
