# Menggunakan image Node.js sebagai base image
FROM node:18

# Menentukan direktori kerja di container
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json ke direktori kerja
COPY ./package*.json ./

# Menginstall dependencies
RUN npm install

# Menyalin sisa kode aplikasi ke container
COPY . .

# Install ekstensi mysqli yang diperlukan
RUN docker-php-ext-install mysqli

# Expose port yang akan digunakan aplikasi (sesuaikan dengan aplikasi kamu)
EXPOSE 8080

# Menjalankan aplikasi
CMD ["node", "start"]
