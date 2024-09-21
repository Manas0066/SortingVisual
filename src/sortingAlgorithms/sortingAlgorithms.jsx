// export const MergeSort = array => {
//     if (array.length === 1) {
//         return array;  // Return the array itself when length is 1
//     }

//     const middleIndex = Math.floor(array.length / 2);
//     const firstHalf = MergeSort(array.slice(0, middleIndex));
//     const secondHalf = MergeSort(array.slice(middleIndex));
//     const sortedArray = [];
//     let i = 0, j = 0;

//     // Merge the two halves in sorted order
//     while (i < firstHalf.length && j < secondHalf.length) {
//         if (firstHalf[i] < secondHalf[j]) {
//             sortedArray.push(firstHalf[i++]);
//         } else {
//             sortedArray.push(secondHalf[j++]);
//         }
//     }

//     // Append the remaining elements from either half
//     while (i < firstHalf.length) {
//         sortedArray.push(firstHalf[i++]);
//     }
//     while (j < secondHalf.length) {
//         sortedArray.push(secondHalf[j++]);
//     }

//     return sortedArray;
// };



export function MergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    MergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function MergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    MergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    MergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        animations.push({
            comparison: [i, j], // Push comparison for animation
        });

        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push({
                swap: [k, auxiliaryArray[i]], // Push the swap for animation
            });
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push({
                swap: [k, auxiliaryArray[j]], // Push the swap for animation
            });
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middleIdx) {
        animations.push({
            comparison: [i, i], // Push comparison
            swap: [k, auxiliaryArray[i]], // Push swap
        });
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= endIdx) {
        animations.push({
            comparison: [j, j], // Push comparison
            swap: [k, auxiliaryArray[j]], // Push swap
        });
        mainArray[k++] = auxiliaryArray[j++];
    }
}



export function BubbleSort(array) {
    const animations = [];
    let n = array.length;
    let auxiliaryArray = array.slice();
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Push comparison for animation
            animations.push({
                comparison: [j, j + 1],
            });

            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                // Swap
                animations.push({
                    swap: [j, auxiliaryArray[j + 1]], // Swap current bar with the next one
                });
                animations.push({
                    swap: [j + 1, auxiliaryArray[j]], // Swap next bar with current one
                });
                
                // Swap the elements in the array
                let temp = auxiliaryArray[j];
                auxiliaryArray[j] = auxiliaryArray[j + 1];
                auxiliaryArray[j + 1] = temp;
            }
        }
    }
    return animations;
}



export function InsertionSort(array) {
    const animations = [];
    let auxiliaryArray = array.slice();

    for (let i = 1; i < auxiliaryArray.length; i++) {
        let key = auxiliaryArray[i];
        let j = i - 1;

        // Compare key with each element on the left of it until a smaller one is found
        while (j >= 0 && auxiliaryArray[j] > key) {
            // Push comparison for animation
            animations.push({
                comparison: [j, j + 1],
            });

            // Swap
            animations.push({
                swap: [j + 1, auxiliaryArray[j]], // Push swap for animation
            });

            auxiliaryArray[j + 1] = auxiliaryArray[j];
            j = j - 1;
        }
        
        animations.push({
            swap: [j + 1, key], // Insert key in the correct position
        });
        auxiliaryArray[j + 1] = key;
    }

    return animations;
}


export function QuickSort(array) {
    const animations = [];
    let auxiliaryArray = array.slice();

    quickSortHelper(auxiliaryArray, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(auxiliaryArray, low, high, animations) {
    if (low < high) {
        let pivotIdx = partition(auxiliaryArray, low, high, animations);
        quickSortHelper(auxiliaryArray, low, pivotIdx - 1, animations);
        quickSortHelper(auxiliaryArray, pivotIdx + 1, high, animations);
    }
}

function partition(auxiliaryArray, low, high, animations) {
    let pivot = auxiliaryArray[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        // Push comparison for animation
        animations.push({
            comparison: [j, high],
        });

        if (auxiliaryArray[j] < pivot) {
            i++;
            // Swap
            animations.push({
                swap: [i, auxiliaryArray[j]], // Push swap for animation
            });
            animations.push({
                swap: [j, auxiliaryArray[i]], // Push swap for animation
            });

            // Swap elements in the array
            let temp = auxiliaryArray[i];
            auxiliaryArray[i] = auxiliaryArray[j];
            auxiliaryArray[j] = temp;
        }
    }

    // Swap the pivot element to its correct position
    animations.push({
        swap: [i + 1, auxiliaryArray[high]], // Push swap for animation
    });
    animations.push({
        swap: [high, auxiliaryArray[i + 1]], // Push swap for animation
    });

    let temp = auxiliaryArray[i + 1];
    auxiliaryArray[i + 1] = auxiliaryArray[high];
    auxiliaryArray[high] = temp;

    return i + 1;
}
