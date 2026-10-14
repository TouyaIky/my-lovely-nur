# My Lovely Nur — Website Ulang Tahun
Website statis (React + Vite, tanpa backend/tracker) dengan 7 scene: Opening amplop, Hero, Galeri+lightbox, Timeline, Kartu apresiasi (+hidden memory), Harapan, Surat. Ada music player, navigasi + progress, dan dukungan `prefers-reduced-motion`.

## 1. Persiapan
1. Pasang **Node.js LTS** dari https://nodejs.org. Cek: `node -v` dan `npm -v`.
2. Pasang VS Code (https://code.visualstudio.com), buka folder proyek ini.

## 2. Menjalankan
```
npm install
npm run dev
```
Buka URL yang muncul (biasanya http://localhost:5173). Hentikan dengan `Ctrl+C`. Setelah komputer mati, ulangi `npm run dev` di folder proyek (tidak perlu `npm install` lagi).

## 3. Struktur
- `src/data/content.js` — **semua teks, path foto/lagu** (edit di sini saja)
- `src/App.jsx` — komponen; `src/styles.css` — gaya
- `public/images|audio` — media; `vite.config.js`; `package.json`
- `.github/workflows/deploy.yml` — deployment otomatis

## 4. Ganti foto
1. Salin foto ke `public/images/`, mis. `nur-01.jpg` (JPG/WebP, sisi panjang ~1600 px, < 400 KB; kompres di squoosh.app).
2. Di `content.js`, ubah fungsi `photo` atau ganti `photos` dengan daftar manual:
```js
photos: [
  { id:'photo-1', src:'images/nur-01.jpg', alt:'Kami di taman', caption:'Sore itu', date:'Maret 2024' },
  // tambah item baru = tambah baris; hapus = hapus baris. ID harus unik.
]
```
3. Simpan, cek di browser. Gambar tidak muncul? Periksa huruf besar/kecil, ekstensi, dan path (tanpa `/` di depan).

## 5. Ganti lagu, teks
- Lagu: taruh MP3 di `public/audio/`, isi `music.src`, `music.title`, `music.artist`. Gunakan musik yang sah.
- Teks: `recipient`, `birthday`, `greeting`, `buttons`, `timeline`, `cards`, `hidden`, `wishes`, `letter`, `sign`, `closing`. **Surat adalah draft — tulis ulang dengan suaramu.**
- Hidden memory terbuka setelah 3 foto berbeda dibuka; tidak diperlukan untuk membuka surat.

## 6. Checklist sebelum dibagikan
- [ ] Opening, navigasi, lightbox (close, next/prev, swipe, Esc, panah)
- [ ] Timeline, kartu, hidden memory, wish
- [ ] Musik play/pause/volume
- [ ] Surat terbuka; tidak ada `[Placeholder]` tersisa
- [ ] Tampilan HP (±375 px) dan desktop; `npm run build` sukses

## 7. Deploy gratis (GitHub Pages)
1. Buat akun di github.com, buat repository baru (mis. `my-lovely-nur`).
2. Unggah seluruh isi folder (GitHub Desktop atau `git add . && git commit -m init && git push`). Pastikan folder `public/` dan `.github/` ikut terunggah (folder berawalan titik kadang tersembunyi).
3. Di repo: **Settings → Pages → Source: GitHub Actions**. Branch utama harus `main`.
4. Tunggu tab **Actions** hijau; URL tampil di Settings → Pages. `base` Vite sudah `./` sehingga tidak perlu disesuaikan.
5. Buka dari HP dan uji semua media. Update konten: ubah file → commit → push.

## 8. Troubleshooting
- `node` tidak dikenali: pasang ulang Node, tutup-buka terminal. `npm install` gagal: cek internet, coba lagi.
- Halaman kosong di Pages: pastikan Source = GitHub Actions dan workflow sukses. Perubahan belum tampak: tunggu workflow, refresh keras (Ctrl+Shift+R).
- Lagu gagal: pakai MP4 H.264 / MP3 dan cek path.

## 9. Privasi
Situs publik bisa dibuka siapa pun yang punya URL; link tidak dipromosikan **bukan** keamanan, dan tidak ada password. Periksa foto (metadata lokasi, info sensitif) sebelum unggah. Menghapus media dari repo tidak menghapus salinan yang sudah diunduh orang lain. Catatan: font memakai Google Fonts (ada fallback); hapus tag `<link>` di `index.html` jika ingin tanpa permintaan eksternal.

---
# Panduan Tambahan (revisi: opening kue, grain, parallax)

## A. Yang berubah di revisi ini
- **Opening (Scene 1)** kini berupa kue ulang tahun SVG dengan 3 lilin menyala + tombol **Blow the Candles**. Setelah lilin padam: asap, confetti, ucapan "Happy Birthday, My Lovely Nur!", lalu tombol **Continue** (atau **Skip** kapan saja). Komponen: `Opening` dan `Cake` di `src/App.jsx`.
- **Tiup lewat mikrofon** bersifat opsional: izin hanya diminta saat tombol "Blow with microphone" ditekan. Jika ditolak/tidak tersedia, tombol tetap berfungsi. Mikrofon butuh HTTPS (GitHub Pages sudah HTTPS) atau `localhost`. Audio tidak direkam atau dikirim ke mana pun. Sensitivitas: angka `28` di `listen` (`src/App.jsx`); turunkan jika sulit terdeteksi, naikkan jika terlalu sensitif.
- **Film grain** (`body::after`) dan **parallax ringan** (`.plx`) di `src/styles.css`; keduanya mati otomatis pada `prefers-reduced-motion` (grain statis).
- **Kotak hadiah** di bagian Wishes; teks di `gift` pada `content.js`.

## B. Struktur folder (lengkap)
- `src/main.jsx` titik masuk · `src/App.jsx` semua komponen · `src/styles.css` gaya · `src/data/content.js` konten
- `public/images` SVG placeholder (hero, foto-01…10 (JPG), letter) · `public/audio`
- `index.html` (judul, font) · `vite.config.js` (`base:'./'`) · `.github/workflows/deploy.yml`

## C. Menambah / menghapus konten
- **Foto**: tambah objek `{id,src,alt,caption,date}` ke `photos` (ID unik, mis. `photo-13`); hapus = hapus objeknya. Standarnya 10 foto agar galeri tetap penuh.
- **Milestone timeline**: tambah `{id:'m6', title, date, text, image}` ke `timeline` (image opsional, path relatif `public/`).
- **Kartu apresiasi**: tambah `{id:'c9', category, text}`. **Harapan**: tambah `{id:'w7', category, text}`.
- Setelah mengedit: cek tanda koma dan kurung, simpan, lihat browser. Layar kosong + error merah = ada salah ketik di `content.js`.

## D. Troubleshooting tambahan
- **Foto tidak muncul**: path salah/huruf besar-kecil/ekstensi; tampil kotak "Replace this photo" berarti file tidak ditemukan.
- **Audio gagal**: pakai MP3; browser tidak akan autoplay, tekan ▶ dulu.
- **Mikrofon tidak merespons**: periksa izin situs di browser, atau pakai tombol.
- **Build gagal**: baca baris error pertama di terminal, biasanya salah ketik di `content.js`/`App.jsx`.
- **GitHub Pages kosong**: Settings → Pages → Source harus **GitHub Actions**; cek tab Actions.

## E. Privasi (tambahan)
Hapus media dari repo: hapus file → commit → push. Salinan lama tetap ada di riwayat Git dan di perangkat orang yang pernah mengunduh. Sebelum unggah, hapus metadata lokasi foto. Tidak ada analitik atau pelacak di proyek ini.

---
# F. Fitur "A Little Wish for Your Birthday" (kirim harapan ke email)
Ada di scene Birthday Wishes (`WishWrite` di `src/App.jsx`, teks di `wishWrite` pada `content.js`, konfigurasi di `src/emailConfig.js`). Memakai EmailJS (`@emailjs/browser`), tanpa backend. **Selama kredensial belum diisi, tombol hanya menampilkan pesan "belum dikonfigurasi" — tidak ada email yang terkirim.**

## 1. Siapkan EmailJS
1. Daftar gratis di https://www.emailjs.com.
2. **Email Services → Add New Service → Gmail**, login dengan Gmail-mu. Catat **Service ID**.
3. **Email Templates → Create New Template**:
   - Subject: `A Birthday Wish from My Lovely Nur`
   - To Email: **alamat Gmail-mu** (diatur di sini, sehingga tidak ada di kode website)
   - Content:
     ```
     Halo, ini harapan ulang tahun yang dikirim lewat website For My Lovely Nur.

     {{message}}

     Dikirim pada: {{sent_at}}
     ```
   - Simpan, catat **Template ID**.
4. **Account → General**: catat **Public Key**. Di **Security**, batasi domain yang diizinkan ke domain GitHub Pages-mu bila tersedia.

## 2. Isi konfigurasi lokal
```
cp .env.example .env     # Windows: copy .env.example .env
```
Isi `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, lalu `npm install` dan `npm run dev` (restart server setelah mengubah `.env`). `.env` sudah ada di `.gitignore`. Jangan pernah memasukkan password Gmail atau private key. Variabel `VITE_` terlihat di browser; Public Key memang dirancang publik, jadi batasi dengan domain dan kuota EmailJS.

## 3. Konfigurasi di GitHub Pages
Di repo: **Settings → Secrets and variables → Actions → Variables → New repository variable**, buat tiga variabel dengan nama sama seperti di `.env`. Workflow `deploy.yml` sudah membacanya saat build. Jalankan ulang workflow setelah mengubah variabel.

## 4. Uji
1. Buka website, tulis harapan uji, klik **Send My Wish**.
2. Pastikan muncul "Your wish has been sent into the universe." (hanya tampil bila EmailJS mengembalikan status sukses).
3. Cek Gmail (juga Spam): subject dan isi harus sama persis dengan yang ditulis.
4. Uji gagal: kosongkan `.env`, atau matikan internet; teks harus tetap ada dan tombol berubah jadi **Try Again**.
5. Batasan: maks 2000 karakter (`maxLength` di `emailConfig.js`); kuota gratis EmailJS terbatas. Setelah selesai uji, hapus email uji dari kotak masuk bila perlu.
