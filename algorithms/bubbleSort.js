async function bubbleSort(arr) {
    const bars = document.getElementsByClassName("bar");
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                bars[j].style.height = `${arr[j] * 3}px`;
                bars[j + 1].style.height = `${arr[j + 1] * 3}px`;
                await sleep(100);
            }

            bars[j].style.backgroundColor = "steelblue";
            bars[j + 1].style.backgroundColor = "steelblue";
        }
    }
}
