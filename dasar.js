/*************************************************
 * BASIC JAVASCRIPT FOR BEGINNERS
 * File ini berisi dasar-dasar JavaScript
 * Cocok untuk demo front-end development
 *************************************************/

/* ===============================
   1. VARIABLE
================================ */
let nama = "Mayang";     // bisa diubah
const year = 2026;        // tidak bisa diubah

// console.log untuk menampilkan sesuatu di console browser
console.log("Name:", nama);
console.log("Year:", year);

/* ===============================
   2. DATA TYPES
================================ */
let age = 25;                 // Number
let isStudent = true;         // Boolean
let hobbies = ["coding", "reading", "design"]; // Array
let profile = {               // Object
  username: "vira",
  role: "frontend"
};

console.log(age, isStudent, hobbies, profile);

// tipe data secara otomatis terdeteksi oleh JavaScript
// tipe data bisa dicek dengan typeof
console.log("Tipe data nama:", typeof nama);
console.log("Tipe data age:", typeof age);
console.log("Tipe data isStudent:", typeof isStudent);
console.log("Tipe data hobbies:", typeof hobbies);
console.log("Tipe data profile:", typeof profile);

/* ===============================
   3. OPERATOR
================================ */
let a = 10;
let b = 5;

console.log("Add:", a + b); 
// Operasi aritmatika lainnya: - (kurang), / (bagi), * (kali), % (modulus)

console.log("Greater:", a > b);
/*
Operator perbandingan lainnya: <, >=, <=, ==, !=, ===, !==
operator '===' artinya nilai dan tipe data harus sama
operator '==' artinya hanya nilai yang dibandingkan, tipe data tidak harus sama
operator '!==' artinya nilai dan/atau tipe data tidak sama
operator '!=' artinya nilai tidak sama, tipe data tidak harus sama */

console.log("Logic:", a > 5 && b < 10);
/* operator logika: && (dan), || (atau), ! (not)"
contoh: 
true && false = false
true || false = true
!true = false */

/* ===============================
   4. CONDITIONAL
================================ */
// if...else statement
if (age >= 18) {
  console.log("User is adult");
} else {
  console.log("User is underage");
}

// if...else if...else statement
let uang = 75000;
if (uang >= 100000) {
  console.log("Beli makanan mahal");
} else if (uang >= 50000) {
  console.log("Beli makanan sedang");
} else {
  console.log("Beli makanan murah");
}

// switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  default:
    console.log("Hari lain");
}

// ternary operator (kondisi percabangan singkat hanya 1 baris)
const passportStatus = true;
let canTravel = passportStatus ? "Bisa pergi" : "Tidak bisa pergi";

/* ===============================
   5. LOOP
================================ */
/* perulangan for */
for (let i = 0; i < hobbies.length; i++) {
  console.log("Hobby:", hobbies[i]);
}

/* perulangan for...of */
for (let hobby of hobbies) {
  console.log("Hobby (pakai perulangan for...of):", hobby);
}

// perulangan dengan forEach (method dari array)
hobbies.forEach(function (hobby) {
  console.log("Hobby (pakai forEach):", hobby);
});

/* perulangan while */
let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}

// perulangan do...while
let num = 0;
do {
  console.log("Num:", num);
  num++;
} while (num < 3);

/* bedanya perulangan do...while dengan while biasa adalah
do...while akan menjalankan blok kode minimal 1 kali
walaupun kondisi while-nya salah */

// perulangan dengan break dan continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Ketemu 5, keluar dari loop");
    break; // keluar dari loop
  }
  if (i % 2 === 0) {
    continue; // lewati iterasi ini jika i genap
  }
  console.log("i ganjil:", i);
}

/* ===============================
   6. FUNCTION
================================ */
// function biasa
function greet(userName) {
  return "Hello, " + userName;
}
console.log(greet(nama));

// fungsi dengan 0 argumen
function sayHi() {
  return "Hi there!";
}
console.log(sayHi());

// function dengan parameter default
function multiply(x, y = 2) {
  return x * y;
}
console.log("Multiply Result:", multiply(5)); // y akan otomatis 2
console.log("Multiply Result with 3:", multiply(5, 3)); // y diganti jadi 3, hasilnya 15

// function dengan parameter rest
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num; // ini sama dengan: total = total + num
  }
  return total;
}
console.log("Sum Result:", sum(1, 2, 3, 4, 5));
/* parameter rest mengumpulkan semua argumen menjadi array, ditandai dengan '...' sebelum nama parameter  */

