// deps

    // externals
    import React from "react";
    import { useTranslation } from "react-i18next";

    // locals
    import styles from "./CharacterSheet.module.scss";
    import { BloodPool } from "./BloodPool";
    import { Humanity } from "./Humanity";
    import { Willpower } from "./Willpower";
    import { HealthTrack } from "./HealthTrack";
    import { Attributes } from "./Attributes";
    import { Abilities } from "./Abilities";
    import { Advantages } from "./Advantages";

// types & interfaces

    // locals
    import type {
        Secte, Clan, Nature, // Concept,
        GenerationValue, BloodValue, HumanityValue, WillpowerValue, ExperienceValue,
        UsedCharacteristic
    } from "../types";

    export interface CharacterSheetProps {
        "name": string;
        "player": string;
        "secte": Secte;
        "clan": Clan;
        "nature": Nature;
        "demeanor": Nature;
        // "concept": Concept;
        "generation": GenerationValue;
        "characteristics"?: UsedCharacteristic[];
        "bloodPool"?: {
            "current"?: BloodValue;
            "characterMax"?: BloodValue;
        };
        "humanity"?: HumanityValue;
        "willpower"?: {
            "current"?: WillpowerValue;
            "characterMax"?: WillpowerValue;
        };
        "experience"?: ExperienceValue;
        "dammages"?: number;
    }

// module

/** Example layout inspired by the classic VTM sheet PDF (header + sample tracks). */
export function CharacterSheet ({
    name,
    player,
    secte,
    clan,
    nature,
    demeanor,
    // concept,
    generation,
    experience = 0,
    characteristics = [],
    bloodPool = {
        "current": 15,
        "characterMax": 15
    },
    humanity = 7,
    willpower = {
        "current": 5,
        "characterMax": 6
    },
    dammages = 0
}: CharacterSheetProps): React.JSX.Element {

    const { t } = useTranslation();

    return <article
        className={ styles.sheet }
        aria-label={ t("characterSheet") }
    >

        <header className={ styles.header }>

            <div className={ styles.headerCol }>

                <span className={ styles.fieldLabel }>{ t("player") }</span>
                <span className={ styles.fieldLine }>{ player }</span>

                <span className={ styles.fieldLabel }>{ t("name") }</span>
                <span className={ styles.fieldLine }>{ name }</span>

            </div>

            <div className={ styles.headerCol }>

                <span className={ styles.fieldLabel }>{ t("nature") }</span>
                <span className={ styles.fieldLine }>{ nature }</span>

                <span className={ styles.fieldLabel }>{ t("demeanor") }</span>
                <span className={ styles.fieldLine }>{ demeanor }</span>

            </div>

            <div className={ styles.headerCol }>

                <span className={ styles.fieldLabel }>{ t("secte") }</span>
                <span className={ styles.fieldLine }>{ secte }</span>

                <span className={ styles.fieldLabel }>{ t("clan.title") }</span>
                <span className={ styles.fieldLine }>{ t(`clan.${ clan }`) }</span>

                <span className={ styles.fieldLabel }>{ t("generation") }</span>
                <span className={ styles.fieldLine }>{ generation }</span>

            </div>

        </header>

        <Attributes characteristics={ characteristics } />
        <Abilities characteristics={ characteristics } />
        <Advantages characteristics={ characteristics } />

        <div className={ styles.twoCol }>

            <div className={ styles.sheetCol }>

                <Humanity value={ humanity } />

                <Willpower
                    current={ willpower.current ?? willpower.characterMax ?? 6 }
                    max={ willpower.characterMax ?? 6 }
                />

                <BloodPool
                    current={ bloodPool.current ?? bloodPool.characterMax ?? 15 }
                    max={ bloodPool.characterMax ?? 15 }
                />

            </div>

            <div className={ styles.rightCol }>

                <HealthTrack dammages={ dammages } />

                <div className={ styles.headerCol }>

                    <span className={ styles.fieldLabel }>{ t("experience") }</span>
                    <span className={ styles.fieldLine }>{ experience }</span>

                </div>

            </div>

        </div>

    </article>;

}
