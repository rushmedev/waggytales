import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarClock, Camera, CheckCircle2, PhoneCall, Shield, Sparkles } from "lucide-react";
import RevealSection from "../../components/reveal-section";
import ScrollProgress from "../../components/scroll-progress";
import { buildWhatsAppUrl, contactInfo } from "../../config/contact";
import { siteTheme } from "../../config/theme";
import { getServiceBySlug, serviceDetails } from "../../data/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const serviceGalleryBySlug: Record<string, Array<{ src: string; alt: string }>> = {
  "doggy-home-stay": [
    {
      src: "https://images.unsplash.com/photo-1583511655936-4f73c2f70c6f?auto=format&fit=crop&w=1200&q=80",
      alt: "Relaxed dog in a cozy indoor room",
    },
    {
      src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1200&q=80",
      alt: "Playful dogs in a supervised care environment",
    },
  ],
  "pet-spa-salon": [
    {
      src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80",
      alt: "Dog getting a gentle grooming session",
    },
    {
      src: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=1200&q=80",
      alt: "Freshly groomed dog portrait",
    },
  ],
  "vet-clinic": [
    {
      src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80",
      alt: "Veterinarian checking a dog at clinic",
    },
    {
      src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80",
      alt: "Healthy dog with a stethoscope during checkup",
    },
  ],
  "pet-store": [
    {
      src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80",
      alt: "Pet store aisle with curated products",
    },
    {
      src: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80",
      alt: "Pet food and accessories arranged on shelves",
    },
  ],
  "swimming-pool": [
    {
      src: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=1200&q=80",
      alt: "Dog enjoying a monitored swimming session",
    },
    {
      src: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=1200&q=80",
      alt: "Active dog play near a pool environment",
    },
  ],
  training: [
    {
      src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
      alt: "Dog training session with handler outdoors",
    },
    {
      src: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1200&q=80",
      alt: "Obedience training with a cheerful pet dog",
    },
  ],
};

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: `Service Not Found | ${siteTheme.brand.name}`,
      description: "The requested service page is not available.",
    };
  }

  return {
    title: `${service.title} in Hyderabad | ${siteTheme.brand.name}`,
    description: service.seoDescription,
    keywords: [
      `${service.title} Hyderabad`,
      "pet care Hyderabad",
      "dog boarding Hyderabad",
      "pet service near me",
      siteTheme.brand.name,
    ],
    openGraph: {
      title: `${service.title} in Hyderabad | ${siteTheme.brand.name}`,
      description: service.seoDescription,
      type: "article",
      locale: "en_IN",
      images: [
        {
          url: service.heroImage,
          alt: service.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} in Hyderabad | ${siteTheme.brand.name}`,
      description: service.seoDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const gallery = serviceGalleryBySlug[service.slug] ?? [
    { src: service.heroImage, alt: service.heroAlt },
    {
      src: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=80",
      alt: "Happy dog in a premium care environment",
    },
  ];
  const serviceWhatsappUrl = buildWhatsAppUrl(service.whatsappMessage);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "#waggy-tales-business",
        name: siteTheme.brand.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Golden Tulip Colony",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        areaServed: "Hyderabad",
        telephone: contactInfo.callNumber,
      },
      {
        "@type": "Service",
        name: service.title,
        description: service.seoDescription,
        provider: { "@id": "#waggy-tales-business" },
        areaServed: "Hyderabad",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
          { "@type": "ListItem", position: 3, name: service.title, item: `/services/${service.slug}` },
        ],
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
            <Link className="wt-btn wt-btn-secondary" href="/services">
              All Services
            </Link>
            <a className="wt-btn wt-btn-primary" href={contactInfo.dialerUrl}>
              Book Now
            </a>
          </div>
        </nav>
      </header>

      <main>
        <RevealSection className="wt-shell wt-service-hero">
          <article className="wt-service-hero-content">
            <p className="wt-pill">{service.tag ?? "Premium Service"}</p>
            <h1>{service.title}</h1>
            <p className="wt-copy">{service.seoDescription}</p>
            <div className="wt-service-hero-actions">
              <a className="wt-btn wt-btn-primary" href={contactInfo.dialerUrl}>
                <PhoneCall className="wt-icon wt-icon-inline" />
                <span>Call {contactInfo.callNumber}</span>
              </a>
              <a className="wt-btn wt-btn-secondary" href={serviceWhatsappUrl}>
                <CalendarClock className="wt-icon wt-icon-inline" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </article>
          <article className="wt-service-hero-media">
            <Image
              src={service.heroImage}
              alt={service.heroAlt}
              width={1400}
              height={950}
              className="wt-service-hero-image"
              priority
            />
          </article>
        </RevealSection>

        <RevealSection className="wt-shell wt-service-highlight-wrap" delay={0.08}>
          <div className="wt-service-highlight-grid">
            {service.highlights.map((highlight) => (
              <article key={highlight} className="wt-service-highlight-card">
                <CheckCircle2 className="wt-icon wt-icon-inline" />
                <p>{highlight}</p>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="wt-shell wt-service-body" delay={0.12}>
          <article className="wt-service-detail-card">
            <div className="wt-service-detail-head">
              <Shield className="wt-icon wt-icon-inline" />
              <h2>Why pet parents choose this service</h2>
            </div>
            {service.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
            <ul className="wt-service-detail-points">
              <li>
                <Sparkles className="wt-icon wt-icon-inline" />
                <span>Professional care plans with clear communication and daily updates.</span>
              </li>
              <li>
                <Sparkles className="wt-icon wt-icon-inline" />
                <span>Hygiene-first routines and comfort-focused handling by trained staff.</span>
              </li>
              <li>
                <Sparkles className="wt-icon wt-icon-inline" />
                <span>Easy booking support via call and WhatsApp for quick coordination.</span>
              </li>
            </ul>
          </article>

          <article className="wt-service-gallery-card">
            <div className="wt-service-detail-head">
              <Camera className="wt-icon wt-icon-inline" />
              <h2>Service gallery</h2>
            </div>
            <div className="wt-service-gallery-grid">
              {gallery.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={900}
                  className="wt-service-gallery-image"
                />
              ))}
            </div>
          </article>
        </RevealSection>
      </main>
    </div>
  );
}
