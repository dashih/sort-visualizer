'use strict';

const countingsort_description = `
<p>
    A counting sort simply counts the number of times each elements occurs. It is only practical if the set of possible elements is manageable. But if it can be used, it is often the fastest possible sorting algorithm.
</p>
<p>
    Visually, the algorithm is unfascinating. After the counting phase is done, it just writes out a sorted array.
</p>
`;

async function countingsort() {
    // Assumption.
    const maxValue = maxArraySize * 5;

    const counts = Array(maxValue).fill(0);
    for (let i = 0; i < getArrayLength(); i++) {
        counts[getArrayValue(i)]++;
    }

    let idx = 0;
    for (let k = 0; k < counts.length; k++) {
        if (idx === getArrayLength()) {
            break;
        }

        for (let i = 0; i < counts[k]; i++) {
            setArrayValue(idx, k);
            idx++;
        }

        await update();
    }
}
