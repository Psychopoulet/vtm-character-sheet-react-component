// deps
// externals
import React from "react";
// locals
import { Characteristics } from "./Characteristics";
// module
export function Attributes({ characteristics }) {
    const PHYSICAL = [
        "Force",
        "Dextérité",
        "Vigueur"
    ];
    const SOCIAL = [
        "Charisme",
        "Manipulation",
        "Apparence"
    ];
    const MENTAL = [
        "Intelligence",
        "Perception",
        "Astuce"
    ];
    return React.createElement(Characteristics, { title: "Attributs", globalMinValue: 1, cols: [
            {
                "title": "Physique",
                "characteristics": PHYSICAL.map((attribute) => {
                    return {
                        "name": attribute,
                        "value": characteristics.find((characteristic) => {
                            return characteristic.name === attribute;
                        })?.value
                    };
                })
            },
            {
                "title": "Social",
                "characteristics": SOCIAL.map((attribute) => {
                    return {
                        "name": attribute,
                        "value": characteristics.find((characteristic) => {
                            return characteristic.name === attribute;
                        })?.value
                    };
                })
            },
            {
                "title": "Mental",
                "characteristics": MENTAL.map((attribute) => {
                    return {
                        "name": attribute,
                        "value": characteristics.find((characteristic) => {
                            return characteristic.name === attribute;
                        })?.value
                    };
                })
            }
        ] });
}
