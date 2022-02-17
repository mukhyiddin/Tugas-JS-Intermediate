const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(array) {
    sum = 0
    // kurangin gerbong
    if(array == array[sum]){
         return sum
    }else{
        array.forEach((value) => {
            array.lenght = array.lenght - 1
            return sum += value
        });
        console.log(sum);
    }
    // sumOfArray(array)
}

console.log(sumOfArray(arr1));
// sumOfArray(arr2);