// deps

    // internals
    import getGeneration from "./getGeneration";

// types & interfaces

    // locals
    import type { BloodValue, UsedCharacteristic } from "../../types";

// module

export default function getMaxBloodPool (characteristics: UsedCharacteristic[]): BloodValue {

    switch (getGeneration(characteristics)) {

        case 1:
            return 100;

        case 2:
            return 75;

        case 3:
            return 60;

        case 4:
            return 50;

        case 5:
            return 40;

        case 6:
            return 30;

        case 7:
            return 20;

        case 8:
            return 15;

        case 9:
            return 14;

        case 10:
            return 13;

        case 11:
            return 12;

        case 12:
            return 11;

        default:
            return 10;

    }

}