/* ===============================
   7. ARROW FUNCTION
================================ */ 
const add = (x, y) => x + y;
console.log("Arrow Function Result:", add(3, 7));

/* bedanya dengan function biasa adalah
function arrow tidak punya 'this' sendiri
function arrow lebih singkat jika hanya 1 baris kode 
contoh:
const obj = {
  value: 10,
  getValue: () => { return this.value; } // 'this' di sini tidak merujuk ke obj
};
console.log(obj.getValue()); // outputnya undefined
*/

/* ===============================
   8. DOM MANIPULATION
================================ */
// Pastikan HTML punya elemen dengan id ini
const title = document.getElementById("title");
const newTitle = "Updated Title from JS";
if (title) {
  title.innerText = newTitle;
}

// menampilkan variable atau state di dalam elemen HTML
const description = document.getElementById("description");
if (description) {
  description.innerText = "This paragraph is set on " + new Date().toLocaleDateString();
  // toLocaleDateString() untuk menampilkan tanggal sesuai waktu lokal
}

const author = document.getElementById("author");
if (nama) {
  author.innerText = "Made by: " + nama;
}

// menampilkan state boolean di dalam elemen HTML
const accInfo = document.createElement("p");
let role = profile.role === "frontend" ? "Front-end Developer" : "User";
accInfo.innerText = "Role: " + role + " | Student: " + (isStudent ? "Yes" : "No") + " | Nama: " + profile.username;
document.body.appendChild(accInfo);

/* ===============================
   9. EVENT HANDLING
================================ */
// Pastikan HTML punya button dengan id="btn"
const button = document.getElementById("btn");
if (button) {
  button.addEventListener("click", function () {
    alert("Button clicked!");
    if (title && title.innerText !== "Original Title") {
      // balik ke teks awal saat tombol diklik
      title.innerText = "Original Title";
      title.style.color = "black"; // ubah warna teks jadi hitam
      document.body.removeChild(accInfo);
    } else if (title) {
      // ubah ke teks baru saat tombol diklik
      title.innerText = newTitle;
      title.style.color = "blue"; // ubah warna teks jadi biru
      document.body.appendChild(accInfo);
    }
  });
}

/* ===============================
   10. SIMPLE STATE
================================ */
let counter = 0;

// cara menampilkan state counter di halaman web
const counterDisplay = document.createElement("p");
counterDisplay.innerText = "Counter: " + counter;
document.body.appendChild(counterDisplay);

function updateCounterDisplay() {
  counterDisplay.innerText = "Counter: " + counter;
}

// modifikasi fungsi increaseCounter untuk update tampilan
function increaseCounterAndUpdate() {
  counter++;
  updateCounterDisplay();
  console.log("Counter:", counter);
}

/* ===============================
   11. ARRAY METHOD (BASIC)
================================ */
const numbers = [1, 2, 3, 4];

// map: membuat array baru dengan hasil dari fungsi yang diterapkan ke setiap elemen
const squared = numbers.map(function (num) {
  return num * num;
});
console.log("Squared:", squared);

// filter: membuat array baru dengan elemen yang memenuhi kondisi tertentu
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);

// reduce: mengurangi array menjadi satu nilai berdasarkan fungsi yang diterapkan
const sumOfNumbers = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);
console.log("Sum of Numbers:", sumOfNumbers);

// menambahkan elemen ke array dengan push
numbers.push(10);
console.log("Numbers after push:", numbers);

// menghapus elemen terakhir dari array dengan pop
const lastElement = numbers.pop();
console.log("Popped Element:", lastElement);
console.log("Numbers after pop:", numbers);

// menghapus elemen pertama dari array dengan shift
const firstElement = numbers.shift();
console.log("Shifted Element:", firstElement);
console.log("Numbers after shift:", numbers);

// menambahkan elemen di awal array dengan unshift
numbers.unshift(0);
console.log("Numbers after unshift:", numbers); 

/* ===============================
   12. API CALL (INTRO)
================================ */
// fetch data dasar
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
      console.log("API Data:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

// cara menampilkan data dari fetch API ke halaman web
function fetchDataAndDisplay() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
      const apiDataDisplay = document.createElement("div");
      apiDataDisplay.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
      document.body.appendChild(apiDataDisplay);
    } )
    .catch(error => {
      console.error("Error:", error);
    });
}

// panggil fungsi untuk fetch data
fetchData();
fetchDataAndDisplay();

/* ===============================
   END OF BASIC JAVASCRIPT
================================ */
