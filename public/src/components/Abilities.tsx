// deps

    // externals
    import React from "react";
    import { useTranslation } from "react-i18next";

    // locals
    import { Characteristics } from "./Characteristics";

// types & interfaces

    // locals
    import type { Ability, UsedCharacteristic, NamedUsedCharacteristic } from "../types";

    export interface AbilitiesProps {
        readonly "characteristics": UsedCharacteristic[];
    }

// module

export function Abilities ({
    characteristics
}: AbilitiesProps): React.JSX.Element {

    const { t } = useTranslation();

    const TALENTS: Ability["talent"][] = [
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

    const SKILLS: Ability["skill"][] = [
      "Animaux",
      "Armes à feu",
      "Artisanat",
      "Conduite",
      "Etiquette",
      "Furtivité",
      "Mêlée",
      "Représentation",
      "Sécurité",
      "Survie"
    ];

    const KNOWLEDGES: Ability["knowledge"][] = [
      "Erudition",
      "Finance",
      "Informatique",
      "Investigation",
      "Loi",
      "Médecine",
      "Linguistique",
      "Occultisme",
      "Politique",
      "Science"
    ];

    return <Characteristics
        title={ t("characteristics.abilities.title") }
        globalMinValue={ 0 }
        cols={
            [
                {
                    "title": t("characteristics.abilities.talents.title"),
                    "characteristics": TALENTS.map((attribute: Ability["talent"]): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": t(`characteristics.abilities.talents.${ attribute }`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": t("characteristics.abilities.skills.title"),
                    "characteristics": SKILLS.map((attribute: Ability["skill"]): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": t(`characteristics.abilities.skills.${ attribute }`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": t("characteristics.abilities.knowledges.title"),
                    "characteristics": KNOWLEDGES.map((attribute: Ability["knowledge"]): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": t(`characteristics.abilities.knowledges.${ attribute }`),
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
