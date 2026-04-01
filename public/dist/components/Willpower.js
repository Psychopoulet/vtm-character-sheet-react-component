// deps
// externals
import React from "react";
// locals
import styles from "./Willpower.module.css";
/** Classic Willpower / Path track is 1–10. */
export const WILLPOWER_MAX = 10;
// module
/**
 * Willpower pool: filled vs empty circles for current temporary Willpower vs permanent maximum.
 */
export function Willpower({ current, max }) {
    const safeMax = Math.max(0, Math.floor(max));
    const clamped = Math.min(Math.max(0, Math.floor(current)), safeMax);
    return React.createElement("section", { className: styles.wrap, "aria-label": `Willpower: ${clamped} of ${safeMax}` },
        React.createElement("header", { className: styles.header },
            React.createElement("h3", { className: styles.title }, "Volont\u00E9"),
            React.createElement("p", { className: styles.values },
                React.createElement("span", { className: styles.current }, clamped),
                React.createElement("span", { className: styles.sep }, "/"),
                React.createElement("span", { className: styles.max }, safeMax))),
        React.createElement("div", { className: styles.grid, role: "presentation" }, Array.from({ "length": WILLPOWER_MAX }, (_, i) => {
            return React.createElement("span", { key: i, className: i < clamped ? styles.cellFilled : styles.cellEmpty, "aria-hidden": true });
        })));
}
