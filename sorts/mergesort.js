'use strict';

const mergesort_description = `
<p>
    Mergesort is the most pure divide-and-conquer sort. It continually divides each section exactly in half, sorts each side, then merges the results.
</p>
<p>
    Watch how pairs of sorted halves are merged, particularly towards the end of execution.
</p>
`;

async function merge(fromInclusive, toExclusive, splitIdx) {
    // Copy the range from the source array to a buffer array.
    let buffer = [];
    for (let i = fromInclusive; i < toExclusive; i++) {
        buffer.push(getArrayValue(i));
    }

    // srcIdx is the index into the source array.
    let srcIdx = fromInclusive;

    // leftIdx is the left-side index into the buffer array.
    let leftIdx = fromInclusive - fromInclusive;

    // rightIdx is the right-side index into the buffer array.
    let rightIdx = splitIdx - fromInclusive;

    // Look at the value on the left and right. Take the lesser and write to the source array.
    // Keep doing this until either the left side or right side or both have been exhausted.
    for (; leftIdx < splitIdx - fromInclusive && rightIdx < toExclusive - fromInclusive; srcIdx++) {
        if (buffer[leftIdx] < buffer[rightIdx]) {
            setArrayValue(srcIdx, buffer[leftIdx]);
            leftIdx++;
        } else {
            setArrayValue(srcIdx, buffer[rightIdx]);
            rightIdx++;
        }

        await update();
    }

    // If the left still has numbers, write them to the source array.
    // If this is true, the right-side condition below is not.
    if (leftIdx < splitIdx - fromInclusive) {
        for (; leftIdx < splitIdx - fromInclusive; srcIdx++, leftIdx++) {
            setArrayValue(srcIdx, buffer[leftIdx]);
            await update();
        }
    }

    // If the right still has numbers, write them to the source array.
    // If this is true, the left-side condition above is not.
    if (rightIdx < toExclusive - fromInclusive) {
        for (; rightIdx < toExclusive - fromInclusive; srcIdx++, rightIdx++) {
            setArrayValue(srcIdx, buffer[rightIdx]);
            await update();
        }
    }
}

async function mergesortRange(fromInclusive, toExclusive) {
    if (toExclusive - fromInclusive > 1) {
        let middle = Math.floor((fromInclusive + toExclusive) / 2);
        await mergesortRange(fromInclusive, middle);
        await mergesortRange(middle, toExclusive);
        await merge(fromInclusive, toExclusive, middle);
    }
}

async function mergesort() {
    await mergesortRange(0, getArrayLength());
}
