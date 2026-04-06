// deps

    // externals
    import React from "react";
    import { useTranslation } from "react-i18next";

    // locals
    import styles from "./Willpower.module.css";
    import type { WillpowerValue } from "../types";

    export interface WillpowerProps {

      /** Temporary Willpower remaining (filled cells from the start). */
      "current": number;

      /** Permanent Willpower rating (pool size). */
      "max": number;

      /** Columns in the grid (default 10, matches classic sheet rows). */
      "columns"?: number;

    }

    /** Classic Willpower / Path track is 1–10. */
    export const WILLPOWER_MAX = 10;

// module

/**
 * Willpower pool: filled vs empty circles for current temporary Willpower vs permanent maximum.
 */
export function Willpower ({
  current,
  max
}: WillpowerProps): React.JSX.Element {

  const { t } = useTranslation();

  const safeMax = Math.max(0, Math.floor(max));
  const clamped = Math.min(Math.max(0, Math.floor(current)), safeMax);

  return <section
      className={ styles.wrap }
      aria-label={ t("characteristics.willpower") + `: ${clamped} of ${safeMax}` }
    >

      <header className={styles.header}>

        <h3 className={styles.title}>{ t("characteristics.willpower") }</h3>

        <p className={styles.values}>
          <span className={styles.current}>{clamped}</span>
          <span className={styles.sep}>/</span>
          <span className={styles.max}>{safeMax}</span>
        </p>

      </header>

      <div
        className={ styles.grid }
        role="presentation"
      >

        {Array.from({ "length": WILLPOWER_MAX }, (_: number, i: number) => {

          return <span
              key={i}
              className={i < clamped ? styles.cellFilled : styles.cellEmpty}
              aria-hidden
            />;

        })}

      </div>

    </section>;

}
