'use strict';

const radixsortlsd_description = `
<p>
    Radixsort LSD repeatedly bucketizes elements starting with their least significant digits.
</p>
<p>
    Visually, the most interesting thing about this algorithm is that a large number can remain at the top for a long time, until the very last bucketizing operation places it in its rightful place.
</p>
`;

async function radixsortLSD() {
    // We need to check as many places (1's place, 10's place, etc) as are in the largest number.
    let max = 0;
    for (let i = 0; i < getArrayLength(); i++) {
        if (getArrayValue(i) > max) {
            max = getArrayValue(i);
        }
    }

    let places = max.toString().length;

    // Loop on each place, starting from least significant (1's place).
    for (let place = 1; place <= places; place++) {
        // Initialize 10 buckets.
        let buckets = [];
        for (let b = 0; b < 10; b++) {
            buckets[b] = [];
        }

        // Add every number to the appropriate digit bucket.
        for (let i = 0; i < getArrayLength(); i++) {
            let numStr = getArrayValue(i).toString();
            if (place <= numStr.length) {
                // This number has a digit at this place. The index is length - place.
                let digitIdx = numStr.length - place;
                let digit = parseInt(numStr.charAt(digitIdx));
                buckets[digit].push(getArrayValue(i));
            } else {
                // This number does not have a digit at this place. Add to the 0 bucket.
                buckets[0].push(getArrayValue(i));
            }
        }

        // Add the bucketized numbers back to the array.
        let i = 0;
        for (let b = 0; b < 10; b++) {
            for (let j = 0; j < buckets[b].length; j++, i++) {
                setArrayValue(i, buckets[b][j]);

                await update();
            }
        }
    }
}
