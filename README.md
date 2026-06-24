# 🔌 Portfolio Web — Revina Triadita Suheni (Automation & Control Systems)

Website portofolio profesional satu halaman yang dirancang untuk merepresentasikan kompetensi di bidang Teknik Elektronika, Otomasi Industri, Pemrograman PLC, dan Rangkaian Listrik Industri. Website ini bekerja secara dinamis menggunakan manipulasi DOM JavaScript murni untuk merender data tanpa memerlukan kompilasi framework/server backend.

## 📁 Struktur Dokumentasi Aset Gambar & File
portfolio/
├── index.html              # Halaman struktural utama website
├── README.md               # Panduan dokumentasi kustomisasi ini
│
├── css/
│   └── style.css           # Pengaturan tema warna industrial/cybernetic
│
├── js/
│   ├── data.js             # Tempat menyimpan seluruh objek data Revina (EDIT DI SINI)
│   └── main.js             # Logika interaktif canvas sirkuit dan engine rendering data
│
└── assets/
├── images/             # Folder wajib untuk meletakkan foto proyek & profil
│   ├── revina.jpg      # Foto profil utama Revina
│   ├── tangki.jpg      # Foto Proyek Monitoring Parameter Tangki
│   ├── projectkbk.jpg  # Foto Proyek Sistem Pakan Otomatis MATLAB
│   ├── smarthome.jpg   # Foto Proyek Smart Home Tenaga Surya
│   ├── pakan_jarakjauh.jpg # Foto Proyek Pakan Ikan IoT
│   └── stardelta.jpg   # Foto Proyek Panel Motor Star-Delta Industri
│
└── docs/
└── cv.pdf          # Letakkan file berkas PDF CV kamu di folder ini


## 🛠️ Bagaimana Jika Ingin Menambahkan / Mengubah Foto?

### 1. Menambahkan Foto Proyek Baru
Jika Revina memiliki proyek baru (misal: proyek pemrograman PLC Omron baru), langkahnya adalah:
1. Simpan gambar dokumentasi proyek ke dalam folder `assets/images/` (Misal nama filenya: `proyek_plc_baru.jpg`). *Pastikan ekensinya huruf kecil (.jpg)*.
2. Buka file `js/data.js`, cari bagian array `"projects"`, dan tambahkan satu blok objek baru di bagian bawah seperti ini:
```javascript
{
  "id": 6,
  "title": "Sistem Otomasi Sortir Barang Berbasis PLC",
  "description": "Merancang logika pemrograman PLC ladder diagram untuk otomasi lengan robot penyortir barang berdasarkan warna.",
  "tags": ["PLC", "Ladder Diagram", "Otomasi Industri"],
  "image": "assets/images/proyek_plc_baru.jpg" // JALUR HARUS SAMA PERSIS DENGAN NAMA FILE FISIK
}
