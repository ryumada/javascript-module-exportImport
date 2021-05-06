// menampilkan data export dari state.js
console.log('-------------------------------')
// setelah diimpor dengan require, kita dapat mengaksesnya layaknya variabel biasa
const {coffeStock, isCoffeeMachineReady} = require('./state');
console.log(coffeStock);
// console.log(isCoffeeMachineReady);
console.log('-------------------------------')

// membuat function makeCoffee
const makeCoffee = (type, miligrams) => {
  if (coffeStock[type] >= miligrams && isCoffeeMachineReady == true) {
    console.log('menyalakan mesin kopi');
    console.log('menggiling bisi kopi');
    console.log('memanaskan air');
    console.log('mencampurkan air dan kopi');
    console.log('menuangkan kopi ke dalam gelas');
    console.log('menuangkan susu ke dalam gelas');
    console.log(`Kopi ${type} Anda sudah siap?!`);
  } else {
    if(isCoffeeMachineReady == false){
      console.log('Mesin kopi mati?!');
    } else {
      console.log("Biji kopi habis?!");
    }
  }
}

// cek apa mesin kopinya sudah siap
makeCoffee("robusta", 80);

// ekspor function, lihat runMeFirst.js
module.exports = makeCoffee;