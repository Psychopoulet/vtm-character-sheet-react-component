// deps
// externals
import React from "react";
// locals
import styles from "./Characteristics.module.css";
import { NamedDotProgress } from "./NamedDotProgress";
import { Separator } from "./Separator";
// module
export function Characteristics({ title, globalMinValue, cols, }) {
    return React.createElement("section", { className: styles.section, "aria-label": "Characteristics" },
        React.createElement(Separator, { title: title }),
        React.createElement("div", { className: styles.columns }, cols.map((col) => {
            return React.createElement("div", { className: styles.list },
                React.createElement("h3", { className: styles.subTitle }, col.title),
                col.characteristics.map((characteristic, index) => {
                    return React.createElement(NamedDotProgress, { key: index, name: characteristic.name, value: characteristic.value ?? col.minValue ?? globalMinValue, max: 5 });
                }));
        })));
}
