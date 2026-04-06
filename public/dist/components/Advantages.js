// deps
// externals
import React from "react";
import { useTranslation } from "react-i18next";
// locals
import { Characteristics } from "./Characteristics";
// module
export function Advantages({ characteristics }) {
    const { t } = useTranslation();
    const DISCIPLINES = [
        "alienation",
        "animalism",
        "auspex",
        "bardo",
        "celerity",
        "chimery",
        "daimoinon",
        "domination",
        "fortitude",
        "kineticism",
        "melpominee",
        "mytherceria",
        "necromancy",
        "obeah",
        "obtenebration",
        "occultation",
        "ogham",
        "potence",
        "presence",
        "protean",
        "quietus",
        "sanguinus",
        "serpentis",
        "spiritus",
        "temporis",
        "thanatose",
        "thaumaturgy",
        "valeren",
        "vicissitude",
        "visceratika"
    ];
    const BACKGROUNDS = [
        "Troupeau",
        "Génération",
        "Ressources",
        "Concacts",
        "Influence",
        "Statut",
        "Alliés",
        "Mentor"
    ];
    const VIRTUES = [
        "Conscience/Conviction",
        "Maîtrise de soi / Instinct",
        "Courage"
    ];
    return React.createElement(Characteristics, { title: t("characteristics.advantages.title"), globalMinValue: 0, cols: [
            {
                "title": t("characteristics.advantages.disciplines.title"),
                "characteristics": DISCIPLINES.filter((advantage) => {
                    return characteristics.some((characteristic) => {
                        return characteristic.code === advantage;
                    });
                }).map((advantage) => {
                    return {
                        "code": advantage,
                        "name": t(`characteristics.advantages.disciplines.${advantage}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === advantage;
                        })?.value
                    };
                })
            },
            {
                "title": t("characteristics.advantages.backgrounds.title"),
                "characteristics": BACKGROUNDS.filter((advantage) => {
                    return characteristics.some((characteristic) => {
                        return characteristic.code === advantage;
                    });
                }).map((advantage) => {
                    return {
                        "code": advantage,
                        "name": t(`characteristics.advantages.backgrounds.${advantage}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === advantage;
                        })?.value
                    };
                })
            },
            {
                "title": t("characteristics.advantages.virtues.title"),
                "minValue": 1,
                "characteristics": VIRTUES.filter((advantage) => {
                    return characteristics.some((characteristic) => {
                        return characteristic.code === advantage;
                    });
                }).map((advantage) => {
                    return {
                        "code": advantage,
                        "name": t(`characteristics.advantages.virtues.${advantage}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === advantage;
                        })?.value
                    };
                })
            }
        ] });
}
