import React from "react";
export interface HealthBoxState {
    /** Number of damages in the box (0-3). */
    "traits": number;
}
export interface HealthStage {
    "label": string;
    "boxes": HealthBoxState[];
    /** Wound penalty printed under the level label (empty for Bruised/Incapacitated). */
    "penalty"?: string;
}
export interface HealthTrackProps {
    /** Number of health levels marked from Bruised to Incapacitated. */
    "dammages": number;
    "stages"?: HealthStage[];
    "className"?: string;
}
declare const TRAITS_PER_BOX = 3;
/** Classic health strip with wound penalties matching the official PDF order. */
export declare function HealthTrack({ dammages, stages, className }: HealthTrackProps): React.JSX.Element;
export { TRAITS_PER_BOX };
