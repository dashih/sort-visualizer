async function partition(fromInclusive, toExclusive) {
    pivotValue = getArrayValue(toExclusive - 1);
    pivotIndex = fromInclusive;
    for (let i = fromInclusive; i < toExclusive; i++) {
        if (pivotValue > getArrayValue(i)) {
            let tmp = getArrayValue(i);
            setArrayValue(i, getArrayValue(pivotIndex));
            setArrayValue(pivotIndex, tmp);
            pivotIndex++;

            await asyncSleep(10);
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
    endOperation();
}
