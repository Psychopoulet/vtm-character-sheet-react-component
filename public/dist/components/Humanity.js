// deps
// externals
import React from "react";
import { useTranslation } from "react-i18next";
// locals
import styles from "./Humanity.module.css";
/** Classic Humanity / Path track is 1–10. */
export const HUMANITY_MAX = 10;
// module
/**
 * Humanity track: ten positions, filled from the left up to the current rating (VTM-style).
 */
export function Humanity({ value }) {
    const { t } = useTranslation();
    return React.createElement("section", { className: styles.wrap, "aria-label": t("characteristics.humanity") + `: ${value} of ${HUMANITY_MAX}` },
        React.createElement("header", { className: styles.header },
            React.createElement("h3", { className: styles.title }, t("characteristics.humanity")),
            React.createElement("p", { className: styles.values },
                React.createElement("span", { className: styles.current }, value),
                React.createElement("span", { className: styles.sep }, "/"),
                React.createElement("span", { className: styles.max }, HUMANITY_MAX))),
        React.createElement("div", { className: styles.grid, role: "presentation" }, Array.from({ "length": HUMANITY_MAX }, (_, i) => {
            return React.createElement("span", { key: i, className: i < value ? styles.cellFilled : styles.cellEmpty, "aria-hidden": true });
        })));
}
