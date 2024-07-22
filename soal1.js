// 1.	Buatkan 1 buah program sederhana yang jika diinputkan sebuah angka akan menampilkan hasil seperti dibawah ini.

// 987654321
// 123456789
// 987654321
// 123456789
// 987654321
// 123456789
// 987654321
// 123456789
// 987654321

// Keterangan:
// Jumlah baris dan kolom mengikuti jumlah angka yang diinputkan. Input dari contoh diatas adalah angka 9.
// Jika diinput angka 5, maka akan hasil yang ditampilkan adalah 5 baris dan 5 kolom seperti contoh dibawah ini:

// 54321
// 12345
// 54321
// 12345
// 54321

// import module readline menggunakan require
const readline = require('readline');

// Buat fungsi untuk generate data
function generateData(n) {
  let result = [];

  // Looping tiap baris data
  for (let i = 0; i < n; i++) {
    let line = [];

    // Kalau barisnya ganjil
    if (i % 2 === 0) {
      for (let j = n; j > 0; j--) {
        // Masukin angka ke baris baru
        line.push(j);
      }
    } else {
      // Kalau barisnya genap
      for (let j = 1; j <= n; j++) {
        // Masukin angka ke baris baru
        line.push(j);
      }
    }

    // Gabungin baris jadi string
    result.push(line.join(''));
  }

  // Gabungin semua baris pakai newline
  return result.join('\n');
}

// Buat fungsi untuk ambil input dari user
function getUserInput() {
  // Buat readline interface untuk baca output yg din input
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

// Panggil fungsi untuk ambil input
getUserInput();
