// deps

    // externals
    import React from "react";

    // locals
    import styles from "./RatedPool.module.scss";

// types & interfaces

    export interface RatedPoolProps {
        "title": string;
        "current": number;
        "max": number;
    }

// consts

    export const POOL_MAX = 10;

// module

export function RatedPool ({
    title,
    current,
    max
}: RatedPoolProps): React.JSX.Element {

    return <section
        className={ styles.wrap }
        aria-label={ `${title}: ${current} of ${max}` }
    >

        <header className={ styles.header }>

            <h3 className={ styles.title }>{ title }</h3>

            <p className={ styles.values }>
                <span className={ styles.current }>{ current }</span>
                <span className={ styles.sep }>/</span>
                <span className={ styles.max }>{ max }</span>
            </p>

        </header>

        <div
            className={ styles.grid }
            role="presentation"
        >

            { Array.from({ "length": POOL_MAX }, (_: number, i: number): React.JSX.Element => {

                return <span
                    key={ i }
                    className={ i < current ? styles.cellFilled : styles.cellEmpty }
                    aria-hidden
                />;

            }) }

        </div>

    </section>;

}
