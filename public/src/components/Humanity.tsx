// deps

    // externals
    import React from "react";

    // locals
    import styles from "./Humanity.module.css";

    /** Classic Humanity / Path track is 1–10. */
    export const HUMANITY_MAX = 10;

    export interface HumanityProps {

      /** Current Humanity rating (0 … HUMANITY_MAX). */
      "value": number;

    }

// module

/**
 * Humanity track: ten positions, filled from the left up to the current rating (VTM-style).
 */
export function Humanity ({
    value
}: HumanityProps): React.JSX.Element {

    return <section
        className={ styles.wrap }
        aria-label={ `Humanity: ${value} of ${HUMANITY_MAX}` }
    >

        <header className={ styles.header }>

          <h3 className={ styles.title }>Humanité</h3>

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

            { Array.from({ "length": HUMANITY_MAX }, (_, i): React.JSX.Element => {

                return <span
                    key={ i }
                    className={ i < value ? styles.cellFilled : styles.cellEmpty }
                    aria-hidden
                />;

            }) }

        </div>

    </section>;

}
