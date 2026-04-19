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

    const TALENTS: Array<Ability["talent"]> = [
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

    const SKILLS: Array<Ability["skill"]> = [
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

    const KNOWLEDGES: Array<Ability["knowledge"]> = [
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

    return <Characteristics
        title={ t("characteristics.abilities.title") }
        globalMinValue={ 0 }
        cols={
            [
                {
                    "title": t("characteristics.abilities.talents.title"),
                    "characteristics": TALENTS.map((ability: Ability["talent"]): NamedUsedCharacteristic => {

                        return {
                            "code": ability,
                            "name": t(`characteristics.abilities.talents.${ability}`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === ability;
                            })?.value ?? 0
                        };

                    })
                },
                {
                    "title": t("characteristics.abilities.skills.title"),
                    "characteristics": SKILLS.map((ability: Ability["skill"]): NamedUsedCharacteristic => {

                        return {
                            "code": ability,
                            "name": t(`characteristics.abilities.skills.${ability}`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === ability;
                            })?.value ?? 0
                        };

                    })
                },
                {
                    "title": t("characteristics.abilities.knowledges.title"),
                    "characteristics": KNOWLEDGES.map((ability: Ability["knowledge"]): NamedUsedCharacteristic => {

                        return {
                            "code": ability,
                            "name": t(`characteristics.abilities.knowledges.${ability}`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === ability;
                            })?.value ?? 0
                        };

                    })
                }
            ]
        }
    />;

}
