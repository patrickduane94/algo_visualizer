async function bubbleSort(arr) {
    const bars = document.getElementsByClassName("bar");
    
    for (let i = 0; i < arr.length - 1; i++) {

        let currentRedIndex = 0;
        bars[currentRedIndex].style.backgroundColor = "red";
        await sleep(50);

        for (let j = 0; j < arr.length - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                bars[j].style.height = `${arr[j] * 3}px`;
                bars[j + 1].style.height = `${arr[j + 1] * 3}px`;
            }
            
            bars[currentRedIndex].style.backgroundColor = "steelblue";
            currentRedIndex = j + 1;
            bars[currentRedIndex].style.backgroundColor = "red";
            await sleep(100);
            bars[arr.length - i - 1].style.backgroundColor = "steelblue";
        }
    }
}
