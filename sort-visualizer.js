function setDefaultParams() {
    let size = Math.floor($(window).height() / 5);
    $("#sizeBox").val(size);

    let maxVal = Math.floor($(window).width() * 0.75);
    $("#maxValBox").val(maxVal);
}

$(document).ready(setDefaultParams);
$(window).resize(setDefaultParams);

$("#bubblesortButton").click(() => {
    bubblesort();
});

$("#insertionsortButton").click(() => {
    insertionsort();
});

$("#mergesortButton").click(() => {
    mergesort();
});

$("#heapsortButton").click(() => {
    heapsort();
});

$("#quicksortButton").click(() => {
    quicksort();
});

$("#radixsortLSDButton").click(() => {
    radixsortLSD();
});
