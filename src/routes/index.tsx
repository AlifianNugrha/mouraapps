import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { HorizontalFeatures } from "../components/HorizontalFeatures";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moura" },
      { name: "description", content: "Moura manages your money and advises you like a personal financial consultant on eggshell paper elegance." },
      { property: "og:title", content: "Moura" },
      { property: "og:description", content: "Budgets, goals and an AI advisor that knows your money." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* Design System Buttons from DESIGN (1).md */
function FilledPillButton({
  children,
  href = "#get",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-[#000000] px-5 py-2.5 text-[14px] font-medium text-white border border-[#e5e5e5] transition-all duration-200 hover:bg-[#1a1a1a] active:scale-95 ${className}`}
    >
      {children}
    </a>
  );
}

function OutlinePillButton({
  children,
  to,
  href,
  className = "",
}: {
  children: React.ReactNode;
  to?: string;
  href?: string;
  className?: string;
}) {
  const commonClasses = `inline-flex items-center justify-center rounded-full bg-[#ffffff] px-5 py-2.5 text-[14px] font-medium text-[#000000] border border-[#e2e8f0] transition-all duration-200 hover:bg-[#f1f5f9] active:scale-95 ${className}`;

  if (to) {
    return (
      <Link to={to} className={commonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href || "#"} className={commonClasses}>
      {children}
    </a>
  );
}

function Index() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Timeline for scrubbed hero scaling effect (smooth, no pinning or snapping)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Hero content fades & scales down into background as user scrolls
      tl.to(
        heroContentRef.current,
        {
          opacity: 0,
          scale: 0.88,
          y: -40,
          ease: "none",
        },
        0
      );

      // Video scales down together with the font movement (keeping opacity 100%)
      tl.to(
        videoContainerRef.current,
        {
          scale: 0.92,
          opacity: 1,
          ease: "none",
        },
        0
      );
    }, mainRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#ffffff] text-[#000000] overflow-x-hidden selection:bg-[#e2e8f0] selection:text-[#000000]">
      {/* Top Nav Bar — 50px height, pure white with 1px neutral hairline border */}
      <nav className="fixed top-0 left-0 right-0 z-30 h-[52px] border-b border-[#e2e8f0] bg-[#ffffff]/90 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 sm:px-12 text-[14px]">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition" aria-label="Moura Home">
            <img src="/logo.svg" alt="Moura" className="h-7 w-auto object-contain" />
          </Link>

          <div className="hidden gap-8 text-[#64748b] sm:flex items-center text-[14px] font-normal">
            <a href="#features" className="transition-colors hover:text-[#000000]">
              Fitur
            </a>
            <a href="#advisor" className="transition-colors hover:text-[#000000]">
              Advisor
            </a>
            <a href="#pricing" className="transition-colors hover:text-[#000000]">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#features" className="hidden sm:inline-flex rounded-full bg-[#ffffff] px-4 py-1.5 text-[13px] font-medium text-[#000000] border border-[#e2e8f0] transition hover:bg-[#f1f5f9] active:scale-95">
              Fitur
            </a>
            <FilledPillButton href="#get" className="py-1.5 px-4 text-[13px]">
              Download
            </FilledPillButton>
          </div>
        </div>
      </nav>

      {/* Hero Section: Pure White background with 100% video opacity */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center px-6 text-center overflow-hidden bg-[#ffffff] z-0"
      >
        {/* Video Background with 100% full opacity */}
        <div ref={videoContainerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none will-change-transform">
          <video
            autoPlay
            loop
            muted
            playsInline
            ref={(el) => {
              if (el) {
                el.muted = true;
                el.play().catch(() => { });
              }
            }}
            className="w-full h-full object-cover video-fade-in opacity-100"
          >
            <source src="/videos/videomoney.mp4" type="video/mp4" />
            <source src="/videos/videouang.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content — Waldenburg/Inter Tight whisper-weight 300 with -0.02em tracking */}
        <div ref={heroContentRef} className="relative z-10 max-w-4xl mx-auto pt-10 will-change-transform">
          <h1 className="font-display font-light text-6xl md:text-[96px] md:leading-[1.05] tracking-[-0.02em] text-[#000000] drop-shadow-sm">
            Moura
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-display font-light text-2xl md:text-[30px] md:leading-[1.2] text-[#334155] tracking-[-0.02em]">
            Your money. With a consultant in your pocket.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <FilledPillButton href="#get" className="px-6 py-3 text-[14px]">
              Download free
            </FilledPillButton>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-[#ffffff] px-6 py-3 text-[14px] font-medium text-[#000000] transition hover:bg-[#f1f5f9] active:scale-95"
            >
              Jelajahi Fitur Moura ↓
            </a>
          </div>
        </div>
      </section>

      {/* Horizontal Pinned Features Section: Square boxes with external explanations and scrubbed horizontal slide */}
      <div id="features" className="relative z-20 bg-[#ffffff]">
        <HorizontalFeatures />
      </div>

      {/* Remaining Sections: Advisor, Pricing, Get, Footer */}
      <div className="relative z-20 bg-[#ffffff]">

        {/* Advisor Section with Butterfly Video Background (100% Opacity) */}
        <section id="advisor" className="relative min-h-[80vh] flex items-center justify-center px-6 py-36 text-center overflow-hidden border-b border-[#e2e8f0] bg-[#ffffff] text-[#000000]">
          {/* Butterfly Video Background with 100% opacity */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              ref={(el) => {
                if (el) {
                  el.muted = true;
                  el.play().catch(() => { });
                }
              }}
              className="w-full h-full object-cover opacity-100"
            >
              <source src="/videos/videokupu2.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Content — Whisper-weight 300 headlines */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="fade-up text-[11px] font-medium uppercase tracking-[0.18em] text-[#64748b]">
              Tanya-Jawab Keuangan & Avatar
            </p>
            <h2 className="fade-up delay-75 mt-4 font-display font-light text-4xl sm:text-6xl md:text-[68px] md:leading-[1.1] tracking-[-0.02em] text-[#000000]">
              Konsultan personal.<br />
              <span className="text-[#334155]">Siap menjawab setiap saat.</span>
            </h2>
            <p className="fade-up delay-150 mx-auto mt-6 max-w-xl text-[17px] text-[#64748b] leading-relaxed font-normal tracking-[0.01em]">
              Tanyakan apa saja — "Berapa total ngopi minggu ini?" atau "Aman nggak ya checkout barang ini?" — dan Moura AI langsung menghitung angka nyatamu dengan kepastian.
            </p>
            <div className="fade-up delay-200 mt-8">
              <FilledPillButton href="#get" className="px-6 py-3 text-[14px]">
                Tanya Moura
              </FilledPillButton>
            </div>
          </div>
        </section>

        {/* Pricing Section — Pure White Background with subtle borders */}
        <section id="pricing" className="bg-[#ffffff] px-6 py-32 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-[1280px]">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="mt-3 font-display font-light text-4xl sm:text-5xl tracking-[-0.02em] text-[#000000]">
                Simple, transparent pricing.
              </h2>
              <p className="mt-3 text-[15px] text-[#64748b] tracking-[0.01em]">
                Start for free, unlock unlimited AI financial advisory anytime.
              </p>
            </div>

            <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
              {[
                {
                  name: "Moura Standard",
                  price: "Free",
                  tag: "Always free",
                  desc: "Accounts, smart budgets, and personal savings targets organized in one view.",
                  action: "Get started",
                  highlighted: false,
                },
                {
                  name: "Moura Plus",
                  price: "$4.99",
                  period: "/month",
                  tag: "Unlimited advisory",
                  desc: "Everything in Standard, plus unlimited real-time AI consultant and predictive forecasts.",
                  action: "Start 14-day trial",
                  highlighted: true,
                },
              ].map((tier, idx) => (
                <div
                  key={tier.name}
                  className={`fade-up ${idx === 0 ? "delay-100" : "delay-200"} rounded-[20px] bg-[#ffffff] p-10 border border-[#e2e8f0] flex flex-col justify-between transition-all duration-300 hover:border-[#94a3b8] hover:shadow-sm`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-light text-2xl tracking-[-0.02em] text-[#000000]">
                        {tier.name}
                      </h3>
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#f1f5f9] text-[#64748b] border border-[#e2e8f0]">
                        {tier.tag}
                      </span>
                    </div>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="font-display font-light text-5xl tracking-[-0.02em] text-[#000000]">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-[14px] text-[#64748b] font-normal">{tier.period}</span>
                      )}
                    </div>

                    <p className="mt-4 text-[14px] text-[#64748b] leading-relaxed tracking-[0.01em]">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                    {tier.highlighted ? (
                      <FilledPillButton href="#get" className="w-full py-3 text-[14px]">
                        {tier.action}
                      </FilledPillButton>
                    ) : (
                      <OutlinePillButton href="#get" className="w-full py-3 text-[14px]">
                        {tier.action}
                      </OutlinePillButton>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Section — Pure White canvas with centered headline */}
        <section id="get" className="px-6 py-32 text-center bg-[#ffffff]">
          <div className="max-w-2xl mx-auto">
            <h2 className="fade-up font-display font-light text-4xl sm:text-6xl tracking-[-0.02em] text-[#000000]">
              Start with Moura today.
            </h2>
            <p className="fade-up delay-75 mt-4 text-[16px] text-[#64748b] tracking-[0.01em] max-w-md mx-auto">
              Your money, your goals, and a personal consultant always on call.
            </p>
            <div className="fade-up delay-150 mt-8 flex justify-center gap-4">
              <FilledPillButton href="#get" className="px-7 py-3 text-[14px]">
                Download free
              </FilledPillButton>
              <OutlinePillButton href="#features" className="px-6 py-3 text-[14px]">
                Jelajahi Fitur Moura
              </OutlinePillButton>
            </div>
          </div>
        </section>

        {/* Footer — Neutral hairline border, pure white surface, slate text */}
        <footer className="border-t border-[#e2e8f0] bg-[#ffffff] px-6 py-12 text-center text-[13px] text-[#64748b]">
          <div className="mx-auto max-w-[1280px] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Moura" className="h-5 w-auto object-contain" />
            </div>
            <span className="text-[#94a3b8]">© 2026 Moura Inc. Designed with crisp minimalist precision.</span>
            <div className="flex items-center gap-6 text-[13px]">
              <a href="#features" className="hover:text-[#000000] transition">Features</a>
              <a href="#advisor" className="hover:text-[#000000] transition">Advisor</a>
              <a href="#pricing" className="hover:text-[#000000] transition">Pricing</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
