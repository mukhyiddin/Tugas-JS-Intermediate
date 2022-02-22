

const arr = [1,4,6,7];
const arr2 = [7,4,2,1];
const arr3 = [5];

function reverse(number){
    const arrayBalik = [];
    for (let i = number.length - 1; i >= 0;  i--) {
        number[i];
        arrayBalik.push(number[i])
    }
    return arrayBalik;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);
const newArr3 = reverse(arr3);

console.log(" ");
console.log(" ------------SOAL 1 ----------- ");

console.log(arr, newArr);
console.log(arr2, newArr2);
console.log(arr3, newArr3);