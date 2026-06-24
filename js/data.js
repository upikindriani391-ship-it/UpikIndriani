// data.js — memuat data portofolio dari JSON
// Salin isi portfolio.json ke sini agar bisa digunakan secara langsung
// tanpa perlu fetch (kompatibel dengan membuka file lokal / tanpa server)

const portfolioData = {
  "profile": {
    "name": "Upik Indriani",
    "title": "Electronics Engineering",
    "tagline": "Berfokus pada otomasi industri dan sistem kendali — merancang serta mengembangkan sistem tertanam dengan ketelitian tinggi.",
    "email": "upikindriani391@gmail.com",
    "phone": "082324734691",
    "location": "Pati, Jawa Tengah",
    "github": "github.com/UpikIndriani",
    "image": "assets/images/upik.jpg"
  },

  "projects": [
    {
      "id": 1,
      "title": "Prototype Smart Vacuum Cleaner Robot Berbasis Arduino Uno",
      "description": "Robot penyedot debu otomatis pintar yang bergerak secara otonom. Mengintegrasikan unit input (sensor ultrasonik), unit kontrol (Arduino UNO & Motor Shield), serta unit output (motor DC vakum & motor servo pengarah) guna mendeteksi serta menghindari rintangan secara real-time.",
      "tags": ["Arduino UNO", "Sensor Ultrasonik", "Motor Shield", "Servo MG995"],
      "image": "assets/images/vacum.jpg"
    },
    {
      "id": 2,
      "title": "Sistem Pakan Otomatis Berbasis MATLAB GUI dan Arduino Uno",
      "description": "Rancangan sistem pemberian pakan otomatis terjadwal menggunakan sensor LDR untuk mendeteksi intensitas cahaya dan motor servo MG995 sebagai penggerak mekanis katup wadah pakan. Dilengkapi fitur Mode Otomatis serta Mode Manual yang dikendalikan langsung secara real-time melalui antarmuka interaktif MATLAB GUI.",
      "tags": ["MATLAB GUI", "Arduino Uno", "Sensor LDR", "Servo MG995"],
      "image": "assets/images/projectkbk.jpg"
    },
    {
      "id": 3,
      "title": "Robot Power Control & Heater Monitoring System",
      "description": "Proyek optimalisasi kelistrikan mesin industri yang dikembangkan selama masa magang di CV. Jaya Setya Plastik. Berfokus pada perancangan kendali distribusi daya untuk lengan robot mekanis, serta membangun sistem pemantauan beban pemanas (heater load monitoring) guna mendeteksi anomali arus elektrik secara dini.",
      "tags": ["PLC Maintenance", "Troubleshooting", "Industrial Control", "Heater Monitoring"],
      "image": "assets/images/project.instrumen.jpg"
    }
  ],

  "skills": [
    {
      "category": "Aplikasi Otomasi & Rekayasa",
      "items": [
        { "name": "CX Programmer", "level": 90 },
        { "name": "Pemrograman PLC", "level": 85 },
        { "name": "Arduino IDE", "level": 92 },
        { "name": "Proteus", "level": 80 },
        { "name": "MATLAB", "level": 85 },
        { "name": "Eagle Software", "level": 88 }
      ]
    },
    {
      "category": "Alat Kerja & Desain",
      "items": [
        { "name": "Microsoft Word", "level": 95 },
        { "name": "Microsoft Excel", "level": 90 },
        { "name": "Microsoft PowerPoint", "level": 92 },
        { "name": "Canva", "level": 85 }
      ]
    },
    {
      "category": "Kemampuan Personal & Bahasa",
      "items": [
        { "name": "Kerjasama Tim (Teamwork)", "level": 95 },
        { "name": "Komunikasi Efektif", "level": 90 },
        { "name": "Analisis Data", "level": 85 },
        { "name": "Bahasa Indonesia (Native)", "level": 100 },
        { "name": "Bahasa Inggris (Konversasional)", "level": 75 }
      ]
    }
  ],

  "experience": [
    {
      "period": "2025",
      "role": "Magang di Divisi Perawatan (Maintenance Division Internship)",
      "company": "CV. Jaya Setya Plastik",
      "description": "Melakukan pemeliharaan berkala serta troubleshooting kerusakan pada mesin-mesin produksi industri. Melakukan perbaikan dan perawatan berkala perangkat PLC beserta driver penunjangnya. Berkontribusi aktif dalam pengerjaan proyek sistem kontrol daya robot dan sistem monitoring beban pemanas (heater).",
      "active": true
    },
    {
      "period": "November 2024",
      "role": "Pelatihan Desain & Manufaktur PCB",
      "company": "PT. Indomaker Indonesia Mandiri",
      "description": "Mengikuti sertifikasi pelatihan intensif berfokus pada pembuatan skematik jalur sirkuit elektronik menggunakan Eagle Software serta menguasai seluruh alur inti proses manufaktur pencetakan papan PCB.",
      "active": false
    }
  ],

  "education": [
    {
      "period": "2023 - 2026",
      "degree": "D3 Teknik Elektronika",
      "institution": "Politeknik Negeri Semarang",
      "description": "Fokus studi mendalam pada rekayasa elektronika industri, sistem otomasi, mikrokontroler, dan sistem kendali kontrol."
    },
    {
      "period": "2020 - 2023",
      "degree": "Jurusan MIPA (Sains)",
      "institution": "MA Salafiyah Kajen",
      "description": "Membangun landasan berpikir analitis yang kuat melalui fokus studi matematika dan ilmu pengetahuan alam."
    }
  ],

  "contact": {
    "email": "upikindriani391@gmail.com",
    "phone": "082324734691",
    "location": "Pati, Jawa Tengah, Indonesia",
    "linkedin": "https://linkedin.com/in/upikindriani"
  }
};
