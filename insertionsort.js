async function insertionsort() {
    for (let i = 1; i < $("#array").children().length; i++) {
        let curVal = getArrayValue(i);
        let j = i - 1;
        for (; j >= 0 && curVal < getArrayValue(j); j--) {
            setArrayValue(j + 1, getArrayValue(j));
            await asyncSleep(1);
        }

        setArrayValue(j + 1, curVal);
    }

    endOperation();
}
