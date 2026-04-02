// deps
// externals
import React from "react";
// locals
import { Characteristics } from "./Characteristics";
// module
export function Advantages({ characteristics }) {
    const DISCIPLINES = [
        "Domination",
        "Force d'âme",
        "Présence",
        "Aliénation",
        "Célérité",
        "Occultation",
        "Occultisme"
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
    return React.createElement(Characteristics, { title: "Capacit\u00E9s", globalMinValue: 0, cols: [
            {
                "title": "Disciplines",
                "characteristics": DISCIPLINES.map((attribute) => {
                    return {
                        "code": attribute,
                        "name": attribute,
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === attribute;
                        })?.value
                    };
                })
            },
            {
                "title": "Historiques",
                "characteristics": BACKGROUNDS.map((attribute) => {
                    return {
                        "code": attribute,
                        "name": attribute,
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === attribute;
                        })?.value
                    };
                })
            },
            {
                "title": "Vertus",
                "minValue": 1,
                "characteristics": VIRTUES.map((attribute) => {
                    return {
                        "code": attribute,
                        "name": attribute,
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === attribute;
                        })?.value
                    };
                })
            }
        ] });
}
