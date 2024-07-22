// 3.	Buatkan 1 buah program sederhana yang jika diinputkan angka akan menampilkan hasil seperti dibawah ini.
// -2-4-6-8-
// 1-3-5-7-9
// -2-4-6-8-
// 1-3-5-7-9
// -2-4-6-8-
// 1-3-5-7-9
// -2-4-6-8-
// 1-3-5-7-9
// -2-4-6-8-

// Keterangan
// Jumlah baris dan kolom mengikuti jumlah angka yang diinputkan. Input dari contoh diatas adalah angka 9.
// Jika diinput angka 5, maka akan hasil yang ditampilkan adalah 5 baris dan 5 kolom seperti contoh dibawah ini:

// -2-4-
// 1-3-5
// -2-4-
// 1-3-5
// -2-4-

// Import module readline menggunakan require
const readline = require('readline');

// Buat fungsi untuk generate data
function generateData(n) {
  let result = [];

  // Looping tiap baris data
  for (let i = 1; i <= n; i++) {
    let line = [];

    // Kalau barisnya ganjil
    if (i % 2 !== 0) {
      for (let j = 1; j <= n; j++) {
        if (j % 2 === 0) {
          // Masukkan angka genap ke kolom genap
          line.push(j);
        } else {
          // Masukkan tanda - ke kolom gajil
          line.push('-');
        }
      }
    } else {
      // Kalau barisnya genap
      for (let j = 1; j <= n; j++) {
        if (j % 2 !== 0) {
          // Masukkan angka ganjil ke kolom ganjil
          line.push(j);
        } else {
          // Masukkan tanda - ke kolom genap
          line.push('-');
        }
      }
    }

    // Gabunngin baris jadi string
    result.push(line.join(''));
  }

  // Gabungin semua baris pakai newline
  return result.join('\n');
}

// Buat fungsi untuk ambil input dari user

function getUserInput() {
  // Buat readline interface untuk baca inpuut yg diinput
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Tampilin innput prompt ke console
  rl.question('Masukkan Angka (Ex. 5, 9): ', input => {
    // Konversi input ke integer
    const n = parseInt(input.trim(), 10);

    // Cek apakah input valid
    if (isNaN(n) || n <= 0) {
      // Tampilkan pesan error
      console.log('Input tidak sesuai. Silahkan coba lagi!');
    } else {
      // Tampilkan data yang berhasil dibuat
      console.log(generateData(n));
    }

    // Tutup readline
    rl.close();
  });
}

// Panggil fungsi uuntuk ambil input dari user
getUserInput();
