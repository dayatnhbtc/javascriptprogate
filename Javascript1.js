// Template Literal

const name = "Ninja Ken";
const age = 14;

console.log(`Nama saya adalah ${name}`);
console.log(`Hari ini saya berusia ${age} tahun`);

// If Else Statement

const age = 17;

if (age >= 18) {
  console.log("Saya di atas 18 tahun");
} else if (age >= 10) {
  console.log("Saya berusia di bawah 18 tahun, namun di atas 9 tahun");
} else {
  console.log("saya dibawah 10 tahun");
}

// && If Statement
const age = 24;

if (age >= 20 && age < 30) {
  console.log("Saya di usia 20-an tahun");
}

// Boolean & Perbandingan

const password = "ninjaken";

if (password === "ninjaken") {
  console.log("Berhasil log in");
}

if (password !== "ninjaken") {
  console.log("Password salah");
}

// Swich Statement

const rank = 5;

switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;
  case 2:
    console.log("Anda meraih medali perak!");
    break;
  case 3:
    console.log("Anda meraih medali perunggu!");
    break;
  // Tambahkan default
  default:
    console.log("Semoga sukses dikesempatan berikutnya");
    break;
}
