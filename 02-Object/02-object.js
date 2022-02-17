// SOAL 1
const person = {
    name: "Yudi",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function(nama) {
      console.log("Hello World")
      return console.log("Hello", nama);
    }
  }
  
 person.favDrinks[1] = "Tap water"
  
  
  /// STOP
  
  console.log("--------- SOAL 1 ----------");
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  person.greeting(person.name);
  console.log("");



// SOAL 2
  function getObjectValue(obj,path) {
      // const field = obj + path

      // if (path === undefined){
      //     return null;
      // }
      // return field;

      function getObjectValue(obj, path) {
        let arrPath = path.split('.');
        for (let i = 0; i < arrPath.length; ++i){
          let j = arrPath[i];
          if (j in obj) {
              obj = obj[j];
          } else {
              return null;
              break;
          }
        }
        return obj;
      }
    
      }
    
  

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }    
  },
}
// getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");
const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log("--------- SOAL 2 ----------");
console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

// SOAL 3
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (items) => {
    /// EDIT DOWN HERE
    // [sum of (sell - buy)]
//     hitung keuntungan yang kita hasilkan dari tiap-tiap koin dengan cara (sell - buy)
//      ulangi langkah pertama, hingga kita selesai menghitung seluruh history transaksi yang ada (dalam contoh ini kita ada 3 buah history dari hari 1, 2, dan 3)
//      jumlahkan seluruh keuntungan yang kita buat selama 3 hari berdasarkan koin yang kita gunakan
//      rangkuman dari pendapatan kita HARUS berupa sebuah object
//      pengerjaan harus menggunakan built-in method reduce
    
    const dupObjItems = [];
    
      for (let i = 0; i < items.length; i++) {
        
        const item = items[i];
        
        let tempItem = {
          btc: 0,
          doge: 0,
          eth: 0
        };

        const btc = Object.values(item.btc).reduce((buy, sell) => sell - buy );
        const eth = Object.values(item.eth).reduce((buy, sell) => sell - buy );
        const doge = Object.values(item.doge).reduce((buy, sell) => sell - buy );
        tempItem['btc'] = btc;
        tempItem['eth'] = eth;
        tempItem['doge'] = doge;
        dupObjItems.push(tempItem);
        
      }
      
        const result = dupObjItems.reduce(
          (prev, curr ) => {
            curr.btc += prev.btc;
            curr.eth += prev.eth;
            curr.doge += prev.doge;
            return curr;
          },

          { btc: 0, eth: 0, doge:0 }

        );
        return result;
        

    // const hitung = items[0].reduce(
    //   (previousValue, currentValue) => previousValue + currentValue
    // );
  
    // cek1 = items[0].doge.sell - items[0].doge.buy
    // cek2 = items[1].doge.sell - items[1].doge.buy
    // cek3 = items[2].doge.sell - items[2].doge.buy 
    // hitung = cek1 + cek2 + cek3    
    // console.log(hitung);
    
  };
  console.log("");
  console.log("--------- SOAL 3 ----------");
  console.log(calculateIncome(items));
  
  
//   expected hasil
//   {
//     btc: 0,
//     doge: -2.5,
//     eth: -1.5
//   }