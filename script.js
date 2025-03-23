let array = [];
let sorted = false;
const choice = document.getElementById("algorithm");
const container = document.getElementById("array-container");
const startBtn = document.getElementById("start");
const generateBtn = document.getElementById("generate");

function generateArray() {
    sorted = false;
    startBtn.disabled = (choice.value === ""); 
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
    generateBtn.disabled = true;
    startBtn.disabled = true;
    choice.disabled = true;

    const selectedAlgo = choice.value;
    if (selectedAlgo === "bubbleSort") {
        await bubbleSort(array);
    } else if (selectedAlgo === "quickSort") {
        await quickSort(array, 0, array.length - 1);
    } else if (selectedAlgo === "mergeSort") {
        await mergeSort(array, 0, array.length - 1);
    }

    sorted = true;
    generateBtn.disabled = false;
    choice.disabled = false;
}

choice.addEventListener("change", () => {
    startBtn.disabled = (choice.value === "") || sorted; 

    const descriptions = document.querySelectorAll(".algo-desc");
    descriptions.forEach(desc => desc.style.display = "none");

    if (choice.value === "bubbleSort") {
        document.getElementById("bubble").style.display = "block";
    } else if (choice.value === "quickSort") {
        document.getElementById("quick").style.display = "block";
    } else if (choice.value === "mergeSort") {
        document.getElementById("merge").style.display = "block";
    }
});

generateArray();