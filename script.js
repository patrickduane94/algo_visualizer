let array = [];
const container = document.getElementById("array-container");

function generateArray() {
    array = [];
    container.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        let value = Math.floor(Math.random() * 80) + 10;
        array.push(value);
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        container.appendChild(bar);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startSorting() {
    const selectedAlgo = document.getElementById("algorithm").value;
    if (selectedAlgo === "bubbleSort") {
        await bubbleSort(array);
    } else if (selectedAlgo === "quickSort") {
        await quickSort(array, 0, array.length - 1);
    } else if (selectedAlgo === "mergeSort") {
        await mergeSort(array, 0, array.length - 1);
    }
}

generateArray();
