import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bell,
  Bot,
  Check,
  Cpu,
  Gift,
  Hourglass,
  MessageSquareText,
  Mic,
  Sparkles,
} from "lucide-react";

export interface FeatureItem {
  num: string;
  tag: string;
  title: string;
  description: string;
  visualType: "voice" | "avatar" | "extraction" | "qa" | "impulse" | "reward" | "reminder";
}

const featuresData: FeatureItem[] = [
  {
    num: "01",
    tag: "Hybrid Input",
    title: "Pencatatan Suara & Teks",
    description:
      "Pengguna cukup mengirim pesan suara atau mengetik pengeluaran secara santai tanpa harus mengisi form manual.",
    visualType: "voice",
  },
  {
    num: "02",
    tag: "Companion",
    title: "Avatar Interaktif (Moura)",
    description:
      "Karakter pendamping yang ekspresinya berubah menyesuaikan sisa anggaran dan memberikan respons suportif.",
    visualType: "avatar",
  },
  {
    num: "03",
    tag: "Smart Extraction",
    title: "Ekstraksi AI Otomatis",
    description:
      "Mesin pintar yang langsung membedah bahasa percakapan sehari-hari menjadi data terstruktur (Nama Barang, Kategori, dan Harga).",
    visualType: "extraction",
  },
  {
    num: "04",
    tag: "Conversational Analytics",
    title: "Tanya-Jawab Keuangan",
    description:
      "Fitur analitik percakapan di mana pengguna bisa menanyakan total pengeluaran kapan saja dengan hasil kalkulasi yang pasti.",
    visualType: "qa",
  },
  {
    num: "05",
    tag: "Impulse Pause",
    title: "Rem Belanja Impulsif",
    description:
      "Layar jeda darurat 60 detik berisi panduan pernapasan bersama avatar saat pengguna terdorong untuk checkout barang yang tidak penting.",
    visualType: "impulse",
  },
  {
    num: "06",
    tag: "Achievement",
    title: "Sistem Hadiah (Gamifikasi)",
    description:
      "Avatar mendapatkan aksesori atau kosmetik baru murni dari keberhasilan pengguna menahan pengeluaran, bukan melalui pembelian dalam aplikasi.",
    visualType: "reward",
  },
  {
    num: "07",
    tag: "Smart Reminder",
    title: "Pengingat & Notifikasi Cerdas",
    description:
      "Fitur notifikasi yang bertujuan agar user tidak lupa untuk mencatat keuangan mereka.",
    visualType: "reminder",
  },
];

