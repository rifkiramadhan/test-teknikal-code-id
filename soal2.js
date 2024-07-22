// 2.	Buatkan 1 buah program sederhana yang jika diinputkan angka akan menampilkan hasil seperti dibawah ini.
// 191919191
// 282828282
// 373737373
// 464646464
// 555555555
// 646464646
// 737373737
// 828282828
// 919191919

// Keterangan
// Jumlah baris dan kolom mengikuti jumlah angka yang diinputkan. Input dari contoh diatas adalah angka 9.
// Jika diinput angka 5, maka akan hasil yang ditampilkan adalah 5 baris dan 5 kolom seperti contoh dibawah ini:

// 15151
// 24242
// 33333
// 42424
// 51515

// Import module readline menggunakan require
const readline = require('readline');

// Buat fungsi untuk generate data
function generateData(n) {
  let result = [];

  // Looping tiap baris data
  for (let i = 1; i <= n; i++) {
    let line = [];

    // Kalau barisnya genap
    if (i % 2 === 0) {
      for (let j = 1; j <= n; j++) {
        if (j % 2 === 0) {
          // Masukin angka ke kolom genap
          line.push(n - i + 1);
        } else {
          // Masukin angka ke kolom ganjil
          line.push(i);
        }
      }
    } else {
      // Kalau barisnya ganjil
      for (let j = 1; j <= n; j++) {
        if (j % 2 === 0) {
          // Masukin angka ke kolom genap
          line.push(n - i + 1);
        } else {
          // Masukin angka ke kolom ganjil
          line.push(i);
        }
      }
    }

    // Gabugin baris jadi string
    result.push(line.join(''));
  }

  // Gabungin semua baris pakai newline
  return result.join('\n');
}

// Buat fungsi untuk ambil input dari user
function getUserInput() {
  // Buat readline interface untuk baca output yg di input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Tampilin input prompt ke console
  rl.question('Masukkan Angka (Ex. 5, 9): ', input => {
    // Konversi input ke integer
    const n = parseInt(input.trim(), 10);

    // Cek apakah input valid
    if (isNaN(n) || n <= 0) {
      // Cek pesan error
      console.log('Input tidak sesuai. Silahkan coba lagi!');
    } else {
      // Cek data successfully
      console.log(generateData(n));
    }

    // Tutup readline
    rl.close();
  });
}

// Panggil fungsi get user input untuk ambil innput
getUserInput();
