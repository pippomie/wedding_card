// ============================================
// EDIT EVERYTHING HERE. Save, refresh, done.
// ============================================

const WEDDING = {
  // --- Couple ---
  bride: {
    name: "Raihana Husna binti Nasir",
    shortName: "Raihana"
  },
  groom: {
    name: "Muhamad Fahmie bin Shahrulzahadie",
    shortName: "Fahmie"
  },
  hashtag: "#RaihanaXFahmie",

  // --- Parents (optional, shown in invitation text) ---
  brideParents: "Nasir bin Abd Rahman & Roslina binti Abdul Hamid",
  groomParents: "Shahrulzahadie bin Noor din & Norzaihan binti Daud",

  // --- Date & Time ---
  // Format: YYYY-MM-DDTHH:mm:ss  (24-hour, local MY time)
  eventDate: "2027-03-13T11:00:00",
  eventDateDisplay: "Sabtu, 13 Mac 2027",

  // --- Venue ---
  venueName: "73C, Taman Kodiang",
  venueAddress: "06100, Kodiang, Kedah",
  // Paste from Google Maps > Share > Embed a map > copy the src="..." URL
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1725.8382617054951!2d100.32069586893344!3d6.402383187256153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ca300230c3c15%3A0xbb0989800b9934f6!2sTaman%20Kodiang!5e0!3m2!1sen!2smy!4v1794672566549!5m2!1sen!2smy",
  // Waze deep link — use https://www.waze.com/live-map/directions?to=ll.LAT,LNG
  wazeLink: "https://waze.com/ul?ll=6.4024,100.3207&navigate=yes",
  googleMapsLink: "https://maps.app.goo.gl/mjtjzrLNmAQMFYf67",

  // --- Schedule ---
  schedule: [
    { time: "11:00 pagi", label: "Ketibaan Tetamu" },
    { time: "1:00 petang", label: "Sesi Bergambar" },
    { time: "2:00 petang", label: "Ketibaan Raja Sehari" },
    { time: "5:00 petang", label: "Majlis Bersurai" }
  ],

  // --- Contacts (WhatsApp / phone) ---
  contacts: [
    { name: "Hakim", relation: "Abang Pengantin", phone: "601135339412" },
    { name: "Hanif",   relation: "Abang Pengantin", phone: "60165774943" }
  ],

  // --- RSVP Form (Google Forms embed URL) ---
  // See step 5 below for how to get this
  rsvpFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfJH6tIH8gQNA8VcRzhxhp-2yg1jKoESpggdZ6qm8KcRKg6eg/viewform?embedded=true",

  // --- Music ---
  musicFile: "assets/music.aac",

  // --- Poem / doa (optional) ---
  poem: `Tenang air di muara sungai,
Tempat berteduh si burung nuri;
Hasrat di hati sudah tercapai,
Mengharap restu di majlis kami.`,

  invitationText: "Dengan penuh kesyukuran, kami dengan setulus hati ingin menjemput ke majlis perkahwinan anakanda kami yang dikasihi dengan pilihan hatinya."
};