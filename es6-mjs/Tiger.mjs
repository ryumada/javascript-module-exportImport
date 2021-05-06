class Tiger {
  // constructor method
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }
  // will return string
  growl(){
    return 'grrrrr';
  }
}

export default Tiger;

// kalo multiple harus pake object literals
// export {Tiger, Wolf}

// nanti cara importnya harus pake destructuring object
// import {Tiger as Harimau, Wolf as Serigala}