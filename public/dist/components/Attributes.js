// deps
// externals
import React from "react";
import { useTranslation } from "react-i18next";
// locals
import { Characteristics } from "./Characteristics";
// module
export function Attributes({ characteristics }) {
    const { t } = useTranslation();
    const PHYSICAL = [
        "strength",
        "dexterity",
        "stamina"
    ];
    const SOCIAL = [
        "charisma",
        "manipulation",
        "appearance"
    ];
    const MENTAL = [
        "intelligence",
        "perception",
        "wits"
    ];
    return React.createElement(Characteristics, { title: t("characteristics.attributes.title"), globalMinValue: 1, cols: [
            {
                "title": t("characteristics.attributes.physical.title"),
                "characteristics": PHYSICAL.map((attribute) => {
                    return {
                        "code": attribute,
                        "name": t(`characteristics.attributes.physical.${attribute}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === attribute;
                        })?.value
                    };
                })
            },
            {
                "title": t("characteristics.attributes.social.title"),
                "characteristics": SOCIAL.map((attribute) => {
                    return {
                        "code": attribute,
                        "name": t(`characteristics.attributes.social.${attribute}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === attribute;
                        })?.value
                    };
                })
            },
            {
                "title": t("characteristics.attributes.mental.title"),
                "characteristics": MENTAL.map((attribute) => {
                    return {
                        "code": attribute,
                        "name": t(`characteristics.attributes.mental.${attribute}`),
                        "value": characteristics.find((characteristic) => {
                            return characteristic.code === attribute;
                        })?.value
                    };
                })
            }
        ] });
}
