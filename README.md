# 🔌 Portfolio Web — Upik Indriani (Electronics Engineering)

Website portofolio profesional satu halaman yang dirancang khusus untuk bidang Teknik Elektronika, Otomasi Industri, dan Sistem Kendali Tertanam (*Embedded Systems*). Website ini bekerja secara dinamis menggunakan JavaScript murni (DOM Manipulation) untuk memuat data tanpa memerlukan server lokal tambahan.

## 📁 Struktur Folder Aktual
portfolio/
├── index.html              # Halaman utama website
├── README.md               # Panduan dokumentasi ini
│
├── css/
│   └── style.css           # Semua styling dan tema warna (cyberpunk/industrial)
│
├── js/
│   ├── data.js             # Objek data utama (Profil, Proyek, Skills, & Pengalaman)
│   └── main.js             # Logika interaktif (Canvas Circuit Animation & DOM Rendering)
│
└── assets/
├── images/             # Tempat penyimpanan seluruh aset gambar & foto
│   ├── upik.jpg        # Foto profil utama
│   ├── vacum.jpg       # Foto proyek Robot Smart Vacuum Cleaner
│   ├── projectkbk.jpg  # Foto proyek Sistem Pakan Otomatis MATLAB GUI
│   └── project.instrumen.jpg # Foto proyek Robot Power Control & Heater Monitoring
│
└── docs/
└── CV Upik.pdf     # File berkas kurikulum vitae asli yang dapat diunduh


## 🛠️ Cara Kustomisasi & Sinkronisasi Data

### 1. Mengubah Data Profil & Kontak
Jika ada perubahan nomor telepon, email, atau tautan media sosial di kemudian hari, buka file `js/data.js` dan sesuaikan nilai pada objek `"profile"` dan `"contact"`.

### 2. Manajemen Konten Proyek (Rendering Dinamis)
Seluruh proyek di halaman depan tidak ditulis manual di HTML, melainkan di-render otomatis oleh fungsi `renderProjects()` di `main.js`. 
*Catatan Penting:* Pastikan nama file gambar di dalam folder `assets/images/` sama persis (termasuk huruf besar/kecil ekstensinya seperti `.jpg`) dengan yang tertulis di kode `data.js`.

### 3. Tombol Unduh CV
Tombol "Unduh CV" pada komponen navigasi (Navbar) dan banner utama telah diarahkan langsung menuju jalur file: `assets/docs/CV Upik.pdf`. Jika kamu memperbarui isi CV, cukup hapus file lama dan unggah file barumu ke dalam folder `assets/docs/` dengan nama file `CV Upik.pdf`.

## 🚀 Cara Menjalankan Aplikasi

1. **Secara Lokal (Offline):** Cukup klik dua kali (*double click*) file `index.html` pada komputer kamu. Berkat konfigurasi pemuatan variabel lokal di `data.js` sebelum `main.js`, data akan langsung terbaca di browser tanpa terkena kendala aturan keamanan *CORS Policy*.
2. **Mode Pengembangan (Development):** Sangat disarankan menggunakan editor **Visual Studio Code** dengan memasang ekstensi **Live Server**.

## 🌐 Panduan Deploy ke GitHub Pages

1. Pastikan seluruh folder proyek ini sudah di-push ke repositori publik GitHub milikmu (`github.com/UpikIndriani/portfolio`).
2. Masuk ke menu **Settings** di halaman repositori GitHub tersebut.
3. Pilih opsi **Pages** di menu bilah sisi kiri (*sidebar*).
4. Pada bagian *Build and deployment*, ubah *Source* menjadi **Deploy from a branch**.
5. Atur *Branch* utama ke **main** (atau **master**), pilih folder `/ (root)`, lalu klik tombol **Save**.
6. Tunggu sekitar 1–2 menit, tautan website portofolio profesionalmu akan langsung aktif secara online!

---
*Dibuat dengan presisi untuk memenuhi standar portofolio rekayasa teknologi elektronika moderen.*
