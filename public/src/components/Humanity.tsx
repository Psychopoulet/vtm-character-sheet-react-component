// deps

    // externals
    import React from "react";
    import { useTranslation } from "react-i18next";

    // locals
    import styles from "./Humanity.module.css";
    import type { HumanityValue } from "../types";

    /** Classic Humanity / Path track is 1–10. */
    export const HUMANITY_MAX = 10;

    export interface HumanityProps {

      /** Current Humanity rating (0 … HUMANITY_MAX). */
      "value": HumanityValue;

    }

// module

/**
 * Humanity track: ten positions, filled from the left up to the current rating (VTM-style).
 */
export function Humanity ({
    value
}: HumanityProps): React.JSX.Element {

    const { t } = useTranslation();

    return <section
        className={ styles.wrap }
        aria-label={ t("characteristics.humanity") + `: ${value} of ${HUMANITY_MAX}` }
    >

        <header className={ styles.header }>

          <h3 className={ styles.title }>{ t("characteristics.humanity") }</h3>

            <p className={ styles.values }>
                <span className={ styles.current }>{ value }</span>
                <span className={ styles.sep }>/</span>
                <span className={ styles.max }>{ HUMANITY_MAX }</span>
            </p>

        </header>

        <div
            className={ styles.grid }
            role="presentation"
        >

            { Array.from({ "length": HUMANITY_MAX }, (_: number, i: number): React.JSX.Element => {

                return <span
                    key={ i }
                    className={ i < value ? styles.cellFilled : styles.cellEmpty }
                    aria-hidden
                />;

            }) }

        </div>

    </section>;

}
