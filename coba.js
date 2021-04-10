// comment 1: mengimpor module lodash buatan orang lain
const _ = require('lodash');

// comment 2: mendeklarasikan dan menginisialisasi myArray
const myArray = [1, 2, 3, 4];
//comment 3: menggunakan fungsi tambah data array di lodash
const sum = _.sum(myArray);

// comment 4: menampilkan hasil penjumlahan data yang ada di myArray
console.log(sum);