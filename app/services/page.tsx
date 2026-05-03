import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, MapPin, Phone, Sparkles } from "lucide-react";
import RevealSection from "../components/reveal-section";
import ScrollProgress from "../components/scroll-progress";
import { buildWhatsAppUrl, contactInfo } from "../config/contact";
import { siteTheme } from "../config/theme";
import { serviceDetails } from "../data/services";

export const metadata: Metadata = {
  title: `Pet Care Services in Hyderabad | ${siteTheme.brand.name}`,
  description:
    "Explore premium dog boarding, pet spa, vet clinic, training, swimming, and pet store services in Hyderabad by M & M Waggy Tales.",
  keywords: [
    "pet services Hyderabad",
    "dog home stay Hyderabad",
    "pet grooming Hyderabad",
    "dog training Hyderabad",
    "pet swimming pool Hyderabad",
    "pet clinic Hyderabad",
  ],
  openGraph: {
    title: `Pet Care Services in Hyderabad | ${siteTheme.brand.name}`,
    description:
      "Explore premium dog boarding, grooming, clinic, swimming, store, and training services in Hyderabad.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "#waggy-tales",
        name: siteTheme.brand.name,
        description:
          "Premium pet care center in Hyderabad offering dog home stay, grooming, training, vet support, and wellness services.",
        areaServed: "Hyderabad",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Golden Tulip Colony",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        telephone: contactInfo.callNumber,
      },
      {
        "@type": "ItemList",
        name: `${siteTheme.brand.name} Services`,
        itemListElement: serviceDetails.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.seoDescription,
          },
        })),
      },
    ],
  };

  return (
    <div className="wt-page wt-service-page">
      <ScrollProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

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
            <a className="wt-btn wt-btn-secondary" href={contactInfo.whatsappUrl}>
              WhatsApp
            </a>
            <a className="wt-btn wt-btn-primary" href={contactInfo.dialerUrl}>
              Call Now
            </a>
          </div>
        </nav>
      </header>

      <main>
        <RevealSection className="wt-shell wt-service-list-hero">
          <p className="wt-pill">All Services</p>
          <h1 className="wt-paw-heading wt-paw-heading-center">
            Premium services designed for every wag, walk, and wow moment
          </h1>
          <p className="wt-copy">
            Discover professional pet care crafted with transparent updates, safe routines, and
            loving attention by our dedicated team in Hyderabad.
          </p>
        </RevealSection>

        <RevealSection className="wt-shell wt-service-list-grid-wrap" delay={0.08}>
          <div className="wt-service-list-grid">
            {serviceDetails.map((service) => (
              <article key={service.slug} className="wt-service-list-card">
                <Image
                  src={service.heroImage}
                  alt={service.heroAlt}
                  width={1200}
                  height={800}
                  className="wt-service-list-image"
                />
                <div className="wt-service-list-content">
                  <div className="wt-service-list-head">
                    <h2>{service.title}</h2>
                    {service.tag ? <span>{service.tag}</span> : null}
                  </div>
                  <p>{service.shortDescription}</p>
                  <ul className="wt-service-list-points">
                    {service.highlights.slice(0, 3).map((point) => (
                      <li key={`${service.slug}-${point}`}>
                        <Sparkles className="wt-icon wt-icon-inline" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="wt-service-list-actions">
                    <Link href={`/services/${service.slug}`} className="wt-btn wt-btn-primary">
                      View Service Page
                    </Link>
                    <a
                      className="wt-btn wt-btn-secondary"
                      href={buildWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp This Service
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="wt-shell wt-service-list-cta" delay={0.12}>
          <article className="wt-service-list-cta-card">
            <h2 className="wt-paw-heading wt-paw-heading-center">Need help picking the right service?</h2>
            <p>
              Call us for a quick recommendation based on your pet&apos;s age, breed, activity
              level, and routine.
            </p>
            <div className="wt-service-list-cta-pills">
              <a href={contactInfo.dialerUrl}>
                <Phone className="wt-icon wt-icon-inline" />
                <span>{contactInfo.callNumber}</span>
              </a>
              <a href={contactInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="wt-icon wt-icon-inline" />
                <span>Golden Tulip Colony, Hyderabad</span>
              </a>
              <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <HeartHandshake className="wt-icon wt-icon-inline" />
                <span>Book via WhatsApp</span>
              </a>
            </div>
          </article>
        </RevealSection>
      </main>
    </div>
  );
}
