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
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  person.greeting(person.name);
