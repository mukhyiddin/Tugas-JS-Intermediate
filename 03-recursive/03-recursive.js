const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(array) {
    // kurangin gerbong
    // if(array == array[sum]){
    //      return sum
    // }else{
    //     array.forEach((value) => {
    //         array.lenght = array.lenght - 1
    //         return sum += value
    //     });
    //     console.log(sum);
    // }
    // sumOfArray(array)

    let arr = [...array];
    let sum = arr[0];

    if(arr.length === 1){
        return sum;
    }

    sum += arr[1];
    arr.shift();
    arr[0] = sum;

    let sumArr = sumOfArray(arr);
    return sumArr;

}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));


    // SOAL DUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

 const avg1 = [1, 2, 3, 4, 5];
 const avg2 = [0, 3, 1, 10, 22];
 
 function countAboveAvg(array, number) {
    sumOfArray(number);

    // if(array == array[sum]){
    //     return sum
    // }

    array.forEach(element => {
        if(element > sumOfArray(number) / number.length){

            console.log("contoh : ");
            return element
            
        }

    });
    
    // countAboveAvg(array, number)

    return sumOfArray(number) / number.length ;
    
 }

 const totalAboveAvg1 = countAboveAvg(arr1, avg1);
 const totalAboveAvg2 = countAboveAvg(arr2, avg2);
 
 console.log(totalAboveAvg1);
 console.log(totalAboveAvg2);

 //////////////////////////////////////////

const arr = [1, 2, 3, 4, 5];

function searchInArray(arr, num) {
  let index = arr.length - 1;
  if (arr.length === 0) {
    return 'angka tidak ditemukan';
  }
  if (arr[index] === num) {
    return 'angka ditemukan pada index: ' + index;
  }
  let newArr = arr.slice(0, -1);
  return searchInArray(newArr, num);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

 //////////////////////////////////////////

 const first = 5;
 const second = 3;
 const third = 4;

 function trianglePattern(col, row) {
    if (col === 0) {
      return '';
    }
    let alphabet = '';
    for (let i = 0; i < row; i++) {
      if (i < col - 1) {
        alphabet += ' ';
      } else {
        alphabet += String.fromCharCode(64 + (row - col + (i - col) + 2));
      }
    }
    console.log(alphabet);
    col = col - 1;
    return trianglePattern(col, row);
  }
  
  console.log(trianglePattern(first, first));
  console.log(trianglePattern(second, second));
  console.log(trianglePattern(third, third));
