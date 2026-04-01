// deps
// externals
import React from "react";
// locals
import { Characteristics } from "./Characteristics";
// module
export function Abilities({ characteristics }) {
    const TALENTS = [
        "Athlétisme",
        "Bagarre",
        "Commandement",
        "Empathie",
        "Esquive",
        "Expression de la rue",
        "Expression",
        "Intimidation",
        "Subterfuge",
        "Vigilance"
    ];
    const SKILLS = [
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
    const KNOWLEDGES = [
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
    return React.createElement(Characteristics, { title: "Capacit\u00E9s", globalMinValue: 0, cols: [
            {
                "title": "Talents",
                "characteristics": TALENTS.map((attribute) => {
                    return {
                        "name": attribute,
                        "value": characteristics.find((characteristic) => {
                            return characteristic.name === attribute;
                        })?.value
                    };
                })
            },
            {
                "title": "Compétences",
                "characteristics": SKILLS.map((attribute) => {
                    return {
                        "name": attribute,
                        "value": characteristics.find((characteristic) => {
                            return characteristic.name === attribute;
                        })?.value
                    };
                })
            },
            {
                "title": "Connaissances",
                "characteristics": KNOWLEDGES.map((attribute) => {
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
