// deps
// externals
import React from "react";
// locals
import styles from "./Humanity.module.css";
/** Classic Humanity / Path track is 1–10. */
export const HUMANITY_MAX = 10;
// module
/**
 * Humanity track: ten positions, filled from the left up to the current rating (VTM-style).
 */
export function Humanity({ value, }) {
    const clamped = Math.min(Math.max(0, Math.floor(value)), HUMANITY_MAX);
    return React.createElement("section", { className: styles.wrap, "aria-label": `Humanity: ${clamped} of ${HUMANITY_MAX}` },
        React.createElement("header", { className: styles.header },
            React.createElement("h3", { className: styles.title }, "Humanit\u00E9"),
            React.createElement("p", { className: styles.values },
                React.createElement("span", { className: styles.current }, clamped),
                React.createElement("span", { className: styles.sep }, "/"),
                React.createElement("span", { className: styles.max }, HUMANITY_MAX))),
        React.createElement("div", { className: styles.grid, style: {
                gridTemplateColumns: `repeat(${HUMANITY_MAX}, minmax(0, 1fr))`,
            }, role: "presentation" }, Array.from({ length: HUMANITY_MAX }, (_, i) => (React.createElement("span", { key: i, className: i < clamped ? styles.cellFilled : styles.cellEmpty, "aria-hidden": true })))));
}
