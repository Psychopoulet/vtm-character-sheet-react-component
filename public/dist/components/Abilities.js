// deps
// externals
import React from "react";
import { useTranslation } from "react-i18next";
// locals
import { Characteristics } from "./Characteristics";
// module
export function Abilities({ characteristics }) {
    const { t } = useTranslation();
    const TALENTS = [
        "alertness",
        "athletics",
        "brawl",
        "dodge",
        "empathy",
        "expression",
        "intimidation",
        "leadership",
        "legerdemain",
        "streetwise",
        "subterfuge"
    ];
    const SKILLS = [
        "animal_ken",
        "crafts",
        "etiquette",
        "drive",
        "firearms",
        "larceny",
        "melee",
        "performance",
        "ride",
        "stealth",
        "survival"
    ];
    const KNOWLEDGES = [
        "academics",
        "awareness",
        "enigmas",
        "finance",
        "investigation",
        "law",
        "linguistics",
        "medicine",
        "occult",
        "politics",
        "science",
        "technology"
    ];
    return React.createElement(Characteristics, { title: t("characteristics.abilities.title"), globalMinValue: 0, cols: [
            {
                "title": t("characteristics.abilities.talents.title"),
                "characteristics": TALENTS.map((ability) => {
                    return {
                        "code": ability,
                        "name": t(`characteristics.abilities.talents.${ability}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === ability;
                        })?.value
                    };
                })
            },
            {
                "title": t("characteristics.abilities.skills.title"),
                "characteristics": SKILLS.map((ability) => {
                    return {
                        "code": ability,
                        "name": t(`characteristics.abilities.skills.${ability}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === ability;
                        })?.value
                    };
                })
            },
            {
                "title": t("characteristics.abilities.knowledges.title"),
                "characteristics": KNOWLEDGES.map((ability) => {
                    return {
                        "code": ability,
                        "name": t(`characteristics.abilities.knowledges.${ability}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === ability;
                        })?.value
                    };
                })
            }
        ] });
}
