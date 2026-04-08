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

    // utils
    import getGeneration from "./utils/getGeneration";
    import getMaxBloodPool from "./utils/getMaxBloodPool";

// types & interfaces

    // locals
    import type {
        Secte, Clan, Archetype, // Concept,
        BloodValue, HumanityValue, WillpowerValue, ExperienceValue,
        UsedCharacteristic
    } from "../types";

    export interface CharacterSheetProps {
        "name": string;
        "player": string;
        "secte": Secte;
        "clan": Clan;
        "nature": Archetype;
        "demeanor": Archetype;
        // "concept": Concept;
        "characteristics"?: UsedCharacteristic[];
        "bloodPool"?: BloodValue;
        "humanity"?: {
            "current": HumanityValue;
            "max"?: HumanityValue;
        };
        "willpower"?: {
            "current": WillpowerValue;
            "max"?: WillpowerValue;
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
    experience = 0,
    characteristics = [],
    bloodPool = 10,
    humanity = {
        "current": 7,
        "max": 7
    },
    willpower = {
        "current": 7,
        "max": 7
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

                <span className={ styles.fieldLabel }>{ t("archetype.nature") }</span>
                <span className={ styles.fieldLine }>{ t(`archetype.${nature}`) }</span>

                <span className={ styles.fieldLabel }>{ t("archetype.demeanor") }</span>
                <span className={ styles.fieldLine }>{ t(`archetype.${demeanor}`) }</span>

            </div>

            <div className={ styles.headerCol }>

                <span className={ styles.fieldLabel }>{ t("secte") }</span>
                <span className={ styles.fieldLine }>{ secte }</span>

                <span className={ styles.fieldLabel }>{ t("clan.title") }</span>
                <span className={ styles.fieldLine }>{ t(`clan.${clan}`) }</span>

                <span className={ styles.fieldLabel }>{ t("generation") }</span>
                <span className={ styles.fieldLine }>{ getGeneration(characteristics) }</span>

            </div>

        </header>

        <Attributes characteristics={ characteristics } />
        <Abilities characteristics={ characteristics } />
        <Advantages characteristics={ characteristics } />

        <div className={ styles.twoCol }>

            <div className={ styles.sheetCol }>

                <Humanity current={ humanity.current } max={ humanity.max ?? 7 } />
                <Willpower current={ willpower.current } max={ willpower.max ?? 7 } />

                <BloodPool
                    current={ bloodPool }
                    max={ getMaxBloodPool(characteristics) }
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
