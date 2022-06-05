'use strict';

const bubblesort_description = `
<p>
    Bubble sort works by swapping all adjacent elements that are out of order over and over again.
</p>
<p>
    Try to focus on one of the longer lines near the top.
    This line will be swapped on every iteration, essentially "bubbling" its way down to the bottom.
</p>
`;

async function bubblesort() {
    while (true) {
        let wasChanged = false;
        for (let i = 1; i < getArrayLength(); i++) {
            if (getArrayValue(i - 1) > getArrayValue(i)) {
                let tmp = getArrayValue(i);
                setArrayValue(i, getArrayValue(i - 1));
                setArrayValue(i - 1, tmp);

                wasChanged = true;
                await update();
            }
        }

        if (!wasChanged) {
            break;
        }
    }
}
