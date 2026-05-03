import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HeartHandshake, Phone } from "lucide-react";
import RevealSection from "../components/reveal-section";
import ScrollProgress from "../components/scroll-progress";
import { contactInfo } from "../config/contact";
import { siteTheme } from "../config/theme";

export const metadata: Metadata = {
  title: `Founders Message | ${siteTheme.brand.name}`,
  description:
    "A personal note from the founders of M & M Waggy Tales on the values, care philosophy, and promise behind every pet stay.",
};

export default function FoundersMessagePage() {
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
          <div className="wt-inner-nav-actions">
            <Link className="wt-btn wt-btn-secondary" href="/">
              <ArrowLeft className="wt-icon wt-icon-inline" />
              <span>Back Home</span>
            </Link>
            <a className="wt-btn wt-btn-primary" href={contactInfo.dialerUrl}>
              <Phone className="wt-icon wt-icon-inline" />
              <span>Call Us</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <RevealSection className="wt-founder-hero-wrap">
          <div className="wt-shell wt-founder-hero-shell">
            <article className="wt-founder-hero-card">
              <blockquote className="wt-founder-hero-quote">
                <p>
                  &quot;Every pet who walks in should feel the same comfort, safety, and love they
                  feel at home. That is our promise, every single day.&quot;
                </p>
                <cite>- Megha Paul &amp; Manjeet Kumar</cite>
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

        <RevealSection className="wt-shell wt-founder-message-grid" delay={0.06}>
          <article className="wt-founder-note-card">
            <p className="wt-kicker">A Note From Us</p>
            <h1 className="wt-paw-heading">Founders Message</h1>
            <p>
              We began {siteTheme.brand.name} with one simple idea: pet care should feel deeply
              personal. Not transactional. Not rushed. Just honest, attentive care from people who
              truly understand the bond between pets and their families.
            </p>
            <p>
              Every routine here is designed with intention - safe social time, clean spaces,
              regular updates, and emotional comfort. We do not just host pets, we build trust with
              each family that chooses us.
            </p>
          </article>

          <article className="wt-founder-quote-card">
            <HeartHandshake className="wt-icon wt-icon-inline" />
            <p>
              &quot;To us, quality pet care means clear communication, calm handling, and genuine
              affection - from the first hello to the happy ride back home.&quot;
            </p>
            <strong>Founding Team, M &amp; M Waggy Tales</strong>
          </article>
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