/* Feature 1: Voice Recording Plate with Live Waveform & Pulsing Timer */
function VoicePlate({ num }: { num: string }) {
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev >= 6 ? 1 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#f1f5f9] text-[#000000]">
          <Mic className="h-5 w-5" />
        </div>
        <span className="font-mono text-[12px] text-[#94a3b8]">{num}</span>
      </div>

      {/* Voice Note & Casual Input Simulation with Active Recording Animation */}
      <div className="space-y-3">
        <div className="rounded-2xl bg-[#ffffff] p-3.5 border border-[#e2e8f0]">
          <div className="flex items-center gap-3">
            {/* Pulsing Recording Microphone Indicator */}
            <div className="relative flex h-8 w-8 items-center justify-center shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60" />
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#000000] text-white">
                <Mic className="h-4 w-4" />
              </div>
            </div>

            {/* Dynamic Soundwave Bars */}
            <div className="flex-1 flex items-end gap-1 h-7">
              {[40, 75, 30, 95, 65, 45, 85, 50, 70, 35, 60].map((baseH, i) => (
                <span
                  key={i}
                  style={{
                    height: `${baseH}%`,
                    animationDelay: `${(i * 0.12).toFixed(2)}s`,
                  }}
                  className="w-1 bg-[#1e293b] rounded-full inline-block animate-wave"
                />
              ))}
            </div>

            {/* Live Ticking Timer */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-mono text-[#64748b] w-7">0:0{seconds}</span>
            </div>
          </div>
        </div>

        {/* Casual Speech bubble */}
        <div className="rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-2.5 text-[12px] text-[#334155] flex items-center justify-between">
          <span className="truncate">"Beli es kopi susu 25rb sama cemilan 15rb ya"</span>
          <span className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider ml-1 shrink-0 animate-pulse">
            REC
          </span>
        </div>
      </div>

      <div className="text-[11px] font-mono text-[#94a3b8]">VOICE & CASUAL TEXT INPUT</div>
    </div>
  );
}

/* Feature 2: Interactive Avatar Companion with Natural Floating, Blink & Smile */
function AvatarPlate({ num }: { num: string }) {
  const [isSmiling, setIsSmiling] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSmiling((prev) => !prev);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#f1f5f9] text-[#000000]">
          <Bot className="h-5 w-5" />
        </div>
        <span className="font-mono text-[12px] text-[#94a3b8]">{num}</span>
      </div>

      {/* Interactive Avatar Face with Natural Floating, Blink & Smile */}
      <div className="flex flex-col items-center justify-center text-center py-2 animate-avatar-float">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#ffffff] border border-[#e2e8f0] shadow-xs">
          <div className="relative">
            {/* Eyes that blink naturally */}
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[#000000] animate-eye-blink" />
              <span className="h-2 w-2 rounded-full bg-[#000000] animate-eye-blink" />
            </div>

            {/* Mouth that morphs smoothly into a smile */}
            <div
              className={`mx-auto mt-2 transition-all duration-500 border-b-2 border-[#000000] ${
                isSmiling
                  ? "w-5 h-3 rounded-b-full border-r-2 border-l-2"
                  : "w-3 h-1.5 rounded-b-md"
              }`}
            />

            {/* Cheek Blushes */}
            <div className="flex justify-between items-center w-10 mx-auto -mt-1.5 opacity-40">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            </div>
          </div>

          {/* Floating Sparkle Reaction */}
          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#000000] text-white text-[10px] animate-sparkle-1">
            ✨
          </div>
        </div>

        {/* Responsive Budget Mood Badge */}
        <div className="mt-3 rounded-full bg-[#f8fafc] px-3.5 py-1 text-[11px] font-medium text-[#000000] border border-[#e2e8f0] flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Sisa Anggaran: 74% {isSmiling ? "(Aman! 🎉)" : "(Stabil)"}</span>
        </div>
      </div>

      <div className="text-[11px] font-mono text-[#94a3b8]">DYNAMIC EMOTIVE COMPANION</div>
    </div>
  );
}

/* Feature 3: Smart AI Extraction Plate with Laser Scanner & Progressive Output Pop */
function ExtractionPlate({ num }: { num: string }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 1100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#f1f5f9] text-[#000000]">
          <Cpu className="h-5 w-5" />
        </div>
        <span className="font-mono text-[12px] text-[#94a3b8]">{num}</span>
      </div>

      {/* Smart Extraction Breakdown with Live Laser Sweep & Pop-in Rows */}
      <div className="space-y-2 py-1">
        {/* Raw text with sweeping scanline */}
        <div className="relative overflow-hidden rounded-xl bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-1.5 text-[11px] text-[#334155]">
          <div className="truncate">"Beli es kopi susu 25rb sama cemilan 15rb ya"</div>
          <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-[#0447ff]/20 to-transparent animate-scanline pointer-events-none" />
        </div>

        {/* Structured Output Cards with Progressive Highlight */}
        <div className="rounded-xl bg-[#ffffff] p-2.5 border border-[#e2e8f0] space-y-1.5 text-[12px]">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              step >= 1 ? "opacity-100 translate-x-0" : "opacity-35 translate-x-1"
            }`}
          >
            <span className="text-[#64748b] flex items-center gap-1">
              {step >= 1 && <Check className="h-3 w-3 text-emerald-600 shrink-0" />}
              Nama Barang
            </span>
            <span className="font-medium text-[#000000]">Kopi Susu & Cemilan</span>
          </div>

          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              step >= 2 ? "opacity-100 translate-x-0" : "opacity-35 translate-x-1"
            }`}
          >
            <span className="text-[#64748b] flex items-center gap-1">
              {step >= 2 && <Check className="h-3 w-3 text-emerald-600 shrink-0" />}
              Kategori
            </span>
            <span className="font-medium text-[#000000]">Makan & Minum</span>
          </div>

          <div
            className={`flex justify-between items-center transition-all duration-300 pt-1 border-t border-[#f1f5f9] ${
              step >= 3 ? "opacity-100 translate-x-0" : "opacity-35 translate-x-1"
            }`}
          >
            <span className="text-[#64748b] flex items-center gap-1">
              {step >= 3 && <Check className="h-3 w-3 text-emerald-600 shrink-0" />}
              Total
            </span>
            <span className="font-semibold text-[#000000]">Rp 40.000</span>
          </div>
        </div>
      </div>

      <div className="text-[11px] font-mono text-[#94a3b8]">AUTOMATED NLP STRUCTURING</div>
    </div>
  );
}

