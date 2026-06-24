// data.js — memuat data portofolio Upik Indriani
// Struktur ini langsung sinkron dengan komponen visual di website

const portfolioData = {
  "profile": {
    "name": "Upik Indriani",
    "title": "Electronics Engineering Graduate",
    "tagline": "Berfokus pada otomasi industri dan sistem kendali — merancang serta mengembangkan sistem tertanam dengan ketelitian tinggi.",
    "email": "upikindriani391@gmail.com", 
    "phone": "082324734691",
    "location": "Pati, Jawa Tengah",
    "github": "github.com/UpikIndriani", 
    "image": "vina.jpg" // Menggunakan file foto profil yang ada di repositorimu
  },

  "projects": [
    {
      "id": 1,
      "title": "Prototype Smart Vacuum Cleaner Robot Berbasis Arduino Uno",
      "description": "Robot penyedot debu otomatis pintar yang bergerak secara otonom. Mengintegrasikan sensor ultrasonik, Arduino UNO, Motor Shield, serta motor vakum guna mendeteksi serta menghindari rintangan secara real-time.",
      "tags": ["Arduino UNO", "Sensor Ultrasonik", "Motor Shield", "Servo MG995"],
      "image": "assets/images/vacum.jpg" // Sesuaikan nama file fotonya jika kamu upload ke folder ini
    },
    {
      "id": 2,
      "title": "Sistem Pakan Otomatis Berbasis MATLAB GUI dan Arduino Uno",
      "description": "Rancangan sistem pemberian pakan otomatis terjadwal menggunakan sensor LDR untuk mendeteksi intensitas cahaya dan motor servo sebagai penggerak mekanis katup. Dilengkapi fitur kendali jarak jauh real-time melalui MATLAB GUI.",
      "tags": ["MATLAB GUI", "Arduino Uno", "Sensor LDR", "Servo MG995"],
      "image": "assets/images/projectkbk.jpg"
    },
    {
      "id": 3,
      "title": "Robot Power Control & Heater Monitoring System",
      "description": "Perancangan kendali distribusi daya untuk lengan robot mekanis, serta membangun sistem pemantauan beban pemanas (heater load monitoring) guna mendeteksi anomali arus elektrik secara dini pada mesin produksi plastik.",
      "tags": ["PLC Maintenance", "Troubleshooting", "Industrial Control", "Heater Monitoring"],
      "image": "assets/images/lengan robot.jpg, mesininject.jpg"
    }
  ],

  "skills": [
    {
      "category": "Aplikasi Otomasi & Rekayasa",
      "items": [
        { "name": "CX Programmer (PLC)", "level": 90 },
        { "name": "Arduino IDE", "level": 92 },
        { "name": "Proteus", "level": 80 },
        { "name": "MATLAB", "level": 85 },
        { "name": "Eagle Software (PCB)", "level": 88 }
      ]
    },
    {
      "category": "Alat Kerja & Produktivitas",
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
        { "name": "Bahasa Inggris (Konversasional)", "level": 75 }
      ]
    }
  ],

  "experience": [
    {
      "period": "2025",
      "role": "Magang di Divisi Perawatan (Maintenance Division Internship)",
      "company": "CV. Jaya Setya Plastik",
      "description": "Melakukan pemeliharaan berkala serta troubleshooting kerusakan mesin produksi. Memperbaiki perangkat PLC beserta driver penunjangnya, serta berkontribusi dalam pengerjaan kontrol daya lengan robot dan monitoring heater.",
      "active": true
    },
    {
      "period": "November 2024",
      "role": "Pelatihan Desain & Manufaktur PCB",
      "company": "PT. Indomaker Indonesia Mandiri",
      "description": "Sertifikasi pelatihan intensif berfokus pada pembuatan skematik jalur sirkuit elektronik menggunakan Eagle Software serta proses manufaktur pencetakan papan PCB.",
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

  "certifications": [
    "Sertifikasi Pelatihan Desain PCB Industri – Indomaker"
  ],

  "contact": {
    "email": "upikindriani391@gmail.com",
    "phone": "082324734691",
    "location": "Pati, Jawa Tengah, Indonesia",
    "linkedin": "https://linkedin.com/in/upikindriani" 
  }
};
