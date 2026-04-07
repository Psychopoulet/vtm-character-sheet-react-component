// deps

    // externals
    import React from "react";

    // locals
    import styles from "./NamedDotProgress.module.scss";

// types & interfaces

    // locals

    export interface NamedDotProgressProps {

        "name": string;
        "value": number;

        /** Total dots in the track (default 5, common for attributes). */
        "max"?: number;

    }

// module

/**
 * Horizontal dot rating for a named stat (VTM-style OOOOO track).
 */
export function NamedDotProgress ({
    name,
    value = 0,
    max = 5
}: NamedDotProgressProps): React.JSX.Element {

    return <div
        className={ styles.row }
        role="group"
        aria-label={ `${name}: ${value} of ${max}`}
      >

          <span className={ styles.label } title={ name }>
              { name }
          </span>

          <div className={ styles.dots} aria-hidden>

              { Array.from({ "length": max }, (_, i): React.JSX.Element => {

                  return <span
                      key={ i}
                      className={ i < value ? styles.dotFilled : styles.dotEmpty}
                  />;

              }) }

          </div>

    </div>;
}
