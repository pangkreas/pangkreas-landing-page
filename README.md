# Pangkreas — Pangkalan Kreasi

Website bilingual untuk creative technology hub Pangkreas dengan lima ruang solusi: Build, Automate, Create, Explore, dan Improve.

## Pengembangan lokal

Memerlukan Node.js 22 dan npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Pemeriksaan kualitas:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run preview
```

## Konfigurasi

- `VITE_CONTACT_API_URL`: URL lengkap endpoint inquiry. Jika kosong, form disembunyikan sejak awal.
- `VITE_CONTACT_EMAIL`: alamat email publik yang sudah diverifikasi. Jika kosong atau tidak valid, tombol email tidak ditampilkan.
- `VITE_CONTACT_WHATSAPP`: nomor WhatsApp publik dalam format internasional. Jika kosong atau tidak valid, tombol WhatsApp tidak ditampilkan.
- `VITE_ANALYTICS_ENABLED`: isi `true` untuk mengaktifkan event internal `pangkreas:analytics`. Belum terhubung ke vendor.

Environment variable Vite bersifat publik. Jangan meletakkan secret di dalamnya.

## Contact API

Frontend mengirim request `POST` langsung ke `VITE_CONTACT_API_URL`:

```json
{
  "name": "string",
  "organization": "string | null",
  "email": "string",
  "whatsapp": "string | null",
  "category": "build | automate | create | explore | improve | unsure",
  "message": "string",
  "targetTimeline": "string | null",
  "locale": "id | en",
  "privacyAccepted": true,
  "source": "website-contact"
}
```

Respons sukses: `{ "success": true, "referenceId": "string", "message": "string" }`. Backend wajib memiliki validasi server, sanitasi, rate limiting, honeypot/CAPTCHA, CORS allowlist, penyimpanan dan kebijakan retensi inquiry, notifikasi email, log tanpa data sensitif, serta CSRF protection bila menggunakan cookie.

## Routing dan deployment

Route kanonis: `/`, `/solutions`, `/creations`, `/process`, `/about`, `/contact`, dan `/privacy`. Redirect `/services`, `/projects`, serta `/work` tersedia di React Router dan sebagai HTTP 301 di `nginx.conf`. Hosting lain perlu SPA fallback ke `index.html` dan redirect permanen yang sama.

```bash
docker build -t pangkreas .
docker run --rm -p 8080:80 pangkreas
```

Image production menggunakan multi-stage Node/Nginx, cache aset, SPA fallback, health check, dan security headers dasar.

## Konten, SEO, dan analytics

Konten bilingual berada di `src/locales`, data kreasi di `src/data/content.ts`, metadata di komponen `Seo`, dan JSON-LD Organization/WebSite di `StructuredData`. Detail kreasi tidak memuat klien, metrik, atau hasil yang belum terverifikasi.

Integrasi analytics dapat mendengarkan event browser `pangkreas:analytics`. Event hanya membawa kategori/ID non-PII; jangan mengirim nama, email, WhatsApp, atau isi form.

## Keputusan sebelum launch

- Verifikasi alamat email dan/atau nomor WhatsApp publik sebelum mengisinya ke environment production.
- Tetapkan endpoint backend, kebijakan retensi inquiry, dan layanan pihak ketiga yang benar-benar digunakan.
- Lengkapi data Kreasi hanya dengan latar, tipe, dan hasil yang dapat diverifikasi.
