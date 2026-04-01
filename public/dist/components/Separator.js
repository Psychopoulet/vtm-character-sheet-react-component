// deps
// externals
import React from "react";
// locals
import styles from "./Separator.module.css";
export function Separator({ title }) {
    return React.createElement("div", { className: styles.wrap },
        React.createElement("span", { className: styles.line, "aria-hidden": true }),
        React.createElement("h2", { className: styles.title }, title),
        React.createElement("span", { className: styles.line, "aria-hidden": true }));
}
