async function bubblesort() {
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
