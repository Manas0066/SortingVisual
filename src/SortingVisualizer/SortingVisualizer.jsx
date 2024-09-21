import React, { useState, useEffect, useRef } from "react";
import * as sortingAlgorithm from "../sortingAlgorithms/sortingAlgorithms";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
    const [arr, setArr] = useState([]);
    const timeoutIds = useRef([]); // Use ref to store active timeout IDs

    useEffect(() => {
        resetArray();
    }, []);

    // Function to clear all timeouts
    const clearAllTimeouts = () => {
        timeoutIds.current.forEach(timeoutId => clearTimeout(timeoutId));
        timeoutIds.current = []; // Reset the timeout ID array
    };

    const resetArray = () => {
        clearAllTimeouts(); // Clear any ongoing animations
        const newArr = [];
        for (let i = 0; i < 310; i++) {
            newArr.push(Math.floor(Math.random() * (585 - 5 + 1) + 5));
        }
        setArr(newArr);

        // Reset all bars' colors to white
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < arrayBars.length; i++) {
            arrayBars[i].style.backgroundColor = "green";
        }
    };

    const MergeSort = () => {
        clearAllTimeouts(); // Clear any previous timeouts
        const animations = sortingAlgorithm.MergeSort(arr);

        for (let i = 0; i < animations.length; i++) {
            const { comparison, swap } = animations[i];

            // Ensure the comparison and swap arrays exist before trying to access their elements
            if (comparison && comparison.length >= 2) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const [barOneIdx, barTwoIdx] = comparison;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                const timeoutId1 = setTimeout(() => {
                    barOneStyle.backgroundColor = "red";
                    barTwoStyle.backgroundColor = "green";
                }, i * 3);
                timeoutIds.current.push(timeoutId1);

                const timeoutId2 = setTimeout(() => {
                    barOneStyle.backgroundColor = "white";
                    barTwoStyle.backgroundColor = "white";
                }, (i + 1) * 3);
                timeoutIds.current.push(timeoutId2);
            }

            if (swap && swap.length >= 2) {
                const [barOneIdx, newHeight] = swap;

                const timeoutId = setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 3);
                timeoutIds.current.push(timeoutId);
            }
        }
    };


    const QuickSort = () => {
        clearAllTimeouts(); // Clear any previous timeouts
        const animations = sortingAlgorithm.QuickSort(arr);
    
        for (let i = 0; i < animations.length; i++) {
            const { comparison, swap } = animations[i];
    
            if (comparison && comparison.length >= 2) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const [barOneIdx, barTwoIdx] = comparison;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
    
                const timeoutId1 = setTimeout(() => {
                    barOneStyle.backgroundColor = "red";
                    barTwoStyle.backgroundColor = "red";
                }, i * 3);
                timeoutIds.current.push(timeoutId1);
    
                const timeoutId2 = setTimeout(() => {
                    barOneStyle.backgroundColor = "white";
                    barTwoStyle.backgroundColor = "white";
                }, (i + 1) * 3);
                timeoutIds.current.push(timeoutId2);
            }
    
            if (swap && swap.length >= 2) {
                const [barOneIdx, newHeight] = swap;
    
                const timeoutId = setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 3);
                timeoutIds.current.push(timeoutId);
            }
        }
    };

    const BubbleSort = () => {
        clearAllTimeouts();
        const animations = sortingAlgorithm.BubbleSort(arr);
    
        for (let i = 0; i < animations.length; i++) {
            const { comparison, swap } = animations[i];
    
            if (comparison && comparison.length >= 2) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const [barOneIdx, barTwoIdx] = comparison;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
    
                const timeoutId1 = setTimeout(() => {
                    barOneStyle.backgroundColor = "red";
                    barTwoStyle.backgroundColor = "red";
                }, i * 3);
                timeoutIds.current.push(timeoutId1);
    
                const timeoutId2 = setTimeout(() => {
                    barOneStyle.backgroundColor = "white";
                    barTwoStyle.backgroundColor = "white";
                }, (i + 1) * 3);
                timeoutIds.current.push(timeoutId2);
            }
    
            if (swap && swap.length >= 2) {
                const [barOneIdx, newHeight] = swap;
    
                const timeoutId = setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 3);
                timeoutIds.current.push(timeoutId);
            }
        }
    };
    
    

    // const TestAlgorithm = () => {
    //     for (let i = 0; i < 100; i++) {
    //         const array = [];
    //         const length = Math.floor(Math.random() * (1000 - 1 + 1) + 1);

    //         for (let i = 0; i < length; i++) {
    //             array.push(Math.random() * (1000 - 1 + 1) + 1);
    //         }
    //         const javaScriptsortedArray = array.slice().sort((a, b) => a - b);
    //         const MergeSortedArray = sortingAlgorithm.MergeSort(array.slice());
    //         console.log(arraysAreEqual(javaScriptsortedArray, MergeSortedArray));
    //     }
    // };


    const InsertionSort = () => {
        clearAllTimeouts();
        const animations = sortingAlgorithm.InsertionSort(arr);
    
        for (let i = 0; i < animations.length; i++) {
            const { comparison, swap } = animations[i];
    
            if (comparison && comparison.length >= 2) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const [barOneIdx, barTwoIdx] = comparison;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
    
                const timeoutId1 = setTimeout(() => {
                    barOneStyle.backgroundColor = "red";
                    barTwoStyle.backgroundColor = "red";
                }, i * 3);
                timeoutIds.current.push(timeoutId1);
    
                const timeoutId2 = setTimeout(() => {
                    barOneStyle.backgroundColor = "white";
                    barTwoStyle.backgroundColor = "white";
                }, (i + 1) * 3);
                timeoutIds.current.push(timeoutId2);
            }
    
            if (swap && swap.length >= 2) {
                const [barOneIdx, newHeight] = swap;
    
                const timeoutId = setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 3);
                timeoutIds.current.push(timeoutId);
            }
        }
    };
    

    // const arraysAreEqual = (arrayOne, arrayTwo) => {
    //     if (arrayOne.length !== arrayTwo.length) {
    //         return false;
    //     }
    //     for (let i = 0; i < arrayOne.length; i++) {
    //         if (arrayOne[i] !== arrayTwo[i]) {
    //             return false;
    //         }
    //     }
    //     return true;
    // };

    return (
        <>
            <div className="array-container">
                {arr.map((value, idx) => (
                    <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
                ))}
            </div>
            
            <div className="area">
             <div className="logo">
                <h1>Sorting Visualizer</h1>
             </div>
             <div className="C">
              <button className="buttons-reset" onClick={resetArray}>Reset Array</button>
                <button className="buttons" onClick={MergeSort}>Merge Sort</button>
                <button className="buttons" onClick={QuickSort}>Quick Sort</button>
                <button className="buttons" onClick={BubbleSort}>Bubble Sort</button>
                <button className="buttons" onClick={InsertionSort}>InsertionSort</button>
             </div>    
            </div>
        </>
    );
};

export default SortingVisualizer;
