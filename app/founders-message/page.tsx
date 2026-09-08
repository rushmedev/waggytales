import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HeartHandshake, Phone } from "lucide-react";
import MobileNavMenu from "../components/mobile-nav-menu";
import RevealSection from "../components/reveal-section";
import ScrollProgress from "../components/scroll-progress";
import { contactInfo } from "../config/contact";
import { mobileMenuItems, serviceSubmenuItems } from "../config/navigation";
import { siteTheme } from "../config/theme";

export const metadata: Metadata = {
  title: `Founders Message | ${siteTheme.brand.name}`,
  description:
    "A personal note from the founders of M & M Waggy Tales on the values, care philosophy, and promise behind every pet stay.",
};

const founderMilestones = [
  {
    year: "2021",
    title: "Waggy Tales Was Born",
    description:
      "We started with a simple goal: create a safe, loving, and transparent pet care home in Hyderabad.",
    image: "/founders.webp",
    alt: "Founders with their dogs at Waggy Tales",
  },
  {
    year: "2022",
    title: "Boarding Trust Expanded",
    description:
      "More pet parents trusted us for home-stay and daily updates, helping us build a stronger care routine system.",
    image: "/home-1.webp",
    alt: "Dog enjoying a secure home-stay environment",
  },
  {
    year: "2023",
    title: "Services Became Full Spectrum",
    description:
      "We expanded beyond stay to grooming, vet support, and training so families could find everything in one place.",
    image: "/home-2.webp",
    alt: "Happy pets under multi-service care",
  },
  {
    year: "2024",
    title: "Community of Happy Tails",
    description:
      "With every new family, our focus stayed the same: thoughtful care, clear communication, and emotional comfort.",
    image: "/home-3.webp",
    alt: "Playful dogs and joyful pet community",
  },
  {
    year: "2025",
    title: "Premium Care, Same Heart",
    description:
      "As we continue to grow, our core promise remains unchanged - every pet should feel at home with us.",
    image: "/home-4.webp",
    alt: "Premium pet care with happy dogs",
  },
];

export default function FoundersMessagePage() {
  const mobileNavActions = [
    { label: "Call Us", href: contactInfo.dialerUrl as string },
    { label: "WhatsApp", href: contactInfo.whatsappUrl as string, variant: "secondary" as const },
  ];

  return (
    <div className="wt-page wt-founder-page">
      <ScrollProgress />

      <header className="wt-shell wt-inner-nav-wrap">
        <nav className="wt-inner-nav">
          <Link href="/" className="wt-inner-nav-brand">
            <Image
              src="/waggy.jpg"
              alt={`${siteTheme.brand.name} logo`}
              width={40}
              height={40}
              className="wt-brand-logo"
              priority
            />
            <span>{siteTheme.brand.name}</span>
          </Link>
          <div className="wt-inner-nav-actions wt-inner-nav-actions-desktop">
            <Link className="wt-btn wt-btn-secondary" href="/">
              <ArrowLeft className="wt-icon wt-icon-inline" />
              <span>Back Home</span>
            </Link>
            <a className="wt-btn wt-btn-primary" href={contactInfo.dialerUrl}>
              <Phone className="wt-icon wt-icon-inline" />
              <span>Call Us</span>
            </a>
          </div>
          <MobileNavMenu
            items={mobileMenuItems}
            serviceItems={serviceSubmenuItems}
            actions={mobileNavActions}
          />
        </nav>
      </header>

      <main>
        <RevealSection className="wt-founder-hero-wrap">
          <div className="wt-shell wt-founder-hero-shell">
            <article className="wt-founder-hero-card">
              <blockquote className="wt-founder-hero-quote">
                <p>
                  &quot;Every pet who walks through our doors is loved like they already belong to
                  us.&quot;
                </p>
                <cite>- Megha &amp; Manjeet</cite>
              </blockquote>
              <Image
                src="/founders.webp"
                alt="Founders of M & M Waggy Tales with their dogs"
                width={2048}
                height={1365}
                className="wt-founder-hero-image"
                priority
              />
            </article>
          </div>
        </RevealSection>

        <RevealSection className="wt-shell flex flex-col gap-4" delay={0.06}>
          {/* <article className="wt-founder-quote-card">
            <HeartHandshake className="wt-icon wt-icon-inline" />
            <p>
              &quot;Every pet who walks through our doors is loved like they already belong to
              us.&quot;
            </p>
            <strong>Founding Team, M &amp; M Waggy Tales</strong>
          </article> */}

          <article className="wt-founder-note-card">
            <p className="wt-kicker">A Note From Us</p>
            <h1 className="wt-paw-heading">Founders Message</h1>
            <p>We began M &amp; M Waggy Tales because of Lucy.</p>
            <p>
              Lucy is our child, an adorable female Labrador who filled our home with love.
              Whenever we had to travel, leaving her behind never felt easy.
            </p>
            <p>
              We searched for a place in Hyderabad where she would feel safe, clean, free, and
              loved like home. But we could not find the kind of care we wanted for her. Too often,
              she came back from boarding with ticks, fleas, and discomfort. Slowly, we stopped
              travelling because our hearts were never at peace leaving her behind.
            </p>
            <p>That pain became our purpose.</p>
            <p>
              Megha&apos;s childhood was filled with dogs, cats, ducks, and birds. Manjeet grew up
              watching his family care for packs of stray dogs. Love for animals was always a part
              of both their lives. Together, they decided to build the place they once wished
              existed for Lucy.
            </p>
            <p>
              What started as home boarding has now grown into M &amp; M Waggy Tales, a warm,
              leash-free, love-filled space for boarding, daycare, grooming, vet care, pool time,
              pick-up and drop, and more.
            </p>
            <p>But our heart has stayed the same.</p>
            <p>
              We are pet parents first. Every routine here is built with love, patience,
              cleanliness, safety, and comfort. Every pet who comes to us is cared for like our
              own.
            </p>
          </article>
        </RevealSection>

        <RevealSection className="wt-shell wt-founder-timeline-wrap pt-2 md:pt-4" delay={0.08}>
          <div className="wt-founder-timeline-head">
            <p className="wt-kicker">Our Journey</p>
            <h2 className="wt-paw-heading wt-paw-heading-center">Moments that shaped us</h2>
            <p className="wt-copy">
              A timeline of meaningful milestones that reflect our growth and commitment to every
              pet family.
            </p>
          </div>

          <div className="wt-founder-timeline">
            {founderMilestones.map((milestone, index) => (
              <article
                key={milestone.year}
                className={`wt-founder-timeline-item ${
                  index % 2 === 0 ? "is-right" : "is-left"
                }`}
              >
                <span className={`wt-founder-year-pill ${index === 0 ? "is-highlight" : ""}`}>
                  {milestone.year}
                </span>

                <div className="wt-founder-timeline-content">
                  <Image
                    src={milestone.image}
                    alt={milestone.alt}
                    width={1200}
                    height={800}
                    className="wt-founder-milestone-image"
                  />
                  <div className="wt-founder-timeline-copy">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="wt-shell wt-founder-signoff" delay={0.1}>
          <h2 className="wt-paw-heading wt-paw-heading-center">With gratitude, always</h2>
          <p>
            Thank you for letting us be a part of your pet&apos;s journey. Your trust means
            everything to us, and we will keep earning it with care that is thoughtful, transparent,
            and full of heart.
          </p>
          <a className="wt-btn wt-btn-primary" href={contactInfo.whatsappUrl}>
            Send us a WhatsApp message
          </a>
        </RevealSection>
      </main>
    </div>
  );
}
