// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// variabel untuk monica fav color
let monicaFavColor = new Set();
monicaFavColor.add("Yellow");
monicaFavColor.add("Pink");
monicaFavColor.add("White");
monicaFavColor.add("Purple");

// variabel untuk monica fav resto
let monicaFavRes = new Set();
monicaFavRes.add("Bento");
monicaFavRes.add("Sushi");
monicaFavRes.add("Pancake");
monicaFavRes.add("Eggy");
monicaFavRes.add("Tempura");
monicaFavRes.add("Padang");
monicaFavRes.add("Tteok");

// buat variable objek untuk monica education
const monicaEducation = [
  { name: "SD 01", city: "Jakarta", graduate: "2016" },
  { name: "SMP 02", city: "Jakarta", graduate: "2019" },
  { name: "SMA 03", city: "Tangerang" },
];

// memasukan data monica
const firstUser = { name: "Monica", gender: "Female", age: "17", email: "monica@dingdong.com", favoriteColor: [...monicaFavColor], isHavePet: "Yes", education: monicaEducation, favoriteRestaurant: [...monicaFavRes] };

// variabel untuk wendy fav color
let wendyFavColor = new Set();
wendyFavColor.add("Blue");
wendyFavColor.add("Black");
wendyFavColor.add("Grey");

// variable untuk wendy fav resto
let wendyFavRes = new Set();
wendyFavRes.add("Bento");
wendyFavRes.add("Sushi");
wendyFavRes.add("Pancake");
wendyFavRes.add("Eggy");
wendyFavRes.add("Tempura");
wendyFavRes.add("Padang");
wendyFavRes.add("Katsu");
wendyFavRes.add("Geprek");

// objek variable untuk wendy education
const wendyEducation = [
  { name: "SD 02", city: "Jakarta", graduate: "2010" },
  { name: "SMP 03", city: "Bogor", graduate: "2013" },
  { name: "SMA 01", city: "Surabaya", graduate: "2016" },
  { name: "Universitas Maju", city: "Tangerang" },
];
// memasukan data wendy
const secondUser = { name: "Wendy", gender: "Male", age: "23", email: "wendy@dingdong.com", favoriteColor: [...wendyFavColor], isHavePet: "No", education: wendyEducation, favoriteRestaurant: [...wendyFavRes] };

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = { users };
