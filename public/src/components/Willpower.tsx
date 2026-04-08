// deps

    // externals
    import React from "react";
    import { useTranslation } from "react-i18next";

    // locals
    import { RatedPool } from "./RatedPool";

// types & interfaces

    // locals
    import type { WillpowerValue } from "../types";

    export interface WillpowerProps {
        "current": WillpowerValue;
        "max": WillpowerValue;
    }

// module

export function Willpower ({
    current,
    max
}: WillpowerProps): React.JSX.Element {

    const { t } = useTranslation();

    return <RatedPool
        title={ t("characteristics.willpower") }
        current={ current }
        max={ max }
    />;

}
