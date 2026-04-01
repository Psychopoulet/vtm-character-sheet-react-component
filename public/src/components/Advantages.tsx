// deps

    // externals
    import React from "react";

    // locals
    import { Characteristics } from "./Characteristics";

// types & interfaces

    // locals
    import type { AdvantageDiscipline, AdvantageBackground, AdvantageVirtues, UsedCharacteristic } from "../types";

    export interface AdvantagesProps {
        readonly "characteristics": UsedCharacteristic[];
    }

// module

export function Advantages ({
    characteristics
}: AdvantagesProps): React.JSX.Element {

    const DISCIPLINES: AdvantageDiscipline[] = [
      "Domination",
      "Force d'âme",
      "Présence",
      "Aliénation",
      "Célérité",
      "Occultation",
      "Occultisme"
    ];

    const BACKGROUNDS: AdvantageBackground[] = [
      "Troupeau",
      "Génération",
      "Ressources",
      "Concacts",
      "Influence",
      "Statut",
      "Alliés",
      "Mentor"
    ];

    const VIRTUES: AdvantageVirtues[] = [
      "Conscience/Conviction",
      "Maîtrise de soi / Instinct",
      "Courage"
    ];

    return <Characteristics
        title="Capacités"
        globalMinValue={ 0 }
        cols={
            [
                {
                    "title": "Disciplines",
                    "characteristics": DISCIPLINES.map((attribute: AdvantageDiscipline): UsedCharacteristic => {

                        return {
                            "name": attribute,
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.name === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": "Historiques",
                    "characteristics": BACKGROUNDS.map((attribute: AdvantageBackground): UsedCharacteristic => {

                        return {
                            "name": attribute,
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.name === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": "Vertus",
                    "minValue": 1,
                    "characteristics": VIRTUES.map((attribute: AdvantageVirtues): UsedCharacteristic => {

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
