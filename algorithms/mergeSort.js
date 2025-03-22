async function merge(arr, left, mid, right){
    const num1 = mid - left + 1;
    const num2 = right - mid;

    const left_arr = new Array(num1);
    const right_arr = new Array(num2);

    for (let i = 0; i < num1; i++){
        left_arr[i] = arr[left + i];
    }

    for (let j = 0; j < num2; j++){
        right_arr[j] = arr[mid + 1 + j];
    }

    let i = 0, j = 0;
    let k = left;

    while (i < num1 && j < num2){
        if (left_arr[i] <= right_arr[j]){
            arr[k] = left_arr[i];
            i++;
        }
        else{
            arr[k] = right_arr[j];
            j++;
        }
        k++;

    while (i < num1){
        arr[k] = left_arr[i];
        i++;
        k++;
    }

    while (j < num2){
        arr[k] = right_arr[j];
        j++;
        k++;
    }
}
}

function mergeSort(arr, left, right){
    if (left >= right){
        return;
    }

    const middle = Math.floor(left + (right - left) / 2);
    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);
    merge(arr, left, middle, right);
}