// deps
// externals
import React from "react";
import { useTranslation } from "react-i18next";
// locals
import styles from "./BloodPool.module.css";
/** Classic Blood Pool  track is 1–40. */
export const BLOOD_POOL_MAX = 40;
// module
/** Blood pool grid: shows current vs max as filled / empty cells. */
export function BloodPool({ current, max }) {
    const { t } = useTranslation();
    return React.createElement("section", { className: styles.wrap, "aria-label": t("bloodpool") + `: ${current} of ${max}` },
        React.createElement("header", { className: styles.header },
            React.createElement("h3", { className: styles.title },
                " ",
                t("bloodpool"),
                " "),
            React.createElement("p", { className: styles.values },
                React.createElement("span", { className: styles.current }, current),
                React.createElement("span", { className: styles.sep }, "/"),
                React.createElement("span", { className: styles.max }, max))),
        React.createElement("div", { className: styles.grid, role: "presentation" }, Array.from({ "length": BLOOD_POOL_MAX }, (_, i) => {
            return React.createElement("span", { key: i, className: i < current ? styles.cellFilled : styles.cellEmpty, "aria-hidden": true });
        })));
}
