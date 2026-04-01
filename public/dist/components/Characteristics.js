// deps
// externals
import React from "react";
// locals
import styles from "./Characteristics.module.css";
import { NamedDotProgress } from "./NamedDotProgress";
import { Separator } from "./Separator";
// module
export function Characteristics({ title, globalMinValue, cols }) {
    return React.createElement("section", { className: styles.section, "aria-label": "Characteristics" },
        React.createElement(Separator, { title: title }),
        React.createElement("div", { className: styles.columns }, cols.map((col, colIndex) => {
            return React.createElement("div", { key: colIndex, className: styles.list },
                React.createElement("h3", { className: styles.subTitle }, col.title),
                col.characteristics.map((characteristic, characteristicIndex) => {
                    return React.createElement(NamedDotProgress, { key: characteristicIndex, name: characteristic.name, value: characteristic.value ?? col.minValue ?? globalMinValue, max: 5 });
                }));
        })));
}
