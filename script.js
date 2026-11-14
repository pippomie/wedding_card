// ---- Populate content from config ----
document.addEventListener("DOMContentLoaded", () => {
  const W = WEDDING;

  // Hero
  document.getElementById("groomName").textContent = W.groom.shortName;
  document.getElementById("brideName").textContent = W.bride.shortName;
  document.getElementById("hashtag").textContent = W.hashtag;
  document.getElementById("dateDisplay").textContent = W.eventDateDisplay;
  document.getElementById("invitationText").textContent = W.invitationText;
  document.getElementById("poem").textContent = W.poem;
  document.getElementById("footerHashtag").textContent = W.hashtag;

  // Venue
  document.getElementById("venueName").textContent = W.venueName;
  document.getElementById("venueAddress").textContent = W.venueAddress;
  document.getElementById("mapEmbed").src = W.googleMapsEmbed;
  document.getElementById("gmapsBtn").href = W.googleMapsLink;
  document.getElementById("wazeBtn").href = W.wazeLink;

  // Schedule
  const scheduleList = document.getElementById("scheduleList");
  W.schedule.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="time">${item.time}</span><span>${item.label}</span>`;
    scheduleList.appendChild(li);
  });

  // Contacts
  const contactsList = document.getElementById("contactsList");
  W.contacts.forEach(c => {
    const div = document.createElement("div");
    div.className = "contact-card";
    div.innerHTML = `
      <strong>${c.name}</strong>
      <small>${c.relation}</small>
      <a class="btn" href="https://wa.me/${c.phone}" target="_blank">WhatsApp</a>
    `;
    contactsList.appendChild(div);
  });

  // RSVP form
  document.getElementById("rsvpForm").src = W.rsvpFormUrl;

  // Music
  const audio = document.getElementById("bgMusic");
  audio.querySelector("source").src = W.musicFile;

  // ---- Countdown ----
  const target = new Date(W.eventDate).getTime();
  const cd = setInterval(() => {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "<p>Alhamdulillah, majlis telah berlangsung 💐</p>";
      clearInterval(cd);
      return;
    }
    document.getElementById("days").textContent    = Math.floor(diff / 86400000);
    document.getElementById("hours").textContent   = Math.floor((diff / 3600000) % 24);
    document.getElementById("minutes").textContent = Math.floor((diff / 60000) % 60);
    document.getElementById("seconds").textContent = Math.floor((diff / 1000) % 60);
  }, 1000);

  // ---- Add to Calendar (.ics download) ----
  document.getElementById("addToCalendar").addEventListener("click", () => {
    const start = new Date(W.eventDate);
    const end = new Date(start.getTime() + 6 * 60 * 60 * 1000); // +6 hours
    const fmt = d => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Wedding//EN",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@wedding`,
      `DTSTAMP:${fmt(new Date())}`,
      `DTSTART:${fmt(start)}`,
      `DTEND:${fmt(end)}`,
      `SUMMARY:Wedding of ${W.groom.shortName} & ${W.bride.shortName}`,
      `LOCATION:${W.venueName}`,
      `DESCRIPTION:${W.hashtag}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding-invitation.ics";
    a.click();
    URL.revokeObjectURL(url);
  });

  // ---- Music toggle ----
  const musicBtn = document.getElementById("musicBtn");
  const musicPrompt = document.getElementById("musicPrompt");

  const tryPlay = () => {
    audio.play().then(() => {
      musicBtn.classList.add("playing");
      musicBtn.textContent = "⏸";
      musicPrompt.style.display = "none";
    }).catch(() => {});
  };

  musicBtn.addEventListener("click", () => {
    if (audio.paused) { tryPlay(); }
    else { audio.pause(); musicBtn.textContent = "🎵"; musicBtn.classList.remove("playing"); }
  });

  musicPrompt.addEventListener("click", tryPlay);

  // ---- Reveal on scroll ----
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.15 });
  document.querySelectorAll(".section, .hero-content").forEach(el => observer.observe(el));
});