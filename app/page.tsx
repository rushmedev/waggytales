import Image from "next/image";
import type { ComponentType } from "react";
import {
  CalendarClock,
  Clock3,
  Heart,
  Mail,
  MapPin,
  MessageCircleQuestion,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import RevealSection from "./components/reveal-section";
import ScrollProgress from "./components/scroll-progress";
import { siteTheme } from "./config/theme";

type IconType = ComponentType<{ className?: string }>;

type Service = {
  title: string;
  description: string;
  tag?: string;
};

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

type Stat = {
  title: string;
  value: string;
  icon: IconType;
};

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

const highlightStats: Stat[] = [
  { title: "Open Hours", value: "24/7 Premium Care", icon: Clock3 },
  { title: "Visit Timings", value: "10:00 AM - 6:00 PM(Mon-Fri)", icon: CalendarClock },
  { title: "Facility Open Hours", value: "7:00 AM - 10:00 PM (Mon - Sun)", icon: Clock3 },
  { title: "Customer Call Time", value: "9:00 AM - 9:00 PM", icon: Phone },
  { title: "Golden Tulip Colony", value: "Hyderabad, TS", icon: MapPin },
];

const services: Service[] = [
  {
    title: "Doggy Home Stay",
    description:
      "Cage-free, personalized care in a loving home environment where your pet is never alone.",
    tag: "Popular",
  },
  {
    title: "Pet Spa & Salon",
    description:
      "Luxurious bathing and gentle grooming sessions designed for comfort.",
  },
  {
    title: "Vet Clinic",
    description:
      "Comprehensive care and wellness checkups to keep every companion healthy.",
  },
  {
    title: "Pet Store",
    description: "Premium food and accessories curated for active pets.",
  },
  {
    title: "Swimming Pool",
    description: "Therapeutic and fun hydro sessions for joint health and joy.",
  },
  {
    title: "Training",
    description:
      "Professional behavior training to develop confidence and social skills.",
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

const googleMapsUrl = "https://maps.app.goo.gl/kMudCZpQU24WpRqr9";
const googleMapsEmbedUrl =
  "https://www.google.com/maps?output=embed&q=M+%26+M+Waggy+Tales,+Golden+Tulip+Colony,+Hyderabad,+Telangana&z=17";
const callNumber = "09705241131";
const dialerUrl = `tel:${callNumber}`;
const whatsappUrl = "https://wa.me/919705241131?text=Hi%20M%20%26%20M%20Waggy%20Tales%2C%20I%20want%20to%20know%20more.";
const registerNowUrl = "https://pettleapp.com/booknow/fc0db379-e032-5954-00ac-a00e6eba44b7";

export default function Home() {
  return (
    <div className="wt-page" id="top">
      <ScrollProgress />
      <header className="wt-shell wt-nav-wrap">
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
          <a className="wt-btn wt-btn-primary" href={dialerUrl} aria-label={`Call ${callNumber}`}>
            Book Now
          </a>
        </nav>
      </header>

      <main>
        <RevealSection className="wt-shell wt-hero">
          <article className="wt-hero-content">
            <p className="wt-pill">Hyderabad&apos;s #1 pet home-stay</p>
            <h1>
              Your pet, <span>our priority</span>
            </h1>
            <p className="wt-copy">
              Tail-wagging gateways for pets in Hyderabad. From home-stay joy to expressive grooming,
              your furry family is treated like our own.
            </p>
            <div className="wt-action-row">
              <a className="wt-btn wt-btn-primary" href={dialerUrl} aria-label={`Call ${callNumber}`}>
                Book Now
              </a>
              <a
                className="wt-btn wt-btn-secondary"
                href={registerNowUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </div>
          </article>

          <article className="wt-hero-card">
            <Image
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80"
              alt="Happy golden retriever at daycare"
              width={1200}
              height={825}
              className="wt-img-cover"
              priority
            />
            <div className="wt-trust-card">
              <strong>Trusted by 500+</strong>
              <p>Happy pet parents</p>
            </div>
          </article>
        </RevealSection>

        <RevealSection className="wt-strip" delay={0.05}>
          <div className="wt-shell wt-strip-grid">
            {highlightStats.map((item) => (
              <article key={item.title} className="wt-strip-item">
                <item.icon className="wt-icon wt-icon-inline" />
                <p>{item.title}</p>
                <strong>{item.value}</strong>
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
            <h2>Weaving narratives of love</h2>
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
              <h2>Tailored services for every need</h2>
              <p className="wt-copy wt-section-subcopy">
                From medical support to luxury pampering, our facilities are designed for modern pet
                families.
              </p>
            </div>

            <div className="wt-services-grid">
              {services.map((service) => (
                <article key={service.title} className="wt-service-card">
                  <div className="wt-service-head">
                    <h3>{service.title}</h3>
                    {service.tag ? <span>{service.tag}</span> : null}
                  </div>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="wt-shell wt-why" delay={0.12}>
          <article className="wt-why-intro">
            <h2>Why we are the best choice</h2>
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

          <div className="wt-feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="wt-feature-card">
                <feature.icon className="wt-icon wt-icon-inline" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="wt-testimonials-wrap" id="testimonials" delay={0.15}>
          <div className="wt-shell">
            <div className="wt-section-head wt-testimonial-head">
              <h2>Happy tails</h2>
              <p className="wt-copy wt-section-subcopy">
                Don&apos;t just take our word for it. Listen to our community.
              </p>
            </div>

            <div className="wt-testimonials-grid">
              {testimonials.map((item) => (
                <article key={item.author} className="wt-testimonial-card">
                  <p className="wt-stars" aria-hidden="true">
                    *****
                  </p>
                  <p className="wt-quote">&quot;{item.quote}&quot;</p>
                  <div className="wt-reviewer">
                    <span>{item.initials}</span>
                    <div>
                      <strong>{item.author}</strong>
                      <p>{item.location}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="wt-faq-wrap" id="faqs" delay={0.18}>
          <div className="wt-shell">
            <div className="wt-section-head">
              <MessageCircleQuestion className="wt-icon wt-icon-center" />
              <p className="wt-kicker">FAQs</p>
              <h2>Questions pet parents ask most</h2>
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
              <h2>Get in touch</h2>
              <ul>
                <li className="wt-contact-item">
                  <MapPin className="wt-icon wt-icon-inline" />
                  <span>Golden Tulip Colony, Hyderabad, Telangana</span>
                </li>
                <li>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    Open location in Google Maps
                  </a>
                </li>
                <li className="wt-contact-item">
                  <Mail className="wt-icon wt-icon-inline" />
                  <span>pawfectflow.waggytales@gmail.com</span>
                </li>
                <li className="wt-contact-item">
                  <Phone className="wt-icon wt-icon-inline" />
                  <span>{callNumber}</span>
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
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Google Maps location"
              >
                <iframe
                  title="M & M Waggy Tales location map"
                  src={googleMapsEmbedUrl}
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

      <a
        className="wt-whatsapp-fab"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <Image src="/whatsapp.svg" alt="" width={16} height={16} className="wt-whatsapp-icon" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
