const whatsappNumber = "919705241131";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const contactInfo = {
  callNumber: "09705241131",
  dialerUrl: "tel:09705241131",
  whatsappUrl: buildWhatsAppUrl("Hi M & M Waggy Tales, I want to know more."),
  registerNowUrl: "https://pettleapp.com/booknow/fc0db379-e032-5954-00ac-a00e6eba44b7",
  googleMapsUrl: "https://maps.app.goo.gl/kMudCZpQU24WpRqr9",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?output=embed&q=M+%26+M+Waggy+Tales,+Golden+Tulip+Colony,+Hyderabad,+Telangana&z=17",
} as const;
