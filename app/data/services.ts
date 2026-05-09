export type ServiceDetail = {
  slug: string;
  title: string;
  tag?: string;
  shortDescription: string;
  seoDescription: string;
  whatsappMessage: string;
  heroImage: string;
  heroAlt: string;
  highlights: string[];
  details: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "doggy-home-stay",
    title: "Dog Homestay",
    tag: "Popular",
    shortDescription:
      "Cage-free, personalized care in a loving home environment where your pet is never alone.",
    seoDescription:
      "Premium doggy home stay in Hyderabad with AC rooms, 24x7 on-premise caretakers, and CCTV monitoring for complete safety.",
    whatsappMessage:
      "Hi M & M Waggy Tales, I want to book Doggy Home Stay. Please share availability, pricing, and required details.",
    heroImage: "/thumbnails/thumb-boarding.webp",
    heroAlt: "Comfortable dog home stay room",
    highlights: [
      "AC rooms with comfortable bedding and regular sanitization",
      "Caretakers stay on premises 24*7 for active supervision",
      "CC TV monitored zones for enhanced safety",
      "Daily meal, walk, and rest routines tailored per pet",
    ],
    details: [
      "Our doggy home stay is designed like a family space instead of a kennel. Pets enjoy social time, supervised play, and quiet rest periods through the day.",
      "We follow your feeding schedule, medicine instructions, and behavior notes so your pet experiences continuity and comfort during every stay.",
    ],
  },
  {
    slug: "pet-boarding",
    title: "Pet Boarding",
    tag: "Premium",
    shortDescription:
      "Comfort-first supervised boarding with structured routines, social play, and restful stay zones.",
    seoDescription:
      "Premium pet boarding in Hyderabad with monitored care, feeding routines, and secure overnight comfort for dogs.",
    whatsappMessage:
      "Hi M & M Waggy Tales, I want to book Pet Boarding. Please share availability, stay packages, and check-in process.",
    heroImage: "/thumbnails/thumb-boarding.webp",
    heroAlt: "Premium pet boarding area for dogs",
    highlights: [
      "Secure and supervised overnight boarding",
      "Routine-based feeding, walks, and rest cycles",
      "Daily wellness checks and update sharing",
      "Comfortable stay zones with hygiene-first protocols",
    ],
    details: [
      "Our pet boarding experience is designed for safety, comfort, and consistency, so pets can settle in with minimum stress.",
      "We follow personalized care notes for food, medication, and behavior, and keep parents informed throughout the stay.",
    ],
  },
  {
    slug: "pet-spa-salon",
    title: "Pet Spa & Salon",
    shortDescription: "Luxurious bathing and gentle grooming sessions designed for comfort.",
    seoDescription:
      "Professional pet spa and salon service in Hyderabad for coat care, de-shedding, and stress-free grooming.",
    whatsappMessage:
      "Hi M & M Waggy Tales, I want to book Pet Spa & Salon for my pet. Please share available slots and pricing.",
    heroImage: "/thumbnails/thumb-grooming.webp",
    heroAlt: "Dog getting professional grooming",
    highlights: [
      "Breed-sensitive grooming plans",
      "Skin-safe products and hygiene protocols",
      "Nail trimming, coat conditioning, and blow dry",
      "Low-stress handling by trained groomers",
    ],
    details: [
      "Our grooming team combines style and wellness to keep your pet clean, comfortable, and confident.",
      "Sessions are paced to reduce stress and include coat checks so we can flag potential skin or hygiene concerns early.",
    ],
  },
  {
    slug: "vet-clinic",
    title: "Vet Clinic",
    shortDescription: "Comprehensive care and wellness checkups to keep every companion healthy.",
    seoDescription:
      "Trusted vet clinic support for vaccination, routine checkups, and preventive care for pets in Hyderabad.",
    whatsappMessage:
      "Hi M & M Waggy Tales, I need a Vet Clinic appointment. Please share consultation timings and process.",
    heroImage: "/thumbnails/thumb-vet.webp",
    heroAlt: "Veterinarian checking a dog",
    highlights: [
      "Routine checkups and preventive screenings",
      "Vaccination planning and health records",
      "Early symptom detection and guidance",
      "Integrated support with boarding and grooming teams",
    ],
    details: [
      "Our veterinary support helps pet parents stay proactive with preventive care, timely vaccinations, and wellness follow-ups.",
      "Care notes are coordinated with our boarding and grooming teams so each pet receives consistent, informed handling.",
    ],
  },
  {
    slug: "pet-store",
    title: "Pet Store",
    shortDescription: "Premium food and accessories curated for active pets.",
    seoDescription:
      "Pet essentials store with curated nutrition, accessories, and wellness products for dogs and cats.",
    whatsappMessage:
      "Hi M & M Waggy Tales, I want details about products in your Pet Store. Please help with recommendations.",
    heroImage: "/thumbnails/thumb-store.webp",
    heroAlt: "Pet food and accessories display",
    highlights: [
      "Curated food options for different age groups",
      "Everyday accessories and enrichment items",
      "Nutrition-led product recommendations",
      "Quality-first selection from trusted brands",
    ],
    details: [
      "Our store focuses on practical, high-quality essentials that support long-term pet health and comfort.",
      "We help parents select food, toys, and accessories based on breed, age, activity level, and dietary needs.",
    ],
  },
  {
    slug: "swimming-pool",
    title: "Swimming Pool",
    shortDescription: "Therapeutic and fun hydro sessions for joint health and joy.",
    seoDescription:
      "Pet swimming sessions for controlled exercise, cooling, and joint-friendly movement in Hyderabad.",
    whatsappMessage:
      "Hi M & M Waggy Tales, I want to book a Swimming Pool session for my pet. Please share timing and charges.",
    heroImage: "/thumbnails/thumb-pool.webp",
    heroAlt: "Dog swimming in a controlled pool session",
    highlights: [
      "Guided swim sessions with trained handlers",
      "Controlled exercise with safety protocols",
      "Supportive hydro activity for active breeds",
      "Clean, monitored pool environment",
    ],
    details: [
      "Swimming is a great way for pets to stay active while reducing stress on joints and improving confidence in water.",
      "Each session is supervised and paced according to stamina, temperament, and prior swimming experience.",
    ],
  },
  {
    slug: "training",
    title: "Training",
    shortDescription: "Professional behavior training to develop confidence and social skills.",
    seoDescription:
      "Structured pet training in Hyderabad for obedience, behavior improvement, and confidence building.",
    whatsappMessage:
      "Hi M & M Waggy Tales, I am interested in Training for my pet. Please share training plans and fees.",
    heroImage: "/thumbnails/thumb-training.webp",
    heroAlt: "Dog training session with handler",
    highlights: [
      "Obedience and behavior correction modules",
      "Positive reinforcement framework",
      "Social confidence and leash discipline",
      "Parent guidance for at-home consistency",
    ],
    details: [
      "Our training plans are built around clear routines and positive reinforcement, helping pets learn calmly and effectively.",
      "Parents receive practical follow-up instructions to reinforce commands and maintain progress at home.",
    ],
  },
  {
    slug: "pet-party",
    title: "Pet Party",
    tag: "New",
    shortDescription:
      "Celebrate birthdays and milestones with a safe, playful, and photo-ready party setup for pets.",
    seoDescription:
      "Pet party hosting in Hyderabad with curated themes, supervised play, and celebration-friendly spaces for dogs.",
    whatsappMessage:
      "Hi M & M Waggy Tales, I want to plan a Pet Party. Please share theme options, packages, and available dates.",
    heroImage: "/thumbnails/thumb-party.webp",
    heroAlt: "Dog birthday party celebration setup",
    highlights: [
      "Theme-based decoration with pet-safe setup",
      "Supervised group play and social activities",
      "Photo-friendly corners for memories",
      "Flexible party packages for birthdays and milestones",
    ],
    details: [
      "Our pet party experience helps you celebrate your companion's special moments in a secure and joyful environment.",
      "From curated decor to supervised play time, we make celebrations fun while keeping pet comfort and safety first.",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
