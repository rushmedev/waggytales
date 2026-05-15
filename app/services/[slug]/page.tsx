import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Bath,
  BriefcaseMedical,
  CalendarClock,
  Camera,
  CheckCircle2,
  Clock3,
  Heart,
  HeartPulse,
  PawPrint,
  PhoneCall,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
  Waves,
} from "lucide-react";
import ImageGrid, { type GridImageItem } from "../../components/image-grid";
import MobileNavMenu from "../../components/mobile-nav-menu";
import RevealSection from "../../components/reveal-section";
import ScrollProgress from "../../components/scroll-progress";
import { buildWhatsAppUrl, contactInfo } from "../../config/contact";
import { mobileMenuItems, serviceSubmenuItems } from "../../config/navigation";
import { siteTheme } from "../../config/theme";
import { getServiceBySlug, serviceDetails } from "../../data/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const serviceGalleryBySlug: Record<string, GridImageItem[]> = {
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
      src: "/vet/vet%20(1).webp",
      alt: "Vet examination and calm handling for dogs",
      width: 800,
      height: 1000,
    },
    {
      src: "/vet/vet%20(2).webp",
      alt: "In-clinic checkup support and pharmacy space",
      width: 800,
      height: 1000,
    },
    {
      src: "/vet/vet%20(3).webp",
      alt: "Pet parent and dog consultation moment",
      width: 800,
      height: 1422,
    },
    {
      src: "/vet/vet%20(4).webp",
      alt: "Companion animal consultation session",
      width: 800,
      height: 1000,
    },
    {
      src: "/vet/vet%20(5).webp",
      alt: "Veterinary health check and treatment care",
      width: 800,
      height: 1000,
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
      src: "/pool/pool%20(1).webp",
      alt: "Dog enjoying a guided swimming session",
      width: 800,
      height: 533,
    },
    {
      src: "/pool/pool%20(2).webp",
      alt: "Golden retriever playing in the pool",
      width: 800,
      height: 533,
    },
    {
      src: "/pool/pool%20(3).webp",
      alt: "Two dogs having supervised pool time",
      width: 800,
      height: 1200,
    },
    {
      src: "/pool/pool%20(4).webp",
      alt: "Hydrotherapy-style assisted swim in progress",
      width: 800,
      height: 1000,
    },
    {
      src: "/pool/pool%20(5).webp",
      alt: "Happy pet after a pool session",
      width: 800,
      height: 533,
    },
    {
      src: "/pool/pool%20(6).webp",
      alt: "Dog pool zone at Waggy Tales",
      width: 800,
      height: 1000,
    },
    {
      src: "/pool/pool%20(7).webp",
      alt: "Pet swimming with trainer supervision",
      width: 800,
      height: 1200,
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
  "pet-party": [
    {
      src: "/thumbnails/thumb-party.webp",
      alt: "Pet birthday celebration setup",
    },
    {
      src: "/home-3.webp",
      alt: "Happy dogs celebrating together",
    },
  ],
};

const swimmingPoolProgram = {
  whyChooseUs:
    "We offer cage-free and leash-free boarding, day care, and night care to ensure a stress-free environment for your pets. Our comprehensive services include a vet clinic, grooming, training, and fun activities like swimming and paw parties.",
  tagline: "Let's create stories in a home away from home.",
  timings: ["Monday - Sunday", "10:00 AM to 01:00 PM", "02:00 PM to 05:00 PM"],
  sessionFormats: [
    {
      title: "Hourly sessions",
      points: ["Plain water bath and drying included.", "Shampoo bath and drying option available."],
    },
    {
      title: "Monthly sessions",
      points: [
        "10 sessions in a month (1 hour per session).",
        "Includes 2 complete grooming sessions: normal bath, ear cleaning, nail clipping, and oral cleaning.",
        "Remaining sessions include plain water bath and drying.",
      ],
    },
    {
      title: "Family sessions",
      points: [
        "Plans available for two pets from the same family.",
        "Second-pet discount benefits are available in family plans.",
      ],
    },
  ],
  hydrotherapy:
    "Hydrotherapy sessions support recovery after injuries or surgeries and can help manage conditions like arthritis. Benefits include pain relief, better mobility, muscle strengthening, weight management, and improved circulation.",
  towelAdvisory:
    "Pet parents are advised to bring their own towels for themselves and their pets to help avoid irritation and allergy concerns.",
  parentalParticipation:
    "Parents are allowed in the pool with their pets on weekdays (Monday to Friday) and should wear swimming pool costumes.",
  healthAdvisory: [
    "Pets with high temperatures are not allowed in the pool for safety reasons.",
    "Please ensure your pet has received anti-tick treatment before entering the pool.",
    "If your pet is unwell or has skin conditions, avoid pool entry to reduce spread risk.",
  ],
};

