// deps

    // externals
    import React from "react";
    import { useTranslation } from "react-i18next";

    // locals
    import { RatedPool } from "./RatedPool";

// types & interfaces

    // locals
    import type { HumanityValue } from "../types";

    export interface HumanityProps {
        "current": HumanityValue;
        "max": HumanityValue;
    }

// module

export function Humanity ({
    current,
    max
}: HumanityProps): React.JSX.Element {

    const { t } = useTranslation();

    return <RatedPool
        title={ t("characteristics.humanity") }
        current={ current }
        max={ max }
    />;

}
