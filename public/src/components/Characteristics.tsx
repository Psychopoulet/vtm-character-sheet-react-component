// deps

    // externals
    import React from "react";

    // locals
    import styles from "./Characteristics.module.css";
    import { NamedDotProgress } from "./NamedDotProgress";
    import { Separator } from "./Separator";

// types & interfaces

    // locals
    import type { UsedCharacteristic } from "../types";

    export interface CharacteristicsProps {
        "title": string;
        "globalMinValue": number;
        "cols": ReadonlyArray<{
            "title": string;
            "characteristics": UsedCharacteristic[];
            "minValue"?: number;
        }>;
    }

// module

export function Characteristics ({
    title,
    globalMinValue,
    cols
}: CharacteristicsProps): React.JSX.Element {

    return <section className={ styles.section } aria-label="Characteristics">

        <Separator title={ title } />

        <div className={ styles.columns }>

            { cols.map((col, colIndex: number): React.JSX.Element => {

                return <div key={ colIndex } className={ styles.list }>

                    <h3 className={styles.subTitle}>{col.title}</h3>

                    { col.characteristics.map((characteristic: UsedCharacteristic, characteristicIndex: number): React.JSX.Element => {

                        return <NamedDotProgress key={ characteristicIndex }
                            name={ characteristic.name }
                            value={ characteristic.value ?? col.minValue ?? globalMinValue } max={ 5 }
                        />;

                    }) }

                </div>;
            }) }

        </div>

    </section>;

}
