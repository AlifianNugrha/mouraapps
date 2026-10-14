# Folder Asset Video (Importable Assets)

Folder ini dapat digunakan jika Anda ingin meng-import video secara langsung di file TypeScript/React:

```tsx
import myVideo from "@/assets/videos/nama-video.mp4";

<video
  autoPlay
  loop
  muted
  playsInline
  src={myVideo}
  className="w-full h-auto rounded-2xl"
/>
```
