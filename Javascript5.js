
// MEMISAH FILE 

/*
Pertama, mari kita buat agar class Animal dalam animal.js dapat digunakan dalam file lain. Setelah mendefinisikan class, tulis export default ClassName untuk meng-export class dan memungkinkannya untuk diteruskan ke file yang berbeda.

Selanjutnya, mari kita buat agar class Animal dapat digunakan di dalam dog.js. Untuk menggunakan class yang didefinisikan dalam file lain, Anda harus meng-importnya. Anda dapat meng-import class dengan menulis import ClassName from "./fileName" dibaris atas file. Anda dapat mengecualikan ekstensi file .js.

Statement export default disebut default export. Dengan export default, saat file di-import, export default value akan secara otomatis di-import. Karena itu, nama nilai saat meng-export dan meng-import code dapat berbeda.

 export bernama di-export dengan menuliskan nama di dalam {} (tanda kurung kurawal) tanpa menuliskan default. Saat meng-import nilai export bernama, tentukan nama export tersebut di file yang akan menerimanya. Nilai yang Anda import dapat ditentukan dengan menulis import { valueName } from "./fileName" menggunakan {}.

 Tidak seperti export default, export bernama dapat meng-export beberapa nilai. Seperti yang ditunjukkan di sebelah kiri, menulis export { name1, name2 } akan memungkinkan Anda membuat beberapa export bernama dari satu file. Beberapa import juga dapat dibuat bersamaan dengan menggunakan koma untuk memisahkan nilai-nilai tersebut.
*/