/* Feature 4: Chat Q&A Dialog with Sequential Pop-up & Typing Indicator */
function QaChatPlate({ num }: { num: string }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#f1f5f9] text-[#000000]">
          <MessageSquareText className="h-5 w-5" />
        </div>
        <span className="font-mono text-[12px] text-[#94a3b8]">{num}</span>
      </div>

      {/* Conversational Pop-up Dialog Simulation */}
      <div className="space-y-2 py-1 min-h-[110px] flex flex-col justify-center">
        {/* User Question Bubble */}
        <div
          className={`rounded-2xl bg-[#000000] px-3.5 py-2 text-white text-[11px] max-w-[85%] ml-auto transition-all duration-400 transform ${
            stage >= 0 ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-2"
          }`}
        >
          "Berapa total ngopi minggu ini?"
        </div>

        {/* Moura Typing Indicator */}
        {stage === 1 && (
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f1f5f9] border border-[#e2e8f0] rounded-2xl w-fit">
            <span className="h-1.5 w-1.5 bg-[#64748b] rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="h-1.5 w-1.5 bg-[#64748b] rounded-full animate-bounce [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 bg-[#64748b] rounded-full animate-bounce [animation-delay:300ms]" />
          </div>
        )}

        {/* Moura Answer Pop-in */}
        {stage >= 2 && (
          <div className="rounded-2xl bg-[#ffffff] p-2.5 border border-[#e2e8f0] text-[#000000] text-[11px] max-w-[92%] transition-all duration-400 transform scale-100 opacity-100 shadow-xs">
            Total <span className="font-semibold text-[#000000]">Rp 115.000</span> (4 cup). Masih aman dalam batas jajanmu ✨
          </div>
        )}
      </div>

      <div className="text-[11px] font-mono text-[#94a3b8]">REAL-TIME CALCULATED REPLIES</div>
    </div>
  );
}

/* Feature 5: Impulse Pause with Live Countdown & Breathing Pulse */
function ImpulseTimerPlate({ num }: { num: string }) {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev <= 52 ? 60 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#f1f5f9] text-[#000000]">
          <Hourglass className="h-5 w-5" />
        </div>
        <span className="font-mono text-[12px] text-[#94a3b8]">{num}</span>
      </div>

      {/* Breathing Pause Timer Visual with Live Countdown and Pulsing Ring */}
      <div className="flex flex-col items-center justify-center text-center py-2">
        <div className="relative flex h-18 w-18 items-center justify-center rounded-full border-2 border-dashed border-[#000000] bg-[#ffffff] animate-breath">
          <span className="font-display font-light text-2xl text-[#000000] tabular-nums">
            {count}s
          </span>
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#000000] text-[9px] text-white">
            🧘
          </span>
        </div>
        <p className="mt-2.5 text-[11px] text-[#334155] max-w-[200px] transition-all duration-300">
          {count % 4 < 2 ? "Tarik napas perlahan... 🧘" : "Apakah ini kebutuhan mendesak? ✨"}
        </p>
      </div>

      <div className="text-[11px] font-mono text-[#94a3b8]">MINDFUL 60S CHECKOUT PAUSE</div>
    </div>
  );
}

/* Feature 6: Reward Gamification Plate with Bursting Sparkles */
function RewardPlate({ num }: { num: string }) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#f1f5f9] text-[#000000]">
          <Gift className="h-5 w-5" />
        </div>
        <span className="font-mono text-[12px] text-[#94a3b8]">{num}</span>
      </div>

      {/* Achievement Unlock Plate with Bursting Sparkles */}
      <div className="flex flex-col items-center justify-center text-center py-1">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffffff] border border-[#e2e8f0] shadow-xs">
          <Sparkles className="h-7 w-7 text-[#000000] animate-pulse" />

          {/* Bursting Sparkling Stars around the Box */}
          <span className="absolute -top-2 -left-2 text-[14px] animate-sparkle-1 select-none pointer-events-none">✨</span>
          <span className="absolute -top-2 -right-2 text-[14px] animate-sparkle-2 select-none pointer-events-none">⭐</span>
          <span className="absolute -bottom-2 -left-1 text-[12px] animate-sparkle-3 select-none pointer-events-none">✨</span>
          <span className="absolute -bottom-2 -right-2 text-[12px] animate-sparkle-1 select-none pointer-events-none">🎉</span>
        </div>
        <div className="mt-2.5 font-medium text-[12px] text-[#000000]">
          Topi Disiplin Hemat
        </div>
        <span className="text-[11px] text-[#64748b] mt-0.5">
          Buka dari 7 hari menahan belanja impulsif
        </span>
        <span className="mt-1.5 text-[9px] font-mono uppercase tracking-wider text-[#94a3b8]">
          100% Free • No In-App Purchases
        </span>
      </div>

      <div className="text-[11px] font-mono text-[#94a3b8]">ORGANIC REWARD SYSTEM</div>
    </div>
  );
}

