const bubblesort_description = `
<h2>Bubblesort</h2>
<p>
  Bubblesort works by swapping all adjacent elements that are out of order over and over again. Try to focus on one of the longer lines near the top. This line will be swapped on every iteration, essentially "bubbling" its way down to the bottom.
</p>
`;

async function bubblesort() {
    startOperation(bubblesort_description);

    while (true) {
        let wasChanged = false;
        for (let i = 1; i < getArrayLength(); i++) {
            if (getArrayValue(i - 1) > getArrayValue(i)) {
                let tmp = getArrayValue(i);
                setArrayValue(i, getArrayValue(i - 1));
                setArrayValue(i - 1, tmp);

                wasChanged = true;
                await asyncSleep(1);
            }
        }

        if (!wasChanged) {
            break;
        }
    }

    endOperation();
}
