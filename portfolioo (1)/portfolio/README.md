# 🔌 Portfolio Web — Teknik Elektronika

Portofolio profesional satu halaman untuk Teknik Elektronika.

## Struktur Folder

```
portfolio/
├── index.html              # Halaman utama
├── README.md               # Panduan ini
│
├── css/
│   └── style.css           # Semua styling
│
├── js/
│   ├── data.js             # Data portofolio (diload sebelum main.js)
│   └── main.js             # Logika interaktif (canvas, render, animasi)
│
├── data/
│   └── portfolio.json      # Sumber data utama (edit di sini)
│
└── assets/
    ├── images/             # Foto proyek (project1.jpg, dst.)
    │   └── .gitkeep
    └── docs/
        └── cv.pdf          # Letakkan file CV kamu di sini
```

## Cara Kustomisasi

### 1. Edit Data Pribadi
Buka `js/data.js` dan ubah semua placeholder:
- `"name": "Nama Anda"` → nama lengkap kamu
- `"email"`, `"phone"`, `"location"` → informasi kontak
- `"linkedin"`, `"github"` → link profil

### 2. Tambah/Edit Proyek
Di `js/data.js`, edit array `"projects"`:
```json
{
  "id": 5,
  "title": "Nama Proyek Baru",
  "description": "Deskripsi singkat proyek...",
  "tags": ["Tag1", "Tag2"],
  "image": "assets/images/project5.jpg"
}
```
Letakkan foto proyek di folder `assets/images/`.

### 3. Edit Keahlian
Di bagian `"skills"`, ubah nilai `"level"` (0–100) sesuai kemampuan aktual.

### 4. Upload CV
Letakkan file PDF CV kamu di `assets/docs/cv.pdf`.
Tombol "Unduh CV" di navbar dan banner akan otomatis mengarah ke file ini.

### 5. Tambah Foto Proyek
Simpan gambar di `assets/images/` dengan nama yang sesuai `"image"` di data.
Format yang disarankan: JPG/WebP, ukuran 800×500px.

## Cara Menjalankan

Cukup buka `index.html` di browser. Tidak perlu server khusus.

Untuk development lebih nyaman, gunakan ekstensi **Live Server** di VS Code.

## Deploy

Untuk publish online, upload seluruh folder ke:
- **GitHub Pages** — gratis, cukup push ke repo publik
- **Netlify** — drag & drop folder, langsung online
- **Vercel** — connect ke GitHub, auto-deploy

---
*Dibuat dengan HTML, CSS, JavaScript murni — tanpa framework tambahan.*
