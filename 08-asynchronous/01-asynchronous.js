// 1. Apa itu synchronous?
        // Merupakan mode default dalam proses eksekusi perintah kode yang di jalankan secara baris demi baris

// 2. Apa itu asynchronous?
        // asynchronous tidak perlu menunggu operasi sebelumnya selesai untuk mengeksekusi operasi setelahnya

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
        // Bisa diterapkan, kita dapat memanfaatkan ketika user mengakses situs kita, disaat loadin kita dapat memberi konten yang berbeda
        // dan menjalankan secara berbarengan.

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
        // First log mengeluarkan output sebanyak 5x sedangkan Second log mengeluarkan output sebanyak 5x namun isinya ada 6

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
        // Tidak sama,tipe data i pada looping menggunakan var yang dimana variabel tersebut global sehingga i pada console log pada
        // log kedua adalah 6 yaitu hasil i hasil  setelah looping selesai yaitu 5 dan ditambah dengan i++
        // dikarenakan ada setTimeout maka code akan delay selama 1 detik dan di jalankan di background setelah loop selesai.

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
        // mengubah var menjadi let


for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }

  //hasil perbaikan
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }
