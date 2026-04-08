import React from "react";
export interface RatedPoolProps {
    "title": string;
    "current": number;
    "max": number;
}
export declare const POOL_MAX = 10;
export declare function RatedPool({ title, current, max }: RatedPoolProps): React.JSX.Element;
