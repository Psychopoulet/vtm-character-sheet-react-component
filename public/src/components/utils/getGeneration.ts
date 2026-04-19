// types & interfaces

    // locals
    import type { UsedCharacteristic } from "../../types";

// module

export default function getGeneration (characteristics: UsedCharacteristic[]): number {

    const generation = characteristics.find((characteristic: UsedCharacteristic): boolean => {
        return "generation" === characteristic.code;
    })?.value ?? 1;

    return 13 - generation;

}
