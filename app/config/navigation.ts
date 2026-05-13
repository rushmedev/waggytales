import { serviceDetails } from "../data/services";

export type NavItem = {
  label: string;
  href: string;
};

export const homePrimaryNavItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Founders Message", href: "/founders-message" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

export const mobileMenuItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Founders Message", href: "/founders-message" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/#contact" },
];

export const serviceSubmenuItems: NavItem[] = serviceDetails.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));
