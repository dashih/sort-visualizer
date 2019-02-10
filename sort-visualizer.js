function setDefaultParams() {
    let size = Math.floor($(window).height() / 4);
    $("#sizeBox").val(size);

    let maxVal = Math.floor($(window).width() * 0.75);
    $("#maxValBox").val(maxVal);
}

$(document).ready(setDefaultParams);
$(window).resize(setDefaultParams);

$("#bubblesortButton").click(() => {
    startOperation("bubblesort");
    bubblesort();
});

$("#insertionsortButton").click(() => {
    startOperation("insertionsort");
    insertionsort();
});

$("#mergesortButton").click(() => {
    startOperation("mergesort");
    mergesort();
});

$("#heapsortButton").click(() => {
    startOperation("heapsort");
    heapsort();
});

$("#quicksortButton").click(() => {
    startOperation("quicksort");
    quicksort();
});
