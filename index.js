'use strict';

const minArraySize = 32;
const defArraySize = 128;
const maxArraySize = 512;

var chart = undefined;
var algorithmFunction = undefined;

function createChart(size) {
    if (chart !== undefined) {
        chart.destroy();
        chart = undefined;
    }

    document.getElementById('chart').width = Math.round(window.innerWidth * 0.8);
    document.getElementById('chart').height = Math.round(window.innerHeight * 0.5);

    const maxValue = Math.round(size * 5);
    let labels = [];
    let data = [];
    let bgColors = [];
    for (let i = 0; i < size; i++) {
        const r = Math.floor(Math.random() * maxValue);
        data[i] = r;
        labels[i] = '';
        bgColors[i] = 'black';
    }

    chart = new Chart(document.getElementById('chart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: bgColors
                }
            ]
        },
        options: {
            responsive: false,
            indexAxis: 'y',
            scales: {
                x: { display: false },
                y: { display: false }
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            animation: false
        }
    });
}

document.getElementById('algorithmSelector').onchange = () => {
    document.getElementById('descriptionDiv').style.display = 'block';

    const algSelector = document.getElementById('algorithmSelector');
    const alg = algSelector.options[algSelector.selectedIndex].value;
    switch (alg) {
        case 'bubblesort':
            document.getElementById('description').innerHTML = bubblesort_description;
            algorithmFunction = bubblesort;
            break;
        case 'insertionsort':
            document.getElementById('description').innerHTML = insertionsort_description;
            algorithmFunction = insertionsort;
            break;
        case 'mergesort':
            document.getElementById('description').innerHTML = mergesort_description;
            algorithmFunction = mergesort;
            break;
        case 'heapsort':
            document.getElementById('description').innerHTML = heapsort_description;
            algorithmFunction = heapsort;
            break;
        case 'quicksort':
            document.getElementById('description').innerHTML = quicksort_description;
            algorithmFunction = quicksort;
            break;
        case 'radixsortlsd':
            document.getElementById('description').innerHTML = radixsortlsd_description;
            algorithmFunction = radixsortLSD;
            break;
        case 'radixsortmsd':
            document.getElementById('description').innerHTML = radixsortmsd_description;
            algorithmFunction = radixsortMSD;
            break;
        case 'countingsort':
            document.getElementById('description').innerHTML = countingsort_description;
            algorithmFunction = countingsort;
            break;
        default:
            document.getElementById('descriptionDiv').style.display = 'none';
    }
};

document.getElementById('selectButton').onclick = () => {
    document.getElementById('algorithmSelector').disabled = true;
    document.getElementById('descriptionDiv').style.display = 'none';
    document.getElementById('chartDiv').style.display = 'block';

    // Allow configuring array size.
    const sizeRange = document.getElementById('sizeRange');
    sizeRange.min = minArraySize;
    sizeRange.max = maxArraySize;
    sizeRange.value = defArraySize;
    document.getElementById('sizeRangeLabel').innerText = `Array size: ${sizeRange.value}`;

    sizeRange.style.width = '25%';
    if (window.innerHeight > window.innerWidth) {
        // In portrait, we want a wider slider.
        sizeRange.style.width = '75%';
    }

    createChart(sizeRange.value);
};

document.getElementById('sizeRange').oninput = () => {
    const size = Math.round(document.getElementById('sizeRange').value);
    document.getElementById('sizeRangeLabel').innerText = `Array size: ${size}`;
};

document.getElementById('sizeRange').onchange = () => {
    const size = Math.round(document.getElementById('sizeRange').value);
    document.getElementById('sizeRangeLabel').innerText = `Array size: ${size}`;
    createChart(size);
};

document.getElementById('runButton').onclick = async () => {
    document.getElementById('runButton').disabled = true;
    document.getElementById('sizeRange').disabled = true;

    chart.data.datasets[0].backgroundColor.fill('#8B0000'); // dark red
    await algorithmFunction();
    chart.data.datasets[0].backgroundColor.fill('#191970'); // dark blue
    chart.update();
};

window.onload = () => {
    document.getElementById('descriptionDiv').style.display = 'none';
    document.getElementById('chartDiv').style.display = 'none';
};
