// deps

    // externals
    import React from "react";

    // locals
    import { Characteristics } from "./Characteristics";

// types & interfaces

    // locals
    import type { AttributePhysical, AttributeSocial, AttributeMental, UsedCharacteristic } from "../types";

    export interface AttributesProps {
        readonly "characteristics": UsedCharacteristic[];
    }

// module

export function Attributes ({
    characteristics
}: AttributesProps): React.JSX.Element {

    const PHYSICAL: AttributePhysical[] = [
        "Force",
        "Dextérité",
        "Vigueur"
    ];

    const SOCIAL: AttributeSocial[] = [
        "Charisme",
        "Manipulation",
        "Apparence"
    ];

    const MENTAL: AttributeMental[] = [
        "Intelligence",
        "Perception",
        "Astuce"
    ];

    return <Characteristics
        title="Attributs"
        globalMinValue={ 1 }
        cols={
            [
                {
                    "title": "Physique",
                    "characteristics": PHYSICAL.map((attribute: AttributePhysical): UsedCharacteristic => {

                        return {
                            "name": attribute,
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.name === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": "Social",
                    "characteristics": SOCIAL.map((attribute: AttributeSocial): UsedCharacteristic => {

                        return {
                            "name": attribute,
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.name === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": "Mental",
                    "characteristics": MENTAL.map((attribute: AttributeMental): UsedCharacteristic => {

                        return {
                            "name": attribute,
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.name === attribute;
                            })?.value
                        };

                    })
                }
            ]
        }
    />;

}
