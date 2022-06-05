'use strict';

const heapsort_description = `
<p>
    My personal favorite!
</p>
<p>
    Heapsort works in two phases. First, it builds a max-heap within the array itself. Visually, this step looks nonsensical - like it is just shuffling things around randomly.
</p>
<p>
    The second phase is a thing of beauty. The algorithm repeatedly extracts from the heap (always the largest value), and places the values at the end of the array. During this phase, you can see the sorted array building from the bottom, while hectic activity ensues at the top (as the heap maintains itself after each extraction).
</p>
`;

async function bubbledown(fromInclusive, toExclusive) {
    for (; fromInclusive * 2 < toExclusive; ) {
        let childIndex = fromInclusive * 2;
        if (childIndex + 1 < toExclusive &&
            getArrayValue(childIndex + 1) > getArrayValue(childIndex)) {

            childIndex++;
        }

        if (getArrayValue(childIndex) > getArrayValue(fromInclusive)) {
            let tmp = getArrayValue(fromInclusive);
            setArrayValue(fromInclusive, getArrayValue(childIndex));
            setArrayValue(childIndex, tmp);
            fromInclusive = childIndex;

            await update();
        } else {
            break;
        }
    }
}

async function heapsort() {
    for (let i = getArrayLength() - 1; i >= 0; i--) {
        await bubbledown(i, getArrayLength());
    }

    for (let i = getArrayLength() - 1; i >= 0; i--) {
        let tmp = getArrayValue(i);
        setArrayValue(i, getArrayValue(0));
        setArrayValue(0, tmp);

        await bubbledown(0, i);
    }
}
