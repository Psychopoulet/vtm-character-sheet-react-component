// deps

    // externals
    import React from "react";

    // locals
    import styles from "./NamedDotProgress.module.css";

// types & interfaces

    // locals
    import type { UsedCharacteristic } from "../types";

    export type NamedDotProgressProps = UsedCharacteristic & {
      /** Total dots in the track (default 5, common for attributes). */
      max?: number;
    };

// module

/**
 * Horizontal dot rating for a named stat (VTM-style OOOOO track).
 */
export function NamedDotProgress({
  name,
  value = 0,
  max = 5,
}: NamedDotProgressProps): React.JSX.Element {
  const safeMax = Math.max(1, max);
  const clamped = Math.min(Math.max(0, value), safeMax);

  return (
    <div
      className={[styles.row].filter(Boolean).join(" ")}
      role="group"
      aria-label={`${name}: ${clamped} of ${safeMax}`}
    >
      <span className={styles.label} title={name}>
        {name}
      </span>
      <div className={styles.dots} aria-hidden>
        {Array.from({ length: safeMax }, (_, i) => (
          <span
            key={i}
            className={i < clamped ? styles.dotFilled : styles.dotEmpty}
          />
        ))}
      </div>
    </div>
  );
}
