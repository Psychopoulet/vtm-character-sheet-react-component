// deps

// externals
import React from "react";

// locals
import styles from "./Separator.module.scss";

export interface SeparatorProps {
    "title": string;
    "className"?: string;
}

export function Separator ({
    title
}: SeparatorProps): React.JSX.Element {

    return <div className={ styles.wrap }>

        <span className={ styles.line } aria-hidden />

        <h2 className={ styles.title }>{title}</h2>

        <span className={ styles.line } aria-hidden />

    </div>;

}
