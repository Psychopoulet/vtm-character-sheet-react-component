// deps
// externals
import React from "react";
// locals
import styles from "./BloodPool.module.css";
/** Classic Blood Pool  track is 1–40. */
export const BLOOD_POOL_MAX = 40;
// module
/** Blood pool grid: shows current vs max as filled / empty cells. */
export function BloodPool({ current, max }) {
    const safeMax = Math.max(0, Math.floor(max));
    const clamped = Math.min(Math.max(0, Math.floor(current)), safeMax);
    return (React.createElement("section", { className: [styles.wrap].filter(Boolean).join(" "), "aria-label": `Points de sang: ${clamped} of ${max}` },
        React.createElement("header", { className: styles.header },
            React.createElement("h3", { className: styles.title }, "Points de sang"),
            React.createElement("p", { className: styles.values },
                React.createElement("span", { className: styles.current }, clamped),
                React.createElement("span", { className: styles.sep }, "/"),
                React.createElement("span", { className: styles.max }, max))),
        React.createElement("div", { className: styles.grid, style: { gridTemplateColumns: `repeat(10, minmax(0, 1fr))` }, role: "presentation" }, Array.from({ length: BLOOD_POOL_MAX }, (_, i) => (React.createElement("span", { key: i, className: i < clamped ? styles.cellFilled : styles.cellEmpty, "aria-hidden": true }))))));
}
