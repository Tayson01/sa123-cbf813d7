import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Btn, BtnLink, SectionLabel } from "@/components/site/ui";
import logo from "@/assets/autorun-logo.png.asset.json";
import { CoverageMapSection } from "@/components/site/CoverageMapSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { FAQSection } from "@/components/site/FAQSection";
import { ContactSection } from "@/components/site/ContactSection";
import { PHONE, TEL, WA, zones } from "@/lib/site-data";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vulcanizare Autorun – Intervenții 24/7" },
      {
        name: "description",
        content:
          "Vulcanizare mobilă în Constanța și zonele limitrofe: intervenții rapide 24/7 pentru autoturisme, camioane și flote, direct la locația ta.",
      },
      { property: "og:title", content: "Vulcanizare Autorun – Intervenții 24/7" },
      {
        property: "og:description",
        content:
          "Intervenții rapide 24/7 pentru autoturisme, camioane și flote, direct la locația ta în Constanța.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sa123.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Vulcanizare Autorun",
          telephone: TEL,
          url: "https://sa123.lovable.app/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Șoseaua Mangaliei 126 B",
            addressLocality: "Constanța",
            addressCountry: "RO",
          },
          openingHours: "Mo-Su 00:00-23:59",
          areaServed: zones.map((z) => z.name),
        }),
      },
    ],
  }),
});


function Index() {
  return (
    <main>
      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-8 sm:pt-14 md:pb-20 md:pt-24">
          <div className="mx-auto max-w-3xl">
            <div className="animate-rise">
              <img src={logo.url} alt="Autorun — Vulcanizare mobilă" width={1060} height={260} className="mb-7 h-auto w-full max-w-lg rounded bg-brand-foreground p-3" fetchPriority="high" />
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-card/80 px-3 py-1.5 text-[11px] font-semibold text-muted-foreground shadow-card backdrop-blur sm:px-3.5 sm:text-xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                Disponibili 24/7 în Constanța și împrejurimi
              </span>

              <h1 className="mt-5 text-[2.1rem] font-black leading-[1.06] tracking-tight sm:text-5xl md:text-[4.1rem] md:leading-[1.02]">
                Vulcanizare <span className="text-brand">Autorun</span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                Vulcanizare mobilă în Constanța. Asistență non-stop, reparații pe loc și intervenții pe
                A2, A4 și litoral. Ajungem la tine în cel mai scurt timp.
              </p>

              <div className="mt-6 grid gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
                <Btn href={`tel:${TEL}`} className="min-h-14 w-full text-base shadow-glow sm:min-h-0 sm:w-auto sm:text-sm">
                  <Phone className="size-5 sm:size-4" /> Sună: {PHONE}
                </Btn>
                <div className="grid grid-cols-2 gap-2.5 sm:contents">
                  <Btn href={WA} variant="ghost" className="min-h-13 px-3 sm:min-h-0 sm:px-5">
                    <MessageCircle className="size-4" /> Locația
                  </Btn>
                  <BtnLink to="/contact" variant="ghost" className="min-h-13 px-3 sm:min-h-0 sm:px-5">
                    Cere ofertă
                  </BtnLink>
                </div>
              </div>

              <dl className="mt-7 grid max-w-xl grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
                {[
                  { icon: Clock, k: "< 20 min", v: "timp de răspuns" },
                  { icon: MapPin, k: "40 km", v: "rază acoperire" },
                  { icon: ShieldCheck, k: "Garanție", v: "la fiecare lucrare" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-border bg-card/70 p-3 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-card sm:p-4"
                  >
                    <s.icon className="size-4 text-brand" />
                    <dt className="mt-2.5 text-sm font-extrabold leading-none sm:text-base">{s.k}</dt>
                    <dd className="mt-1.5 text-[11px] leading-snug text-muted-foreground sm:text-xs">{s.v}</dd>
                  </div>
                ))}
              </dl>

            </div>
          </div>
        </div>
      </section>

      {/* Bară urgență */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-base font-bold">Ai pană acum?</p>
              <p className="text-sm text-muted-foreground">
                Răspundem 24/7. Trimite locația pe WhatsApp și pornim spre tine.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Btn href={`tel:${TEL}`}>
                <Phone className="size-4" /> {PHONE}
              </Btn>
              <Btn href={WA} variant="ghost">
                <MessageCircle className="size-4" /> WhatsApp
              </Btn>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {zones.slice(0, 4).map((z) => (
              <BtnLink
                key={z.slug}
                to="/zone/$slug"
                params={{ slug: z.slug }}
                variant="ghost"
                className="flex-col items-start rounded-2xl px-4 py-4 text-left"
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <MapPin className="size-4 text-brand" /> {z.short}
                </span>
                <span className="mt-1 text-xs font-normal text-muted-foreground">{z.eta}</span>
              </BtnLink>
            ))}
          </div>
        </div>
      </section>

      {/* Servicii */}
      <ServicesSection />





      {/* Hartă acoperire */}
      <div className="border-y border-border bg-surface">
        <CoverageMapSection />
      </div>


      {/* FAQ */}
      <FAQSection />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}