/* Feature 7: Smart Reminder Plate with Bell Ring & Phone Vibration */
function ReminderPlate({ num }: { num: string }) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#f1f5f9] text-[#000000]">
          <Bell className="h-5 w-5 animate-bell-ring" />
        </div>
        <span className="font-mono text-[12px] text-[#94a3b8]">{num}</span>
      </div>

      {/* Gentle Notification Banner with Haptic Phone Vibration */}
      <div className="space-y-2 py-1">
        <div className="rounded-2xl bg-[#ffffff] p-3 border border-[#e2e8f0] space-y-1 animate-phone-vibrate shadow-xs">
          <div className="flex items-center justify-between text-[11px] font-medium text-[#64748b]">
            <span className="flex items-center gap-1.5 text-[#000000]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              Moura Reminder
            </span>
            <span className="font-mono text-[10px] text-[#94a3b8]">Baru saja</span>
          </div>
          <p className="text-[12px] text-[#334155] pt-0.5 leading-snug">
            "Ada pengeluaran kecil yang belum tercatat hari ini? Luangkan 10 detik yuk!"
          </p>
        </div>
      </div>

      <div className="text-[11px] font-mono text-[#94a3b8]">CONTEXTUAL SMART REMINDERS</div>
    </div>
  );
}

/* Minimalist Bauhaus Feature Card Visual Plate Dispatcher */
function CardVisualPlate({ type, num }: { type: FeatureItem["visualType"]; num: string }) {
  if (type === "voice") return <VoicePlate num={num} />;
  if (type === "avatar") return <AvatarPlate num={num} />;
  if (type === "extraction") return <ExtractionPlate num={num} />;
  if (type === "qa") return <QaChatPlate num={num} />;
  if (type === "impulse") return <ImpulseTimerPlate num={num} />;
  if (type === "reward") return <RewardPlate num={num} />;
  return <ReminderPlate num={num} />;
}

export function HorizontalFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const getDistance = () => {
        if (!track) return 0;
        return track.scrollWidth - window.innerWidth + 140;
      };

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${Math.max(1200, getDistance())}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#ffffff] border-b border-[#e2e8f0] z-20"
    >
      <div className="h-screen w-full flex flex-col justify-center py-6 sm:py-8 overflow-hidden">
        {/* Section Header */}
        <div className="mx-auto max-w-[1280px] w-full px-6 sm:px-12 mb-5 sm:mb-7 shrink-0">
          <div className="pb-4 border-b border-[#e2e8f0]">
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-[46px] md:leading-[1.1] tracking-[-0.02em] text-[#000000]">
              Dirancang untuk menghentikan boros, tanpa ribet.
            </h2>
          </div>
        </div>

        {/* Horizontal Sliding Cards Track */}
        <div className="overflow-hidden w-full px-6 sm:px-12">
          <div
            ref={trackRef}
            className="flex items-start gap-7 w-max will-change-transform"
          >
            {featuresData.map((f) => (
              <div
                key={f.title}
                className="w-[280px] sm:w-[330px] md:w-[350px] shrink-0 flex flex-col"
              >
                {/* 1. KOTAK (Bujursangkar Aspect Ratio: 1/1) - Pure White Card */}
                <div className="w-full aspect-square rounded-[20px] bg-[#ffffff] border border-[#e2e8f0] p-5 sm:p-6 transition-all duration-300 hover:border-[#94a3b8] hover:shadow-sm select-none">
                  <CardVisualPlate type={f.visualType} num={f.num} />
                </div>

                {/* 2. DILUAR KOTAK DI BAWAHNYA (Judul & Penjelasan) */}
                <div className="mt-4 px-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[11px] text-[#94a3b8] tracking-wider">
                      {f.num}
                    </span>
                    <span className="text-[#e2e8f0]">•</span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-[#64748b]">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-light text-xl sm:text-[23px] leading-snug tracking-[-0.02em] text-[#000000]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13px] sm:text-[14px] text-[#64748b] leading-relaxed tracking-[0.01em]">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HorizontalFeatures;
