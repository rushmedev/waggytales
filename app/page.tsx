import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import {
  CalendarClock,
  Clock3,
  Heart,
  Mail,
  MapPin,
  MessageCircleQuestion,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import HeroSlideshow from "./components/hero-slideshow";
import ProofAnimationIcon, { type ProofAnimationName } from "./components/proof-animation-icon";
import RevealSection from "./components/reveal-section";
import ScrollProgress from "./components/scroll-progress";
import TrackedLink from "./components/tracked-link";
import { contactInfo } from "./config/contact";
import { siteTheme } from "./config/theme";
import { serviceDetails } from "./data/services";

type IconType = ComponentType<{ className?: string }>;

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

type Stat = {
  title: string;
  value: string;
  icon: IconType;
  href?: string;
  note?: string;
  eventName?: string;
  eventParams?: Record<string, string | number | boolean>;
};

type ProofStat = {
  title: string;
  value: string;
  animation: ProofAnimationName;
  note?: string;
};

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Founders Message", href: "/founders-message" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

const highlightStats: Stat[] = [
  { title: "Open Hours", value: "24/7 Premium Care", icon: Clock3 },
  {
    title: "Visit Timings",
    value: "10:00 AM - 6:00 PM(Mon-Fri)",
    icon: CalendarClock,
    note: "During weekends and festival times we are closed for human visits.",
  },
  { title: "Facility Open Hours", value: "7:00 AM - 10:00 PM (Mon - Sun)", icon: Clock3 },
  { title: "Customer Call Time", value: "9:00 AM - 9:00 PM", icon: Phone },
  {
    title: "Golden Tulip Colony",
    value: "Hyderabad, TS",
    icon: MapPin,
  },
  {
    title: "Call Us",
    value: contactInfo.callNumber,
    icon: Phone,
    href: contactInfo.dialerUrl,
    eventName: "call_click",
    eventParams: { button_location: "stats_strip_phone", phone_number: contactInfo.callNumber },
  },
];

const validationNumbers: ProofStat[] = [
  {
    title: "Avg Google Rating",
    value: "4.7+",
    animation: "paw-emblem",
    note: "Based on verified pet-parent reviews",
  },
  {
    title: "Pets Served",
    value: "2000+",
    animation: "animal-lover",
    note: "Across boarding, grooming, clinic, and training",
  },
  {
    title: "Premium Services",
    value: "6+",
    animation: "pet-love",
    note: "One trusted destination for complete pet care",
  },
  {
    title: "Care Monitoring",
    value: "24/7",
    animation: "insurance",
    note: "Round-the-clock supervision for comfort and safety",
  },
];

const features: Feature[] = [
  {
    title: "We Love Dogs",
    description: "Our founders and team are lifelong animal lovers committed every day.",
    icon: Heart,
  },
  {
    title: "Transparency",
    description: "Receive regular photo updates and videos during every stay.",
    icon: ShieldCheck,
  },
  {
    title: "Climate Controlled",
    description: "Carefully monitored indoor systems support all-weather comfort.",
    icon: Sparkles,
  },
  {
    title: "Teamwork",
    description: "A dedicated team works in harmony to provide 24/7 care.",
    icon: Users,
  },
];

const testimonials = [
  {
    quote:
      "Every service felt like pure luxury for our puppy. We got updates and peace of mind throughout.",
    author: "Sunita Paul",
    location: "Jubilee Pet Parent",
    initials: "SP",
  },
  {
    quote:
      "The grooming salon is world-class. My husky looked and felt amazing after one session.",
    author: "Shreyas Deshmukh",
    location: "Banjara Hills",
    initials: "SD",
  },
  {
    quote:
      "Professional trainers with real empathy. Our pup is calmer, happier, and much better behaved.",
    author: "Himabindu Noskanti",
    location: "Labrador Mom",
    initials: "HN",
  },
  {
    quote:
      "Zuzu has been with Waggy Tales since he was 30 days old. From vaccinations and essentials to grooming and swimming, they have cared for him at every stage. Their support during his tick fever gave us total confidence.",
    author: "Aastha Misra",
    location: "Pet Parent",
    initials: "AM",
  },
  {
    quote:
      "We have used their services for 2 years for both my pets, Dude and Titli. They are well cared for, fed healthy food, and always come back happy. Daily updates while we are away give us real peace of mind.",
    author: "Ananya Goswami",
    location: "Pet Parent",
    initials: "AG",
  },
  {
    quote:
      "I recently boarded my retriever Shiro for 12 days. The process was smooth, and I received regular videos and updates, including mealtime checks. The gentle social introduction with other dogs was handled beautifully.",
    author: "Ahana Biswas",
    location: "Shiro's Parent",
    initials: "AB",
  },
];

const faqs = [
  {
    question: "Do you provide daily updates during home stay?",
    answer:
      "Yes. We share regular photo and video updates so you can stay connected with your pet throughout their stay.",
  },
  {
    question: "Can I schedule a facility tour before booking?",
    answer:
      "Absolutely. You can visit our space during visiting hours and meet the care team before confirming your booking.",
  },
  {
    question: "Do you support special diets and medications?",
    answer:
      "Yes. We follow your feeding instructions and medication schedule with written checklists for each pet.",
  },
];

export default function Home() {
  return (
    <div className="wt-page" id="top">
      <ScrollProgress />
      <header className="wt-nav-wrap">
        <div className="wt-nav-atmosphere" aria-hidden="true" />
        <div className="wt-shell wt-nav-shell">
          <nav className="wt-nav">
            <div className="wt-brand-wrap">
              <Image
                src="/waggy.jpg"
                alt={`${siteTheme.brand.name} logo`}
                width={44}
                height={44}
                className="wt-brand-logo"
                priority
              />
              <p className="wt-brand">{siteTheme.brand.name}</p>
            </div>
            <ul className="wt-nav-links" aria-label="Primary">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="wt-nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <TrackedLink
              className="wt-btn wt-btn-primary"
              href={contactInfo.dialerUrl}
              aria-label={`Call ${contactInfo.callNumber}`}
              eventName="call_click"
              eventParams={{ button_location: "navbar", phone_number: contactInfo.callNumber }}
            >
              Book Now
            </TrackedLink>
          </nav>
        </div>
      </header>

      <main>
        <RevealSection className="wt-shell wt-hero">
          <article className="wt-hero-content">
            <p className="wt-pill">Hyderabad&apos;s #1 pet home-stay</p>
            <h1 className="wt-paw-heading wt-paw-heading-center">
              Your pet, <span>our priority</span>
            </h1>
            <p className="wt-copy">
              Tail-wagging gateways for pets in Hyderabad. From home-stay joy to expressive
              grooming, your furry family is treated like our own.
            </p>
            <div className="wt-action-row">
              <TrackedLink
                className="wt-btn wt-btn-primary"
                href={contactInfo.dialerUrl}
                aria-label={`Call ${contactInfo.callNumber}`}
                eventName="call_click"
                eventParams={{ button_location: "hero", phone_number: contactInfo.callNumber }}
              >
                Book Now
              </TrackedLink>
              <TrackedLink
                className="wt-btn wt-btn-secondary"
                href={contactInfo.registerNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="register_click"
                eventParams={{ button_location: "hero_register" }}
              >
                Register Now
              </TrackedLink>
            </div>
          </article>

          <article className="wt-hero-card">
            <HeroSlideshow />
            <div className="wt-trust-card">
              <span className="wt-trust-label">Achievement</span>
              <strong>2000+</strong>
              <p>Happy pet parents</p>
            </div>
          </article>
        </RevealSection>

        <RevealSection className="wt-proof-wrap" delay={0.055}>
          <div className="wt-shell">
            <div className="wt-section-head wt-proof-head">
              <p className="wt-kicker">Trust in Numbers</p>
              <h2 className="wt-paw-heading wt-paw-heading-center">Proof Pet Parents Can Feel</h2>
              <p className="wt-copy wt-section-subcopy">
                Real outcomes that reflect the consistency, care quality, and trust families place in
                us.
              </p>
            </div>

            <div className="wt-proof-grid">
              {validationNumbers.map((item) => (
                <article key={item.title} className="wt-proof-card">
                  <ProofAnimationIcon name={item.animation} className="wt-proof-animation" />
                  <p className="wt-proof-value">{item.value}</p>
                  <h3>{item.title}</h3>
                  {item.note ? <p className="wt-proof-note">{item.note}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="wt-love-bridge" delay={0.058}>
          <div className="wt-shell wt-love-grid">
            <article className="wt-love-copy">
              <p className="wt-kicker">Our Story</p>
              <h2 className="wt-paw-heading">Weaving narratives of love</h2>
              <p className="wt-copy">
                Every wag, cuddle, and playful moment is part of a bigger story. We care for pets
                with warmth, routine, and trust so families feel connected even when they are apart.
              </p>
              <p className="wt-love-quote">
                &quot;For us, pet care is not a service checklist. It is a relationship built day by
                day with love, responsibility, and joy.&quot;
              </p>
            </article>

            <div className="wt-love-visuals">
              <Image
                src="/home-2.webp"
                alt="Dogs enjoying supervised play and companionship"
                width={1200}
                height={800}
                className="wt-love-image wt-love-image-main"
              />
              <Image
                src="/home-3.webp"
                alt="Comfort-focused pet care in a warm environment"
                width={1200}
                height={800}
                className="wt-love-image wt-love-image-side"
              />
            </div>
          </div>
        </RevealSection>

        <RevealSection className="wt-strip" delay={0.05}>
          <div className="wt-shell wt-strip-grid">
            {highlightStats.map((item) => (
              <article key={item.title} className="wt-strip-item">
                <div className="wt-strip-icon-wrap">
                  <item.icon className="wt-icon wt-icon-inline" />
                </div>
                <p className="wt-strip-label">{item.title}</p>
                {item.href ? (
                  <TrackedLink
                    className="wt-strip-value-link"
                    href={item.href}
                    aria-label={`${item.title}: ${item.value}`}
                    eventName={item.eventName ?? "link_click"}
                    eventParams={item.eventParams}
                  >
                    {item.value}
                  </TrackedLink>
                ) : (
                  <strong>{item.value}</strong>
                )}
                {item.note ? <span className="wt-strip-note">{item.note}</span> : null}
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="wt-shell wt-story" id="about" delay={0.08}>
          <div className="wt-story-images">
            <Image
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80"
              alt="Happy pet dog portrait"
              width={1000}
              height={1250}
              className="wt-img-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=1000&q=80"
              alt="Smiling poodle"
              width={1000}
              height={1250}
              className="wt-img-cover"
            />
          </div>
          <article className="wt-story-copy">
            <p className="wt-kicker">Our Story</p>
            <h2 className="wt-paw-heading">Weaving narratives of love</h2>
            <p className="wt-copy">
              Founded by Megha Paul and Manjeet Kumar, M &amp; M Waggy Tales is more than a boarding
              service. We started with one dream: every pet deserves a vacation as wonderful as their
              owners.
            </p>
            <ul className="wt-check-list">
              <li>Cage-free philosophy and socialization in a secure environment.</li>
              <li>Home-like comfort with temperature-controlled zones.</li>
            </ul>
          </article>
        </RevealSection>

        <RevealSection className="wt-services-wrap" id="services" delay={0.1}>
          <div className="wt-shell">
            <div className="wt-section-head">
              <Sparkles className="wt-icon wt-icon-center" />
              <p className="wt-kicker">What We Offer</p>
              <h2 className="wt-paw-heading wt-paw-heading-center">Tailored services for every need</h2>
              <p className="wt-copy wt-section-subcopy">
                From medical support to luxury pampering, our facilities are designed for modern pet
                families.
              </p>
            </div>

            <div className="wt-services-grid">
              {serviceDetails.map((service) => (
                <article key={service.slug} className="wt-service-card">
                  <div className="wt-service-head">
                    <h3>{service.title}</h3>
                    {service.tag ? <span>{service.tag}</span> : null}
                  </div>
                  <p>{service.shortDescription}</p>
                  <Link href={`/services/${service.slug}`} className="wt-service-link">
                    View Details
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="wt-shell wt-why" delay={0.12}>
          <article className="wt-why-intro">
            <h2 className="wt-paw-heading">Why we are the best choice</h2>
            <p className="wt-copy">
              Every detail at {siteTheme.brand.name} is crafted to help pets feel safe, playful, and
              deeply cared for.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1537151672256-6caf2e9f8c95?auto=format&fit=crop&w=1200&q=80"
              alt="Group of friendly dogs"
              width={1200}
              height={800}
              className="wt-img-cover"
            />
          </article>

          <div className="wt-why-right">
            <div className="wt-feature-grid">
              {features.map((feature) => (
                <article key={feature.title} className="wt-feature-card">
                  <feature.icon className="wt-icon wt-icon-inline" />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>

            <article className="wt-care-promise-card">
              <div className="wt-care-promise-badge">
                <ProofAnimationIcon name="cruelty-free" className="wt-care-promise-icon" />
              </div>
              <h3>Cruelty Free and Leash Free</h3>
              <p>
                We follow a cruelty-free, leash-free care philosophy where pets can relax and move
                naturally, just like they do at home. Our team stays constantly attentive to their
                routines, emotions, meals, playtime, rest, and every small need that keeps them happy,
                safe, and stress free.
              </p>
            </article>
          </div>
        </RevealSection>

        <RevealSection className="wt-testimonials-wrap" id="testimonials" delay={0.15}>
          <div className="wt-shell">
            <div className="wt-section-head wt-testimonial-head">
              <h2 className="wt-paw-heading">Happy tails</h2>
              <p className="wt-copy wt-section-subcopy">
                Don&apos;t just take our word for it. Listen to our community.
              </p>
            </div>

            <div className="wt-testimonials-marquee">
              <div className="wt-testimonials-track">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <article key={`${item.author}-${index}`} className="wt-testimonial-card">
                    <div className="wt-review-top">
                      <p className="wt-stars" aria-label="5 star review">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} className="wt-star-icon" />
                        ))}
                      </p>
                      <span className="wt-google-pill">
                        <span className="wt-google-g">G</span>
                        Google Review
                      </span>
                    </div>
                    <p className="wt-quote">
                      <Quote className="wt-quote-mark" />
                      <span>&quot;{item.quote}&quot;</span>
                    </p>
                    <div className="wt-reviewer">
                      <span>{item.initials}</span>
                      <div>
                        <strong>{item.author}</strong>
                        <p>{item.location}</p>
                        <small className="wt-review-source">Verified Google review</small>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="wt-faq-wrap" id="faqs" delay={0.18}>
          <div className="wt-shell">
            <div className="wt-section-head">
              <MessageCircleQuestion className="wt-icon wt-icon-center" />
              <p className="wt-kicker">FAQs</p>
              <h2 className="wt-paw-heading wt-paw-heading-center">Questions pet parents ask most</h2>
            </div>
            <div className="wt-faq-grid">
              {faqs.map((faq) => (
                <article key={faq.question} className="wt-faq-card">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="wt-contact-wrap" id="contact" delay={0.2}>
          <div className="wt-shell wt-contact-grid">
            <article className="wt-contact-card">
              <h2 className="wt-paw-heading">Get in touch</h2>
              <ul>
                <li className="wt-contact-item">
                  <MapPin className="wt-icon wt-icon-inline" />
                  <span>Golden Tulip Colony, Hyderabad, Telangana</span>
                </li>
                <li>
                  <a href={contactInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    Open location in Google Maps
                  </a>
                </li>
                <li className="wt-contact-item">
                  <Mail className="wt-icon wt-icon-inline" />
                  <span>pawfectwaggytales@gmail.com</span>
                </li>
                <li className="wt-contact-item">
                  <Phone className="wt-icon wt-icon-inline" />
                  <span>{contactInfo.callNumber}</span>
                </li>
                <li className="wt-contact-item">
                  <Clock3 className="wt-icon wt-icon-inline" />
                  <span>Facility Open Hours: 7:00 AM - 10:00 PM (Mon - Sun)</span>
                </li>
                <li className="wt-contact-item">
                  <CalendarClock className="wt-icon wt-icon-inline" />
                  <span>Customer Call Time: 9:00 AM - 9:00 PM</span>
                </li>
                <li>During weekends and festival times we are closed for human visits.</li>
              </ul>
              <form className="wt-contact-form" action="#">
                <label htmlFor="email" className="wt-sr-only">
                  Email
                </label>
                <input id="email" type="email" placeholder="Your email" />
                <button type="submit" className="wt-btn wt-btn-primary">
                  Send inquiry
                </button>
              </form>
            </article>
            <article className="wt-map-card" aria-label="Location map preview">
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Google Maps location"
              >
                <iframe
                  title="M & M Waggy Tales location map"
                  src={contactInfo.googleMapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="wt-map-embed"
                />
              </a>
            </article>
          </div>
        </RevealSection>

        <RevealSection className="wt-final-cta" delay={0.22}>
          <div className="wt-shell wt-final-cta-inner">
            <Heart className="wt-icon wt-icon-center" />
            <h2>Ready to give your pet a joyful staycation?</h2>
            <p className="wt-copy">
              Reserve your slot today and let our care team craft a safe, playful, and luxurious
              experience.
            </p>
            <button className="wt-btn wt-btn-primary" type="button">
              Book a Meet &amp; Greet
            </button>
          </div>
        </RevealSection>
      </main>

      <footer className="wt-footer">
        <div className="wt-shell wt-footer-grid">
          <article>
            <p className="wt-brand">{siteTheme.brand.name}</p>
            <p>
              Creating happy memories and a safe haven for your furry friends in the heart of
              Hyderabad.
            </p>
          </article>
          <article>
            <h3>Quick Links</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms &amp; Conditions</li>
              <li>Contact Us</li>
            </ul>
          </article>
          <article>
            <h3>Newsletter</h3>
            <div className="wt-newsletter">
              <input type="email" placeholder="Your email" aria-label="Newsletter email" />
              <button className="wt-btn wt-btn-primary" type="button">
                Join
              </button>
            </div>
          </article>
        </div>
        <p className="wt-copyright">(c) 2026 {siteTheme.brand.name}. All rights reserved.</p>
      </footer>

      <TrackedLink
        className="wt-whatsapp-fab"
        href={contactInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        eventName="whatsapp_click"
        eventParams={{ button_location: "floating_button" }}
      >
        <Image src="/whatsapp.svg" alt="" width={16} height={16} className="wt-whatsapp-icon" />
      </TrackedLink>
    </div>
  );
}
