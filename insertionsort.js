'use strict';

const insertionsort_description = `
<p>
    Insertion sort starts from the top and works its way down, inserting each new element it encounters into the sorted section above it. Watch how it methodically builds this sorted section.
</p>
<p>
    Also, once it has decided where to insert a new element, all elements below that spot need to be shifted one spot - this is also visually apparent.
</p>
`;

async function insertionsort() {
    for (let i = 1; i < getArrayLength(); i++) {
        let curVal = getArrayValue(i);
        let j = i - 1;
        for (; j >= 0 && curVal < getArrayValue(j); j--) {
            setArrayValue(j + 1, getArrayValue(j));
            await update();
        }

        setArrayValue(j + 1, curVal);
    }

    finish();
}
