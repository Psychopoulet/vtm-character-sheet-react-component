// deps
// externals
import React from "react";
// locals
import styles from "./CharacterSheet.module.css";
import language from "../languages/fr-fr.json";
import { BloodPool } from "./BloodPool";
import { Humanity } from "./Humanity";
import { Willpower } from "./Willpower";
import { HealthTrack } from "./HealthTrack";
import { Attributes } from "./Attributes";
import { Abilities } from "./Abilities";
import { Advantages } from "./Advantages";
// module
/** Example layout inspired by the classic VTM sheet PDF (header + sample tracks). */
export function CharacterSheet({ name, player, secte, clan, characteristics = [], bloodPool = {
    current: 15,
    characterMax: 15,
}, humanity = 7, willpower = {
    current: 5,
    characterMax: 6,
}, dammages = 0, }) {
    return (React.createElement("article", { className: [styles.sheet].filter(Boolean).join(" "), "aria-label": "Character sheet" },
        React.createElement("header", { className: styles.header },
            React.createElement("div", { className: styles.fieldPair },
                React.createElement("span", { className: styles.fieldLabel }, language.name),
                React.createElement("span", { className: styles.fieldLine }, name)),
            React.createElement("div", { className: styles.fieldPair },
                React.createElement("span", { className: styles.fieldLabel }, language.player),
                React.createElement("span", { className: styles.fieldLine }, player)),
            React.createElement("div", { className: styles.fieldPair },
                React.createElement("span", { className: styles.fieldLabel }, language.clan),
                React.createElement("span", { className: styles.fieldLine }, clan)),
            React.createElement("div", { className: styles.fieldPair },
                React.createElement("span", { className: styles.fieldLabel }, language.secte),
                React.createElement("span", { className: styles.fieldLine }, secte))),
        React.createElement(Attributes, { characteristics: characteristics }),
        React.createElement(Abilities, { characteristics: characteristics }),
        React.createElement(Advantages, { characteristics: characteristics }),
        React.createElement("div", { className: styles.twoCol },
            React.createElement("div", { className: styles.sheetCol },
                React.createElement(Humanity, { value: humanity }),
                React.createElement(Willpower, { current: willpower.current ?? willpower.characterMax ?? 6, max: willpower.characterMax ?? 6 }),
                React.createElement(BloodPool, { current: bloodPool.current ?? bloodPool.characterMax ?? 15, max: bloodPool.characterMax ?? 15 })),
            React.createElement(HealthTrack, { dammages: dammages }))));
}
