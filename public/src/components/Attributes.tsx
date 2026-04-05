// deps

    // externals
    import React from "react";
    import { useTranslation } from "react-i18next";

    // locals
    import { Characteristics } from "./Characteristics";

// types & interfaces

    // locals
    import type { Attribute, UsedCharacteristic, NamedUsedCharacteristic } from "../types";

    export interface AttributesProps {
        readonly "characteristics": UsedCharacteristic[];
    }

// module

export function Attributes ({
    characteristics
}: AttributesProps): React.JSX.Element {

    const { t } = useTranslation();

    const PHYSICAL: Attribute["physical"][] = [
        "strength",
        "dexterity",
        "stamina"
    ];

    const SOCIAL: Attribute["social"][] = [
        "charisma",
        "manipulation",
        "appearance"
    ];

    const MENTAL: Attribute["mental"][] = [
        "intelligence",
        "perception",
        "wits"
    ];

    return <Characteristics
        title={ t("characteristics.attributes.title") }
        globalMinValue={ 1 }
        cols={
            [
                {
                    "title": t("characteristics.attributes.physical.title"),
                    "characteristics": PHYSICAL.map((attribute: Attribute["physical"]): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": t(`characteristics.attributes.physical.${ attribute }`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": t("characteristics.attributes.social.title"),
                    "characteristics": SOCIAL.map((attribute: Attribute["social"]): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": t(`characteristics.attributes.social.${ attribute }`),
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": t("characteristics.attributes.mental.title"),
                    "characteristics": MENTAL.map((attribute: Attribute["mental"]): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": t(`characteristics.attributes.mental.${ attribute }`),
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
