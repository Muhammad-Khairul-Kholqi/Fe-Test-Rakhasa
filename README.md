# FE Portal Berita

Frontend portal berita dengan landing page dan admin dashboard. Proyek ini masih menggunakan **dummy data** untuk berita dan user login, dibangun dengan **Next.js**, **React**, dan **Tailwind CSS**.

---

## Deskripsi

Portal berita ini memiliki dua bagian utama:  

1. **Landing Page** – Menampilkan berita berdasarkan kategori: Hot, Sports, Politics. Pengguna dapat melihat daftar berita dan detail masing-masing.  
2. **Admin Dashboard (CMS)** – Untuk menambahkan atau mengedit berita melalui tabel interaktif dan modal.  

Semua data saat ini masih dummy, namun struktur dan interaksi sudah siap dikembangkan ke backend sesungguhnya.

---

## Fitur

### Landing Page
- Home dengan section: **Main**, **Hot News**, **Sports**, **Politics**
- Detail berita dengan URL spesifik untuk setiap berita
- Responsive layout menggunakan Tailwind CSS
- Navigasi sederhana dan interaktif

### Admin Dashboard
- Login page untuk autentikasi dummy
- Dashboard dengan tabel berita (Hot, Sports, Politics)
- Tabel scrollable horizontal responsive
- Modal untuk menambah/edit berita
- Sidebar dan header responsif
- Pencarian berita real-time

---

## Halaman & URL

| Halaman                     | URL                                      | Keterangan                        |
|------------------------------|-----------------------------------------|----------------------------------|
| Home                         | `/`                                     | Landing page utama               |
| Detail News                  | `/pages/title-news`                      | Halaman detail berita            |
| Login                        | `/pages/login`                           | Halaman login dummy              |
| Admin Dashboard              | `/pages/cms/dashboard`                   | Halaman CMS admin                |

---

## Instalasi / Setup

1. **Clone repository:**

```bash
git clone https://github.com/Muhammad-Khairul-Kholqi/Fe-Test-Rakhasa
npm install