const swimmingProgramBenefits = [
  { icon: Sparkles, text: "Stress-free environment" },
  { icon: Shield, text: "Expert care & supervision" },
  { icon: Waves, text: "Fun & engaging activities" },
  { icon: HeartPulse, text: "Health & recovery support" },
  { icon: Bath, text: "Clean & safe facilities" },
  { icon: Users, text: "Lots of love & attention" },
];

const swimmingWhyPoints = [
  {
    title: "Great for joint & muscle health",
    description:
      "Swimming is a great way for pets to stay active while reducing stress on joints and improving confidence in water.",
  },
  {
    title: "Safe & supervised sessions",
    description: "Each session is supervised and paced according to stamina, temperament, and prior swimming experience.",
  },
  {
    title: "Professional care",
    description: "Professional care plans with clear communication and daily updates.",
  },
  {
    title: "Hygiene first",
    description: "Hygiene-first routines and comfort-focused handling by trained staff.",
  },
  {
    title: "Easy booking",
    description: "Easy booking support via call and WhatsApp for quick coordination.",
  },
];

const vetClinicProgram = {
  intro:
    "Our vet clinic supports preventive care, diagnostics, and treatment planning with practical follow-through for pet parents.",
  services: [
    "General checkups",
    "Vaccination and deworming",
    "Dermatology consultations",
    "Laboratory diagnosis",
    "In-house pharmacy support",
    "Travel and health certificate guidance",
    "Pet food and accessories support",
  ],
  diagnostics: ["CBP", "LFT", "KFT", "Thyroid", "Diabetes", "Serum Electrolyte"],
  timings: [
    "Monday to Sunday",
    "External clients: 04:00 PM to 09:00 PM",
    "Boarded clients: 04:00 PM to 09:00 PM",
    "24/7 emergency support for boarded clients",
  ],
  consultationTypes: ["General health check-up", "Emergency consultation / visit"],
  canineVaccination: ["Canine Corona", "DHPPi + Lepto", "Anti Rabies", "Kennel Cough"],
  felineVaccination: ["Feligen CRP / Tricat Trio", "Anti Rabies"],
  advisory: [
    "Vaccination schedules are finalized based on age, prior history, and current health status.",
    "Treatment plans may vary depending on diagnosis and clinical findings.",
    "Emergency cases are triaged first for boarded pets requiring immediate support.",
  ],
};

