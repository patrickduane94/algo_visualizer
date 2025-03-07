async function quickSort(arr, low, high) {
    if (low < high) {
        let pi = await partition(arr, low, high);
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
}

async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    let bars = document.getElementsByClassName("bar");

    for (let j = low; j < high; j++) {
        bars[j].style.backgroundColor = "red";
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            bars[i].style.height = `${arr[i] * 3}px`;
            bars[j].style.height = `${arr[j] * 3}px`;
            await sleep(100);
        }
        bars[j].style.backgroundColor = "steelblue";
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    bars[i + 1].style.height = `${arr[i + 1] * 3}px`;
    bars[high].style.height = `${arr[high] * 3}px`;
    await sleep(100);
    return i + 1;
}
