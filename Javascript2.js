// While Loop

let number = 1;

while (number <= 100) {
  console.log(number);
  number += 1; // Wajib Increment and Decrement
}

// Loop For
for (let number = 1; number <= 100; number++) {
  console.log(number);
}

// Contoh Penggabungan Loop For dan If statement
for (let number = 1; number <= 100; number++) {
  if (number % 3 === 0) {
    console.log("Kelipatan 3");
  } else {
    console.log(number);
  }
}

// Array
const animals = [
  "anjing",
  "kucing",
  "domba",
  "kelinci",
  "monyet",
  "harimau",
  "beruang",
  "gajah",
];

// Gunakan property length untuk mem-print jumlah element di array
console.log(animals.length);

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Object, Array dan mencegah dari undefined
const characters = [
  { name: "Ninja Ken", age: 14 },
  { name: "Guru Domba", age: 100 },
  { name: "Baby Ninja Ben", age: 5 },
  { name: "Birdie" },
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  const character = characters[i];
  console.log(`Nama saya adalah ${character.name}`);
  if (character.age === undefined) {
    // mencegah dari undefined
    console.log("Umur saya rahasia!");
  } else {
    console.log(`Saya berumur ${character.age} tahun`);
  }
}

// Proyek 1
const cafe = {
  name: "Progate Cafe",
  businessHours: {
    opening: "10:00",
    closing: "20:00",
  },
};
console.log(`Nama: ${cafe.name}`);
console.log(
  `Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`
);

// Proyek 2

const cafe = {
  name: "Progate Cafe",
  businessHours: {
    opening: "10:00",
    closing: "20:00",
  },
  menu: ["Kopi", "Teh", "Kue Cokelat"],
};

console.log(`Nama: ${cafe.name}`);
console.log(
  `Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`
);
console.log(`----------------------------`);
console.log("Menu Rekomendasi");

// Gunakan loop for untuk mem-print nilai menu array
for (let i = 0; i < cafe.menu.length; i++) {
  console.log(cafe.menu[i]);
}
