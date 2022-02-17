// SOAL 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(number){
    const array = number.slice().reverse();
    return array
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(" ");
console.log(" ------------SOAL 1 ----------- ");

console.log(arr, newArr);
console.log(arr2, newArr2);

// SOAL 2
const arr3 = [1, 3, 4, 1, 2, 8]; 
const arr4 = [5, 6, 7, 8, 1, 3];


function getAverage (Number){
    sum = 0
    // for (let i = 0; i < Number.length; i++) {
    //     const currentNumber = Number[i];
    //     sum = sum + currentNumber;
    //     }

    Number.forEach((value) => {
        sum = sum + value
    });
        rata = sum / Number.length; 
    
    console.log("Total Angka Di Array :", sum);
    console.log("Rata - Rata :", rata.toFixed(2));
    console.log("Nilai Array Di atas rata - rata : ")

    Number.forEach((value) => {
        
        if(value > rata){
            console.log(value);
        }
        
    })
   
    console.log("")
}
console.log("");
console.log(" ------------SOAL 2 ----------- ");

getAverage(arr3)
getAverage(arr4)

// SOAL 3
const arr5 = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
//   function searchInArray(arr,number) {
//     let sum = 0;
//   numbers3D.forEach((eachRowValues) => {
//     eachRowValues.forEach((eachRowAndColValues) => {
//       eachRowAndColValues.forEach((eachRowColAndDepValue) => {
//         sum += eachRowColAndDepValue;
//       });
//     });
//   }

  function searchInArray(arr, num) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        for (let j = 0; j < number.length; j++) {
            tempArr.push(number[j]);
        }
    }

    for (let k = 0; k < tempArr.length; k++) {
        if (tempArr[k] === num) {
            var found = true;
            var index = k;
        }
    }

    if (found) {
        return index;
    } else {
        return 'null';
    }
}




  console.log(" ");
  console.log(" ------------SOAL 3 ----------- ");

  console.log(searchInArray(arr5, 3));
  console.log(searchInArray(arr5, 2));
  console.log(searchInArray(arr5, 4));
  console.log(searchInArray(arr5, 8));