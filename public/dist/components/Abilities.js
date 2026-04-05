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
        "awareness",
        "brawl",
        "dodge",
        "empathy",
        "expression",
        "intimidation",
        "leadership",
        "streetwise",
        "subterfuge"
    ];
    const SKILLS = [
        "animal_ken",
        "crafts",
        "etiquette",
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
                "characteristics": TALENTS.map((attribute) => {
                    return {
                        "code": attribute,
                        "name": t(`characteristics.abilities.talents.${attribute}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === attribute;
                        })?.value
                    };
                })
            },
            {
                "title": t("characteristics.abilities.skills.title"),
                "characteristics": SKILLS.map((attribute) => {
                    return {
                        "code": attribute,
                        "name": t(`characteristics.abilities.skills.${attribute}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === attribute;
                        })?.value
                    };
                })
            },
            {
                "title": t("characteristics.abilities.knowledges.title"),
                "characteristics": KNOWLEDGES.map((attribute) => {
                    return {
                        "code": attribute,
                        "name": t(`characteristics.abilities.knowledges.${attribute}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === attribute;
                        })?.value
                    };
                })
            }
        ] });
}
