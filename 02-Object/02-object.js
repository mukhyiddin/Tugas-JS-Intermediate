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
      const field = obj + path

      if (path === undefined){
          return null;
      }
      return field;
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

const espresso = getObjectValue(milkBasedCoffee, milkBasedCoffee.ingredients.espresso.origin);
const coffeeBrand = getObjectValue(milkBasedCoffee, milkBasedCoffee.ingredients.espresso.brand);
const isMilkVegan = getObjectValue(milkBasedCoffee, milkBasedCoffee.ingredients.milk.isVegan);

console.log("--------- SOAL 2 ----------");
console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

