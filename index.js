console.log('menyalakan mesin kopi');
console.log('menggiling bisi kopi');
console.log('memanaskan air');
console.log('mencampurkan air dan kopi');
console.log('menuangkan kopi ke dalam gelas');
console.log('menuangkan susu ke dalam gelas');
console.log('Kopi Anda sudah siap?!');

// menampilkan data export dari state.js
console.log('-------------------------------')
// setelah diimpor dengan require, kita dapat mengaksesnya layaknya variabel biasa
const coffeStock = require('./state');
console.log(coffeStock);
console.log('-------------------------------')

// membuat function makeCoffee
const makeCoffee = (type, miligrams) => {
  if(coffeStock[type] >= miligrams) {
    console.log('Kopi Berhasil di buat');
  } else {
    console.log("Biji kopi habis?!");
  }
}
makeCoffee("robusta", 80);

// ekspor function, lihat runMeFirst.js
module.exports = makeCoffee;