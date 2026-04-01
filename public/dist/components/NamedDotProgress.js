// deps
// externals
import React from "react";
// locals
import styles from "./NamedDotProgress.module.css";
// module
/**
 * Horizontal dot rating for a named stat (VTM-style OOOOO track).
 */
export function NamedDotProgress({ name, value = 0, max = 5, }) {
    const safeMax = Math.max(1, max);
    const clamped = Math.min(Math.max(0, value), safeMax);
    return (React.createElement("div", { className: [styles.row].filter(Boolean).join(" "), role: "group", "aria-label": `${name}: ${clamped} of ${safeMax}` },
        React.createElement("span", { className: styles.label, title: name }, name),
        React.createElement("div", { className: styles.dots, "aria-hidden": true }, Array.from({ length: safeMax }, (_, i) => (React.createElement("span", { key: i, className: i < clamped ? styles.dotFilled : styles.dotEmpty }))))));
}
