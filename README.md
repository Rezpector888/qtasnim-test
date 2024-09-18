# Qtasnim Test

## Persiapan Proyek

Pastikan Anda memiliki Node.js, npm, PostgreSQL, dan Prisma CLI yang sudah terpasang pada sistem Anda.
```
  node: v22.4.1
  npm: v10.8.1
  postgresql: v16
  prisma: 5.19.1

```
## Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/Rezpector888/qtasnim-test.git
   ```
2. Masuk ke direktori proyek:
  ```bash
  cd qtasnim-test
  ```
3. Install dependencies:
  ```bash
  npm install
  ```


## Konfigurasi Database
1. Copy file ```.env.example``` dengan name ```.env``` didalam root
2. Lalu sesuaikan ```DATABASE_HOST```, ```DATABASE_PORT```, ```DATABASE_USERNAME```, ```DATABASE_PASSWORD``` dan ```DATABASE_NAME``` sesuai dengan informasi koneksi database Anda.

## Migrasi dan Seed Data
1. Jalankan migrasi Prisma untuk membuat skema database:
  ```bash
  npx prisma migrate dev
  ```
2. (Opsional) Seed data awal ke dalam database:
  ```bash
  npx prisma db seed
  ```


## Menjalankan Aplikasi
1. Jalankan aplikasi dalam mode pengembangan:
  ```bash
    npm run start:dev
  ```
2. Aplikasi akan berjalan di ```http://localhost:3000```.


## Dokumentasi API
```
- Dokumentasi API tersedia di Swagger.
- Anda dapat mengaksesnya melalui http://localhost:3000/docs.
```

