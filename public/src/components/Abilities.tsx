// deps

    // externals
    import React from "react";

    // locals
    import { Characteristics } from "./Characteristics";

// types & interfaces

    // locals
    import type { AbilityTalent, AbilitySkill, AbilityKnowledge, UsedCharacteristic, NamedUsedCharacteristic } from "../types";

    export interface AbilitiesProps {
        readonly "characteristics": UsedCharacteristic[];
    }

// module

export function Abilities ({
    characteristics
}: AbilitiesProps): React.JSX.Element {

    const TALENTS: AbilityTalent[] = [
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

    const SKILLS: AbilitySkill[] = [
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

    const KNOWLEDGES: AbilityKnowledge[] = [
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
        title="Capacités"
        globalMinValue={ 0 }
        cols={
            [
                {
                    "title": "Talents",
                    "characteristics": TALENTS.map((attribute: AbilityTalent): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": attribute,
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": "Compétences",
                    "characteristics": SKILLS.map((attribute: AbilitySkill): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": attribute,
                            "value": characteristics.find((characteristic: UsedCharacteristic) => {
                                return characteristic.code === attribute;
                            })?.value
                        };

                    })
                },
                {
                    "title": "Connaissances",
                    "characteristics": KNOWLEDGES.map((attribute: AbilityKnowledge): NamedUsedCharacteristic => {

                        return {
                            "code": attribute,
                            "name": attribute,
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
