'use strict';

const maxValue = 10000;

var chart = undefined;
var size = undefined;
var algorithmFunction = undefined;

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
        default:
            document.getElementById('descriptionDiv').style.display = 'none';
    }
};

document.getElementById('runButton').onclick = () => {
    document.getElementById('algorithmSelector').disabled = true;
    document.getElementById('descriptionDiv').style.display = 'none';
    document.getElementById('chartDiv').style.display = 'block';

    if (window.innerHeight <= window.innerWidth) {
        // Landscape
        size = Math.round(window.innerHeight * 0.1);
        document.getElementById('chart').height = size * 4;
    } else {
        // Portrait
        size = Math.round(window.innerHeight * 0.1);
        document.getElementById('chart').height = size * 10;
    }

    let labels = [];
    let data = [];
    for (let i = 0; i < size; i++) {
        const r = Math.floor(Math.random() * maxValue);
        data[i] = r;
        labels[i] = '';
    }
    
    chart = new Chart(document.getElementById('chart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: ["#8B0000"]
                }
            ]
        },
        options: {
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

    algorithmFunction();
};

window.onload = () => {
    document.getElementById('descriptionDiv').style.display = 'none';
    document.getElementById('chartDiv').style.display = 'none';
};
