// deps

    // externals
    import React from "react";
    import { useTranslation } from "react-i18next";

    // locals
    import { Characteristics } from "./Characteristics";

// types & interfaces

    // locals
    import type { Advantage, UsedCharacteristic, NamedUsedCharacteristic } from "../types";

    export interface AdvantagesProps {
        readonly "characteristics": UsedCharacteristic[];
    }

// module

export function Advantages ({
    characteristics
}: AdvantagesProps): React.JSX.Element {

    const { t } = useTranslation();

    const DISCIPLINES: Advantage["discipline"][] = [
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

    const BACKGROUNDS: Advantage["background"][] = [
      "Troupeau",
      "Génération",
      "Ressources",
      "Concacts",
      "Influence",
      "Statut",
      "Alliés",
      "Mentor"
    ];

    const VIRTUES: Advantage["virtue"][] = [
      "Conscience/Conviction",
      "Maîtrise de soi / Instinct",
      "Courage"
    ];

    return <Characteristics
        title={ t("characteristics.advantages.title") }
        globalMinValue={ 0 }
        cols={
            [
                {
                    "title": t("characteristics.advantages.disciplines.title"),
                    "characteristics": DISCIPLINES.filter((advantage: Advantage["discipline"]): boolean => {

                        return characteristics.some((characteristic: UsedCharacteristic): boolean => {
                            return characteristic.code === advantage;
                        });

                    }).map((advantage: Advantage["discipline"]): NamedUsedCharacteristic => {

                        return {
                            "code": advantage,
                            "name": t(`characteristics.advantages.disciplines.${ advantage }`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === advantage;
                            })?.value
                        };

                    })
                },
                {
                    "title": t("characteristics.advantages.backgrounds.title"),
                    "characteristics": BACKGROUNDS.filter((advantage: Advantage["background"]): boolean => {

                        return characteristics.some((characteristic: UsedCharacteristic): boolean => {
                            return characteristic.code === advantage;
                        });

                    }).map((advantage: Advantage["background"]): NamedUsedCharacteristic => {

                        return {
                            "code": advantage,
                            "name": t(`characteristics.advantages.backgrounds.${ advantage }`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === advantage;
                            })?.value
                        };

                    })
                },
                {
                    "title": t("characteristics.advantages.virtues.title"),
                    "minValue": 1,
                    "characteristics": VIRTUES.filter((advantage: Advantage["virtue"]): boolean => {

                        return characteristics.some((characteristic: UsedCharacteristic): boolean => {
                            return characteristic.code === advantage;
                        });

                    }).map((advantage: Advantage["virtue"]): NamedUsedCharacteristic => {

                        return {
                            "code": advantage,
                            "name": t(`characteristics.advantages.virtues.${ advantage }`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === advantage;
                            })?.value
                        };

                    })
                }
            ]
        }
    />;

}
