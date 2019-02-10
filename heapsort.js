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

            await asyncSleep(10);
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

    endOperation();
}
