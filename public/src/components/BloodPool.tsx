// deps

    // externals
    import React from "react";
    import { useTranslation } from "react-i18next";

    // locals
    import styles from "./BloodPool.module.scss";

// types & interfaces

    // locals
    import type { BloodValue } from "../types";

    export interface BloodPoolProps {
        "current": BloodValue;
        "max": BloodValue;
    }

// consts

    export const BLOOD_POOL_MAX = 40;

// module

export function BloodPool ({
    current,
    max
}: BloodPoolProps): React.JSX.Element {

    const { t } = useTranslation();

    const properCurrent = Math.min(current, max);

    return <section
        className={ styles.wrap }
        aria-label={ t("bloodpool") + `: ${properCurrent} of ${max}` }
    >

        <header className={ styles.header }>

            <h3 className={ styles.title }> { t("bloodpool")} </h3>

            <p className={ styles.values }>
                <span className={ styles.current }>{ properCurrent }</span>
                <span className={ styles.sep }>/</span>
                <span className={ styles.max }>{ max }</span>
            </p>

        </header>

        <div
            className={ styles.grid }
            role="presentation"
        >

            { Array.from({ "length": BLOOD_POOL_MAX }, (_, i): React.JSX.Element => {

                return <span
                    key={ i }
                    className={ i < properCurrent ? styles.cellFilled : styles.cellEmpty }
                    aria-hidden
                />;

            }) }

        </div>

    </section>;

}
