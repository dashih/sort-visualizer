const radixsortmsd_description = `
<h2>Radixsort MSD</h2>
<p>
  Radixsort MSD bucketizes elements starting with their most significant digits, then recursively bucketizes each bucket by the next most significant digits. The early iterations do a lot of work, since the algorithm first considers the digits that have the most impact on an element's rank. Visually, the algorithm appears to start strong - <i>nearly</i> sorting everything - then proceeds to touch up the details.
</p>
`;

function sortBucket(bucket, place, termination) {
    if (place === termination) {
        return;
    }

    // Initialize 10 buckets.
    let buckets = [];
    for (let b = 0; b < 10; b++) {
        buckets[b] = [];
    }

    // Add every number to the appropriate digit bucket.
    for (let i = 0; i < bucket.length; i++) {
        let numStr = bucket[i].toString();
        if (place <= numStr.length) {
            // This number has a digit at this place. The index is length - place.
            let digitIdx = numStr.length - place;
            let digit = parseInt(numStr.charAt(digitIdx));
            buckets[digit].push(bucket[i]);
        } else {
            // This number does not have a digit at this place. Add to the 0 bucket.
            buckets[0].push(bucket[i]);
        }
    }

    // Recurse on each bucket.
    for (let b = 0; b < 10; b++) {
        sortBucket(buckets[b], place - 1, termination);
    }

    // Copy sorted buckets back into source bucket.
    let i = 0;
    for (let b = 0; b < 10; b++) {
        for (let j = 0; j< buckets[b].length; j++, i++) {
            bucket[i] = buckets[b][j];
        }
    }
}

async function radixsortMSD() {
    startOperation(radixsortmsd_description);

    let array = [];
    for (let i = 0; i < getArrayLength(); i++) {
        array.push(getArrayValue(i));
    }

    let places = Math.max(...array).toString().length;

    // Ordinarily, we would just call sortBucket and let it recurse to the 1's place.
    // However, to visualize the algorithm's progress, we repeatedly run sortBucket,
    // each time letting it recurse further. This way, we update the UI after each step.
    for (let t = places - 1; t >= 0; t--) {
        sortBucket(array, places, t);
        for (let i = 0; i < getArrayLength(); i++) {
            setArrayValue(i, array[i]);
            await asyncSleep(10);
        }
    }

    endOperation();
}
