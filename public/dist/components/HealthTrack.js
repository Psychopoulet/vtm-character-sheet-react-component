// deps
// externals
import React from "react";
import { useTranslation } from "react-i18next";
// locals
import styles from "./HealthTrack.module.css";
// consts
const TRAITS_PER_BOX = 3;
const DEFAULT_STAGES = [
    { "label": "Bruised", "boxes": [{ "traits": 0 }], "penalty": "" },
    { "label": "Hurt", "boxes": [{ "traits": 0 }], "penalty": "-1" },
    { "label": "Injured", "boxes": [{ "traits": 0 }], "penalty": "-1" },
    { "label": "Wounded", "boxes": [{ "traits": 0 }], "penalty": "-2" },
    { "label": "Mauled", "boxes": [{ "traits": 0 }], "penalty": "-2" },
    { "label": "Crippled", "boxes": [{ "traits": 0 }], "penalty": "-5" },
    { "label": "Incapacitated", "boxes": [{ "traits": 0 }], "penalty": "" }
];
// private
function clampTraits(n) {
    return Math.min(Math.max(0, Math.floor(n)), TRAITS_PER_BOX);
}
function countSlots(stages) {
    return stages.reduce((acc, stage) => {
        return acc + (Math.max(1, stage.boxes.length) * TRAITS_PER_BOX);
    }, 0);
}
/** Mark health slots left-to-right to mirror the printed VTM sheet strip. */
function applyDamage(template, totalDamage) {
    let remaining = Math.max(0, Math.floor(totalDamage));
    remaining = Math.min(remaining, countSlots(template));
    return template.map((stage) => {
        return {
            ...stage,
            "boxes": (0 < stage.boxes.length ? stage.boxes : [{ "traits": 0 }]).map((box) => {
                const assigned = Math.min(TRAITS_PER_BOX, remaining);
                remaining = Math.max(0, remaining - assigned);
                return { ...box, "traits": assigned };
            })
        };
    });
}
function BoxCell({ traits }) {
    const level = clampTraits(traits);
    return React.createElement("div", { className: styles.marker, role: "group", "aria-label": `Health box with ${level} of ${TRAITS_PER_BOX} damages` },
        React.createElement("div", { className: styles.traits, "aria-hidden": true }, Array.from({ "length": TRAITS_PER_BOX }, (_, i) => {
            return React.createElement("span", { key: i, className: i < level ? styles.traitOn : styles.traitOff });
        })));
}
// module
/** Classic health strip with wound penalties matching the official PDF order. */
export function HealthTrack({ dammages, stages = DEFAULT_STAGES, className }) {
    const { t } = useTranslation();
    const normalizedStages = stages.map((stage) => {
        return {
            ...stage,
            "boxes": 0 < stage.boxes.length ? stage.boxes : [{ "traits": 0 }]
        };
    });
    const rendered = applyDamage(normalizedStages, dammages);
    const maxDamage = countSlots(normalizedStages);
    const filled = Math.min(Math.max(0, Math.floor(dammages)), maxDamage);
    return React.createElement("section", { className: [styles.wrap, className].join(" "), "aria-label": `Health track, ${filled} of ${maxDamage} levels marked` },
        React.createElement("h3", { className: styles.title },
            " ",
            t("health"),
            " "),
        React.createElement("div", { className: styles.table }, rendered.map((stage) => {
            return React.createElement("div", { key: stage.label, className: styles.row },
                React.createElement("div", { className: styles.stageLabel }, stage.label),
                React.createElement("div", { className: styles.penalty }, stage.penalty ?? ""),
                React.createElement("div", { className: styles.markerRow }, stage.boxes.map((box, i) => {
                    return React.createElement(BoxCell, { key: `${stage.label}-${i}`, traits: box.traits });
                })));
        })));
}
export { TRAITS_PER_BOX };
