// deps

    // externals
    import React from "react";
    import { useTranslation } from "react-i18next";

    // locals
    import { Characteristics } from "./Characteristics";

// types & interfaces

    // locals
    import type { AttributePhysical, AttributeSocial, AttributeMental, UsedCharacteristic, NamedUsedCharacteristic } from "../types";

    export interface AttributesProps {
        readonly "characteristics": UsedCharacteristic[];
    }

// module

export function Attributes ({
    characteristics
}: AttributesProps): React.JSX.Element {

    const { t } = useTranslation();

    const PHYSICAL: AttributePhysical[] = [
        "strength",
        "dexterity",
        "stamina"
    ];

    const SOCIAL: AttributeSocial[] = [
        "charisma",
        "manipulation",
        "appearance"
    ];

    const MENTAL: AttributeMental[] = [
        "intelligence",
        "perception",
        "wits"
    ];

    return <Characteristics
        title="Attributs"
        globalMinValue={ 1 }
        cols={
            [
                {
                    "title": t("characteristics.attributes.physical.title"),
                    "characteristics": PHYSICAL.map((attribute: AttributePhysical): NamedUsedCharacteristic => {

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
                    "characteristics": SOCIAL.map((attribute: AttributeSocial): NamedUsedCharacteristic => {

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
                    "characteristics": MENTAL.map((attribute: AttributeMental): NamedUsedCharacteristic => {

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
