const insertionsort_description = `
<h2>Insertionsort</h2>
<p>
  Insertionsort starts from the top and works its way down, inserting each new element it encounters into the sorted section above it. Watch how it methodically builds this sorted section. Also, once it has decided where to insert a new element, all elements below that spot need to be shifted one spot - this is also visually apparent.
</p>
`;

async function insertionsort() {
    startOperation(insertionsort_description);

    for (let i = 1; i < getArrayLength(); i++) {
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
