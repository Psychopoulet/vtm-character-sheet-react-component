// deps
// externals
import React from "react";
// locals
import styles from "./NamedDotProgress.module.css";
// module
/**
 * Horizontal dot rating for a named stat (VTM-style OOOOO track).
 */
export function NamedDotProgress({ name, value = 0, max = 5 }) {
    return React.createElement("div", { className: styles.row, role: "group", "aria-label": `${name}: ${value} of ${max}` },
        React.createElement("span", { className: styles.label, title: name }, name),
        React.createElement("div", { className: styles.dots, "aria-hidden": true }, Array.from({ "length": max }, (_, i) => {
            return React.createElement("span", { key: i, className: i < value ? styles.dotFilled : styles.dotEmpty });
        })));
}
