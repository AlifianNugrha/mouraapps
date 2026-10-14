# Folder Video Website (Static Assets)

Letakkan file video Anda (misal `.mp4`, `.webm`) di folder ini:
`public/videos/`

### Keunggulan
File di folder `public/videos/` dapat langsung dipanggil di komponen mana saja dengan URL langsung tanpa perlu di-import!

### Contoh Pemakaian di Komponen (TSX/JSX):

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-auto rounded-2xl shadow-xl"
>
  <source src="/videos/nama-video-anda.mp4" type="video/mp4" />
  Browser Anda tidak mendukung tag video.
</video>
```
