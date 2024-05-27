# Menggunakan image Node.js sebagai base image
FROM node:14

# Menentukan direktori kerja di container
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json ke direktori kerja
COPY ./node-app/package*.json ./

# Menginstall dependencies
RUN npm install

# Menyalin sisa kode aplikasi ke container
COPY ./node-app .

# Expose port yang akan digunakan aplikasi (sesuaikan dengan aplikasi kamu)
EXPOSE 8080

# Menjalankan aplikasi
CMD ["node", "index.js"]
