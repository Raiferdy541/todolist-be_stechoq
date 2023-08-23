# Aplikasi Todo List by Raihan Ferdyanza

Aplikasi Todo List sederhana menggunakan Express.js, MySQL, dan JWT untuk mengelola daftar tugas.

## Langkah-langkah Menjalankan Aplikasi

### Prasyarat

Sebelum memulai, pastikan Anda telah memasang beberapa aplikasi berikut:

- Visual Studio Code (VSCode)
- XAMPP atau PHPMyAdmin untuk MySQL
- Node.js dan NPM (Node Package Manager)

### Langkah 1: Menyiapkan Database

1. Jalankan XAMPP atau PHPMyAdmin dan pastikan server MySQL berjalan di localhost.

2. Buat database baru dengan nama "todo_list-jwt" melalui PHPMyAdmin atau menggunakan perintah SQL berikut:

    ```sql
    CREATE DATABASE todo_list-jwt;

    Jalankan perintah SQL berikut untuk membuat tabel "users" dan "todolist":

    CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
    );

    CREATE TABLE todolist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    task VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

### Langkah 2: Menginstal Paket
1. Buka terminal di direktori aplikasi.

2. Jalankan perintah berikut untuk menginstal paket yang diperlukan: "npm install"

### Langkah 3: Menjalankan Aplikasi
1. Dalam terminal yang sama, jalankan perintah berikut untuk menjalankan aplikasi todolist:
"npm start"
Atau jika ingin menggunakan nodemon untuk pengembangan:
"npm run dev"
Aplikasi akan berjalan di localhost:10001.

### Langkah 4: Menguji API Menggunakan Postman
1. Buka Postman dan impor collection dan evironment yang disediakan ("To Do List JWT.postman_collection.json") dan ("To Do List JWT.postman_environment.json"). Atau anda juga bisa membuka link ini"https://elements.getpostman.com/redirect?entityId=27291504-c2b9b4c3-ae51-4dd1-ba72-361131547378&entityType=collection" untuk mengakses collectionnya.


2. Akses environment dan collection yang telah dibagikan 

3. Lalu lakukan registrasi dan login menggunakan endpoint yang disediakan untuk mendapatkan token.

4. Setelah login berhasil, pastikan token akan otomatis disimpan dalam variabel "jwt" di environment.

### Langkah 5: Mengeksplorasi Aplikasi
1. Gunakan token yang telah disimpan untuk mengakses dan mengelola todo list melalui endpoint yang tersedia.

2. Anda dapat membuat, melihat, mengedit, dan menghapus todo sesuai dengan hak akses yang diberikan.

Selamat mencoba dan semoga aplikasi Todo List ini bermanfaat untuk Anda!

Aplikasi ini menggunakan Express.js, MySQL, bcrypt, sql2, dan jsonwebtoken. Dikembangkan oleh Raihan Ferdyanza.