// ============================================
// EDIT EVERYTHING HERE. Save, refresh, done.
// ============================================

const WEDDING = {
  // --- Couple ---
  bride: {
    name: "Nurin Izzati binti Mohd Murad",
    shortName: "Nurin"
  },
  groom: {
    name: "Ahmad Idris bin Mohd Razman",
    shortName: "Idris"
  },
  hashtag: "#NurInIdrisHeart",

  // --- Parents (optional, shown in invitation text) ---
  brideParents: "Mohd Murad bin ... & ... binti ...",
  groomParents: "Mohd Razman bin Mahmood & Nur Umairah binti Zamani",

  // --- Date & Time ---
  // Format: YYYY-MM-DDTHH:mm:ss  (24-hour, local MY time)
  eventDate: "2026-07-28T11:30:00",
  eventDateDisplay: "Ahad, 28 Julai 2026",

  // --- Venue ---
  venueName: "Ballroom 1, Bangi Avenue Convention Center",
  venueAddress: "Bangi Avenue Convention Center, Bandar Baru Bangi, Selangor",
  // Paste from Google Maps > Share > Embed a map > copy the src="..." URL
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5!2d101.7!3d2.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBangi+Avenue+Convention+Center!5e0!3m2!1sen!2smy!4v1700000000000",
  // Waze deep link — use https://www.waze.com/live-map/directions?to=ll.LAT,LNG
  wazeLink: "https://waze.com/ul?ll=2.95,101.7&navigate=yes",
  googleMapsLink: "https://maps.google.com/?q=Bangi+Avenue+Convention+Center",

  // --- Schedule ---
  schedule: [
    { time: "11:30 pagi", label: "Ketibaan Tetamu" },
    { time: "1:00 petang", label: "Sesi Bergambar" },
    { time: "2:00 petang", label: "Ketibaan Raja Sehari" },
    { time: "5:00 petang", label: "Majlis Bersurai" }
  ],

  // --- Contacts (WhatsApp / phone) ---
  contacts: [
    { name: "Zarina", relation: "Adik Pengantin", phone: "60123456789" },
    { name: "Anas",   relation: "Abang Pengantin", phone: "60198765432" }
  ],

  // --- RSVP Form (Google Forms embed URL) ---
  // See step 5 below for how to get this
  rsvpFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-REPLACE-ME/viewform?embedded=true",

  // --- Music ---
  musicFile: "assets/song.mp3",

  // --- Poem / doa (optional) ---
  poem: `Tenang air di muara sungai,
Tempat berteduh si burung nuri;
Hasrat di hati sudah tercapai,
Mengharap restu di majlis kami.`,

  invitationText: "Dengan penuh kesyukuran, kami dengan setulus hati ingin menjemput ke majlis perkahwinan anakanda kami yang dikasihi dengan pilihan hatinya."
};