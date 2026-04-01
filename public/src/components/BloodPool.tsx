// deps

    // externals
    import React from "react";

    // locals
    import styles from "./BloodPool.module.css";

    export interface BloodPoolProps {

      /** Current blood in the pool (filled cells from the start of the grid, e.g. remaining points). */
      "current": number;

      /** Maximum blood pool capacity for the character. */
      "max": number;

    }

    /** Classic Blood Pool  track is 1–40. */
    export const BLOOD_POOL_MAX = 40;

// module

/** Blood pool grid: shows current vs max as filled / empty cells. */
export function BloodPool ({
  current,
  max
}: BloodPoolProps): React.JSX.Element {

  const safeMax = Math.max(0, Math.floor(max));
  const clamped = Math.min(Math.max(0, Math.floor(current)), safeMax);

  return (

    <section
      className={ styles.wrap }
      aria-label={`Points de sang: ${clamped} of ${max}`}
    >

      <header className={styles.header}>

        <h3 className={styles.title}>Points de sang</h3>

        <p className={styles.values}>
          <span className={styles.current}>{clamped}</span>
          <span className={styles.sep}>/</span>
          <span className={styles.max}>{max}</span>
        </p>

      </header>

      <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(10, minmax(0, 1fr))` }}
        role="presentation"
      >

        {Array.from({ length: BLOOD_POOL_MAX }, (_, i) => (
          <span
            key={i}
            className={i < clamped ? styles.cellFilled : styles.cellEmpty}
            aria-hidden
          />
        ))}
      </div>

    </section>

  );
}
