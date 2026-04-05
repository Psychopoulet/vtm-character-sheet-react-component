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
      "Domination",
      "Force d'âme",
      "Présence",
      "Aliénation",
      "Célérité",
      "Occultation",
      "Occultisme"
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
                    "characteristics": DISCIPLINES.map((attribute: Advantage["discipline"]): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": t(`characteristics.advantages.disciplines.${ attribute }`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": t("characteristics.advantages.backgrounds.title"),
                    "characteristics": BACKGROUNDS.map((attribute: Advantage["background"]): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": t(`characteristics.advantages.backgrounds.${ attribute }`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": t("characteristics.advantages.virtues.title"),
                    "minValue": 1,
                    "characteristics": VIRTUES.map((attribute: Advantage["virtue"]): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": t(`characteristics.advantages.virtues.${ attribute }`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === attribute;
                            })?.value
                        };

                    })
                }
            ]
        }
    />;

}
