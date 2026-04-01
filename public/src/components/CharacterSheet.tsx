// deps

    // externals
    import React from "react";

    // locals
    import styles from "./CharacterSheet.module.css";
    import language from "../languages/fr-fr.json";
    import { BloodPool } from "./BloodPool";
    import { Humanity } from "./Humanity";
    import { Willpower } from "./Willpower";
    import { HealthTrack } from "./HealthTrack";
    import { Attributes } from "./Attributes";
    import { Abilities } from "./Abilities";
    import { Advantages } from "./Advantages";

// types & interfaces

    // locals
    import type { Secte, Clan, UsedCharacteristic } from "../types";

    export interface CharacterSheetProps {
        "name": string;
        "player": string;
        "secte": Secte;
        "clan": Clan;
        "characteristics"?: UsedCharacteristic[];
        "bloodPool"?: {
            "current"?: number;
            "characterMax"?: number;
        }
        "humanity"?: number;
        "willpower"?: {
            "current"?: number;
            "characterMax"?: number;
        }
        "dammages"?: number;
    }

// module

/** Example layout inspired by the classic VTM sheet PDF (header + sample tracks). */
export function CharacterSheet ({
    name,
    player,
    secte,
    clan,
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

  return <article
      className={ styles.sheet }
      aria-label="Character sheet"
    >

      <header className={ styles.header }>
        <div className={ styles.fieldPair }>
          <span className={ styles.fieldLabel }>{ language.name }</span>
          <span className={ styles.fieldLine }>{ name }</span>
        </div>
        <div className={ styles.fieldPair }>
          <span className={ styles.fieldLabel }>{ language.player }</span>
          <span className={ styles.fieldLine }>{ player }</span>
        </div>
        <div className={ styles.fieldPair }>
          <span className={ styles.fieldLabel }>{ language.clan }</span>
          <span className={ styles.fieldLine }>{ clan }</span>
        </div>
        <div className={ styles.fieldPair }>
          <span className={ styles.fieldLabel }>{ language.secte }</span>
          <span className={ styles.fieldLine }>{ secte }</span>
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

        <HealthTrack dammages={ dammages } />

      </div>

  </article>;

}
