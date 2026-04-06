// deps

    // externals
    import React from "react";
    import { useTranslation } from "react-i18next";

    // locals
    import styles from "./BloodPool.module.css";
    import type { BloodValue } from "../types";

    export interface BloodPoolProps {

        /** Current blood in the pool (filled cells from the start of the grid, e.g. remaining points). */
        "current": BloodValue;

        /** Maximum blood pool capacity for the character. */
        "max": BloodValue;

    }

    /** Classic Blood Pool track is 1–40. */
    export const BLOOD_POOL_MAX = 40;

// module

/** Blood pool grid: shows current vs max as filled / empty cells. */
export function BloodPool ({
    current,
    max
}: BloodPoolProps): React.JSX.Element {

    const { t } = useTranslation();

    return <section
        className={ styles.wrap }
        aria-label={ t("bloodpool") + `: ${current} of ${max}` }
    >

        <header className={styles.header}>

            <h3 className={styles.title}> { t("bloodpool")} </h3>

            <p className={styles.values}>
                <span className={styles.current}>{current}</span>
                <span className={styles.sep}>/</span>
                <span className={styles.max}>{max}</span>
            </p>

        </header>

        <div
            className={ styles.grid }
            role="presentation"
        >

            { Array.from({ "length": BLOOD_POOL_MAX }, (_, i): React.JSX.Element => {

                return <span
                    key={i}
                    className={i < current ? styles.cellFilled : styles.cellEmpty}
                    aria-hidden
                />;

            }) }

        </div>

    </section>;

}
