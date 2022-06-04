'use strict';

const quicksort_description = `
<p>
    The basis of quicksort is its partition operation. Partitioning involves choosing a random element, then creating a left section with all elements less than the chosen and a right section with all elements greater than the chosen.
</p>
<p>
    Neither the left nor right is necessarily sorted afterwards. Partitioning creates a "pivot point", which quicksort uses to run more partition operations on the left and right (divide-and-conqueror) until the array is fully sorted.
</p>
<p>
    Visually, the partition operations result in groups of larger (but not yet sorted) elements trending their way downwards.
</p>
`;

async function partition(fromInclusive, toExclusive) {
    pivotValue = getArrayValue(toExclusive - 1);
    pivotIndex = fromInclusive;
    for (let i = fromInclusive; i < toExclusive; i++) {
        if (pivotValue > getArrayValue(i)) {
            let tmp = getArrayValue(i);
            setArrayValue(i, getArrayValue(pivotIndex));
            setArrayValue(pivotIndex, tmp);
            pivotIndex++;

            await update();
        }
    }

    let tmp = getArrayValue(pivotIndex);
    setArrayValue(pivotIndex, pivotValue);
    setArrayValue(toExclusive - 1, tmp);

    return pivotIndex;
}

async function quicksortRange(fromInclusive, toExclusive) {
    if (toExclusive - fromInclusive > 1) {
        let pivot = await partition(fromInclusive, toExclusive);
        await quicksortRange(fromInclusive, pivot);
        await quicksortRange(pivot + 1, toExclusive);
    }
}

async function quicksort() {
    await quicksortRange(0, getArrayLength());
    finish();
}
