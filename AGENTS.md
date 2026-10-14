# Project Moura — Design & Implementation Guidelines

## Mandatory Design System: DESIGN (1).md (Single Source of Truth)

All future components, pages, styles, and UI decisions MUST strictly adhere to `DESIGN (1).md`. Never introduce ad-hoc colors, arbitrary font weights, or unauthorized shadows.

### 1. Aesthetic Identity
- **Vibe**: Warm-cream editorial / Bauhaus studio notebook on eggshell paper (`#fdfcfc`). Restrained, typographic, and technically precise.
- **Elevation**: Flat editorial feel. Prefer 1px solid hairline borders (`#ebe8e4`) over drop shadows. **Zero drop-shadows or box-shadows** across UI chrome.

### 2. Color Palette & Roles
| Token | Hex Value | Role |
|---|---|---|
| `--color-eggshell` | `#fdfcfc` | Page canvas, primary button surfaces, card surfaces |
| `--color-warm-taupe` | `#f5f3f1` | Section bands, feature cards, secondary surface tier |
| `--color-stone` | `#ebe8e4` | Hairlines, 1px dividers, icon plate backgrounds |
| `--color-ink` | `#000000` | Primary text, filled buttons, wordmark |
| `--color-graphite` | `#44403b` | Strong secondary text, section labels |
| `--color-smoke` | `#777169` | Body copy, descriptions, captions |
| `--color-ash` | `#a59f97` | Faintest helper text, numeric indexes, footnotes |
| `--color-violet-spark` | `#0447ff` | Product artwork / illustration accents ONLY (never UI chrome) |
| `--color-ember-orange` | `#ff4704` | Product artwork / illustration accents ONLY (never UI chrome) |

### 3. Typography Guidelines
- **Display Headlines (≥32px)**:
  - Font: `Waldenburg` / `Inter Tight` (`font-display`)
  - Weight: **Strictly 300 (whisper-weight / `font-light`)** — Never bold or semibold!
  - Letter Spacing: **Strictly `-0.02em`** (`tracking-[-0.02em]`)
  - Line Height: Tight (`1.08` – `1.17`)
- **Body & Interface (<24px)**:
  - Font: `Inter` (`font-sans`)
  - Weight: **400** (default text) or **500** (buttons & emphasized links)
  - Letter Spacing: `+0.01em` (`tracking-[0.01em]`) on 14–16px copy
  - Line Height: Relaxed (`1.5` – `1.6`)

### 4. Component Rules
- **Buttons**:
  - Always fully-pilled with `rounded-full` (`9999px`).
  - Text: `text-[14px] font-medium`.
  - Border: 1px solid `#e5e5e5`.
  - **Primary**: Filled `#000000` with white text.
  - **Secondary**: Eggshell `#fdfcfc` with `#000000` text.
  - **Ghost**: Transparent with `#777169` text hover to `#000000`.
- **Cards**:
  - Border radius: `rounded-[20px]` (or `rounded-[24px]` for flagship hero cards).
  - Background: Warm Taupe `#f5f3f1` or Eggshell `#fdfcfc`.
  - Border: 1px hairline `#ebe8e4`.
  - Shadows: **NONE**. Flat editorial aesthetic.
- **Dividers & Sections**:
  - Alternating section backgrounds: Eggshell `#fdfcfc` ↔ Warm Taupe `#f5f3f1`.
  - Hairline separation: 1px solid `#ebe8e4`.

### 5. Official Core Features of Moura
1. **Pencatatan Suara & Teks (Hybrid Input)**: Pengguna cukup mengirim pesan suara atau mengetik pengeluaran secara santai tanpa form manual.
2. **Avatar Interaktif (Moura)**: Karakter pendamping yang ekspresinya berubah menyesuaikan sisa anggaran dan memberikan respons suportif.
3. **Ekstraksi AI Otomatis**: Mesin pintar yang langsung membedah bahasa percakapan sehari-hari menjadi data terstruktur (Nama Barang, Kategori, dan Harga).
4. **Tanya-Jawab Keuangan**: Fitur analitik percakapan di mana pengguna bisa menanyakan total pengeluaran kapan saja dengan hasil kalkulasi yang pasti.
5. **Rem Belanja Impulsif**: Layar jeda darurat 60 detik berisi panduan pernapasan bersama avatar saat pengguna terdorong untuk checkout barang yang tidak penting.
6. **Sistem Hadiah (Gamifikasi)**: Avatar mendapatkan aksesori atau kosmetik baru murni dari keberhasilan pengguna menahan pengeluaran, bukan melalui pembelian dalam aplikasi.
7. **Pengingat & Notifikasi Cerdas**: Fitur notifikasi yang bertujuan agar user tidak lupa untuk mencatat keuangan mereka.