const vetHeroHighlights = [
  {
    icon: BriefcaseMedical,
    text: "General health checkups & emergency consultation",
  },
  {
    icon: ShieldCheck,
    text: "Vaccination & deworming for complete care",
  },
  {
    icon: Stethoscope,
    text: "Dermatology & laboratory diagnosis support",
  },
  {
    icon: Syringe,
    text: "In-house pharmacy, travel guidance & pet wellness",
  },
];

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
  const mobileNavActions = [
    { label: "WhatsApp", href: serviceWhatsappUrl, variant: "secondary" as const },
  ];
  const isSwimmingPoolPage = service.slug === "swimming-pool";
  const isVetClinicPage = service.slug === "vet-clinic";
  const swimmingHighlightIcons = [Users, Shield, Waves, Bath];

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
              preload
            />
            <span>{siteTheme.brand.name}</span>
          </Link>
          <div className="wt-inner-nav-actions wt-inner-nav-actions-desktop">
            <Link className="wt-btn wt-btn-secondary" href="/services">
              All Services
            </Link>
            <a className="wt-btn wt-btn-primary" href={contactInfo.dialerUrl}>
              Book Now
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
        <RevealSection
          className={`wt-shell wt-service-hero${isSwimmingPoolPage ? " wt-swim-hero" : ""}${isVetClinicPage ? " wt-vet-hero" : ""}`}
        >
          <article className="wt-service-hero-content">
            <p className="wt-pill">Service</p>
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
              preload
            />
            {isVetClinicPage ? (
              <div className="wt-vet-hero-note">
                <Sparkles className="wt-icon wt-icon-inline" />
                <p>
                  <strong>Compassionate care.</strong>
                  <span>Healthier, happier pets.</span>
                </p>
              </div>
            ) : null}
          </article>
        </RevealSection>

        <RevealSection
          className={`wt-shell wt-service-highlight-wrap${isSwimmingPoolPage ? " wt-swim-highlight-wrap" : ""}${isVetClinicPage ? " wt-vet-highlight-wrap" : ""}`}
          delay={0.08}
        >
          <div
            className={`wt-service-highlight-grid${isSwimmingPoolPage ? " wt-swim-highlight-grid" : ""}${isVetClinicPage ? " wt-vet-highlight-grid" : ""}`}
          >
            {isVetClinicPage
              ? vetHeroHighlights.map((item) => (
                  <article key={item.text} className="wt-service-highlight-card">
                    <item.icon className="wt-icon wt-icon-inline" />
                    <p>{item.text}</p>
                  </article>
                ))
              : service.highlights.map((highlight, index) => {
                  const HighlightIcon =
                    isSwimmingPoolPage && swimmingHighlightIcons[index]
                      ? swimmingHighlightIcons[index]
                      : CheckCircle2;

                  return (
                    <article key={highlight} className="wt-service-highlight-card">
                      <HighlightIcon className="wt-icon wt-icon-inline" />
                      <p>{highlight}</p>
                    </article>
                  );
                })}
          </div>
        </RevealSection>

        {isSwimmingPoolPage ? (
          <>
            <RevealSection className="wt-shell wt-swim-program-wrap" delay={0.1}>
              <article className="wt-swim-program-intro">
                <p className="wt-pill">Swimming Pool Program</p>
                <h2>Designed for safe fun, confidence, and recovery-focused movement</h2>
                <p>{swimmingPoolProgram.whyChooseUs}</p>
                <p className="wt-swim-program-tagline">{swimmingPoolProgram.tagline}</p>
              </article>

              <article className="wt-swim-program-benefits">
                {swimmingProgramBenefits.map((benefit) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div key={benefit.text} className="wt-swim-program-benefit-item">
                      <BenefitIcon className="wt-icon wt-icon-inline" />
                      <p>{benefit.text}</p>
                    </div>
                  );
                })}
              </article>
            </RevealSection>

            <RevealSection className="wt-shell wt-swim-layout-grid" delay={0.12}>
              <article className="wt-swim-program-card wt-swim-program-card-timings">
                <div className="wt-service-detail-head">
                  <Clock3 className="wt-icon wt-icon-inline" />
                  <h3>Session Details</h3>
                </div>
                <ul className="wt-swim-list">
                  {swimmingPoolProgram.timings.map((timing) => (
                    <li key={timing}>
                      <span>{timing}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="wt-swim-program-card wt-swim-program-card-hydro">
                <div className="wt-service-detail-head">
                  <HeartPulse className="wt-icon wt-icon-inline" />
                  <h3>Hydrotherapy Support</h3>
                </div>
                <p>{swimmingPoolProgram.hydrotherapy}</p>
              </article>

              <article className="wt-swim-program-card wt-swim-program-card-formats">
                <div className="wt-service-detail-head">
                  <Waves className="wt-icon wt-icon-inline" />
                  <h3>Session Formats</h3>
                </div>
                <div className="wt-swim-session-blocks">
                  {swimmingPoolProgram.sessionFormats.map((session) => (
                    <section key={session.title} className="wt-swim-session-block">
                      <h4>{session.title}</h4>
                      <ul className="wt-swim-list">
                        {session.points.map((point) => (
                          <li key={point}>
                            <Sparkles className="wt-icon wt-icon-inline" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>
            </RevealSection>

            <RevealSection className="wt-shell wt-swim-advisory-grid" delay={0.14}>
              <article className="wt-swim-program-card">
                <div className="wt-service-detail-head">
                  <Bath className="wt-icon wt-icon-inline" />
                  <h3>Towel Advisory</h3>
                </div>
                <p>{swimmingPoolProgram.towelAdvisory}</p>
              </article>

              <article className="wt-swim-program-card">
                <div className="wt-service-detail-head">
                  <Users className="wt-icon wt-icon-inline" />
                  <h3>Parental Participation</h3>
                </div>
                <p>{swimmingPoolProgram.parentalParticipation}</p>
              </article>

              <article className="wt-swim-program-card">
                <div className="wt-service-detail-head">
                  <ShieldAlert className="wt-icon wt-icon-inline" />
                  <h3>Pet Health Advisory</h3>
                </div>
                <ul className="wt-swim-list">
                  {swimmingPoolProgram.healthAdvisory.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>

            <RevealSection className="wt-shell wt-swim-why-wrap" delay={0.16}>
              <article className="wt-service-detail-card wt-swim-why-card">
                <div className="wt-service-detail-head">
                  <Shield className="wt-icon wt-icon-inline" />
                  <h2>Why pet parents choose this service</h2>
                </div>
                {service.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
                <ul className="wt-swim-why-list">
                  {swimmingWhyPoints.map((point) => (
                    <li key={point.title}>
                      <CheckCircle2 className="wt-icon wt-icon-inline" />
                      <div>
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>

            <RevealSection className="wt-shell wt-swim-gallery-wrap" delay={0.18}>
              <article className="wt-service-gallery-card wt-swim-gallery-card">
                <div className="wt-service-detail-head">
                  <Camera className="wt-icon wt-icon-inline" />
                  <h2>Service gallery</h2>
                </div>
                <ImageGrid
                  images={gallery}
                  gridClassName="wt-swim-gallery-grid"
                  itemClassName="wt-swim-gallery-item"
                  imageClassName="wt-swim-gallery-image"
                  sizes="(max-width: 719px) 100vw, (max-width: 1199px) 50vw, 33vw"
                />
              </article>
            </RevealSection>

            <RevealSection className="wt-shell wt-swim-cta-wrap" delay={0.2}>
              <article className="wt-swim-cta-card">
                <p>
                  <strong>A safe splash of joy & wellness for your furry friend.</strong>
                  <span>Book a swimming session today!</span>
                </p>
                <div className="wt-swim-cta-actions">
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
            </RevealSection>
          </>
        ) : null}

        {isVetClinicPage ? (
          <>
            <RevealSection className="wt-shell wt-vet-program-wrap" delay={0.1}>
              <article className="wt-vet-program-intro">
                <p className="wt-pill">Vet Clinic Program</p>
                <h2>Preventive, diagnostic, and recovery-focused veterinary care</h2>
                <p>{vetClinicProgram.intro}</p>
                <Image
                  src="/doggo.webp"
                  alt="Friendly pets at the clinic"
                  width={800}
                  height={1000}
                  className="wt-vet-program-pets"
                />
                <Heart className="wt-vet-program-heart" />
              </article>

              <article className="wt-vet-service-list-card">
                <h3>Core services</h3>
                <ul className="wt-vet-service-list">
                  {vetClinicProgram.services.map((item) => (
                    <li key={item}>
                      <PawPrint className="wt-icon wt-icon-inline" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>

            <RevealSection className="wt-shell wt-vet-info-grid" delay={0.12}>
              <article className="wt-vet-card wt-vet-card-session">
                <div className="wt-service-detail-head">
                  <Clock3 className="wt-icon wt-icon-inline" />
                  <h3>Session details</h3>
                </div>
                <h4 className="wt-vet-subhead">Timings</h4>
                <ul className="wt-swim-list wt-vet-list-compact">
                  {vetClinicProgram.timings.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="wt-service-detail-head">
                  <Shield className="wt-icon wt-icon-inline" />
                  <h3>Consultation support</h3>
                </div>
                <h4 className="wt-vet-subhead">Consultation types</h4>
                <ul className="wt-vet-bullet-list">
                  {vetClinicProgram.consultationTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="wt-vet-card wt-vet-card-lab">
                <div className="wt-service-detail-head">
                  <Waves className="wt-icon wt-icon-inline" />
                  <h3>Laboratory diagnosis</h3>
                </div>
                <h4 className="wt-vet-subhead">Clinical checks include</h4>
                <ul className="wt-vet-diagnostics-list">
                  {vetClinicProgram.diagnostics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="wt-vet-card wt-vet-card-vaccine">
                <div className="wt-service-detail-head">
                  <Users className="wt-icon wt-icon-inline" />
                  <h3>Vaccination support</h3>
                </div>
                <section className="wt-vet-vaccine-panel">
                  <h4 className="wt-vet-subhead">Canine vaccination</h4>
                  <ul className="wt-vet-bullet-list">
                    {vetClinicProgram.canineVaccination.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
                <section className="wt-vet-vaccine-panel">
                  <div className="wt-service-detail-head wt-vet-feline-head">
                    <HeartPulse className="wt-icon wt-icon-inline" />
                    <h4 className="wt-vet-subhead">Feline vaccination</h4>
                  </div>
                  <ul className="wt-vet-bullet-list">
                    {vetClinicProgram.felineVaccination.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </article>

              <article className="wt-vet-card wt-vet-card-note">
                <div className="wt-service-detail-head">
                  <ShieldAlert className="wt-icon wt-icon-inline" />
                  <h3>Important notes</h3>
                </div>
                <ul className="wt-vet-note-list">
                  {vetClinicProgram.advisory.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </RevealSection>

            <RevealSection className="wt-shell wt-vet-gallery-wrap" delay={0.16}>
              <article className="wt-service-gallery-card wt-vet-gallery-card">
                <div className="wt-service-detail-head">
                  <Camera className="wt-icon wt-icon-inline" />
                  <h2>Inside our vet clinic</h2>
                </div>
                <div className="wt-vet-gallery-grid">
                  {gallery.map((image, index) => (
                    <figure key={`${image.src}-${index}`} className="wt-vet-gallery-item">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width ?? 1200}
                        height={image.height ?? 900}
                        className="wt-vet-gallery-image"
                        sizes="(max-width: 719px) 100vw, (max-width: 1199px) 50vw, 33vw"
                      />
                    </figure>
                  ))}
                </div>
              </article>
            </RevealSection>

            <RevealSection className="wt-shell wt-vet-cta-wrap" delay={0.18}>
              <article className="wt-vet-cta-card">
                <p>
                  <strong>Trusted vet care with practical follow-through for every life stage.</strong>
                  <span>Book a consultation session today.</span>
                </p>
                <div className="wt-vet-cta-actions">
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
            </RevealSection>
          </>
        ) : null}

        {!isSwimmingPoolPage && !isVetClinicPage ? (
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
              <ImageGrid
                images={gallery}
                gridClassName="wt-service-gallery-grid"
                itemClassName="wt-service-gallery-item"
                imageClassName="wt-service-gallery-image"
              />
            </article>
          </RevealSection>
        ) : null}
      </main>
    </div>
  );
}
