const committeePhotos = [
  "471157659_122110132574662721_1167304852770550736_n.jpg",
  "502704144_122135499560662721_6175933737862356110_n.jpg",
  "471253261_122110133108662721_3897760377308883014_n.jpg",
  "471256631_122110132742662721_7420912429361589027_n.jpg",
  "471258662_122110133048662721_3573318472672543862_n.jpg",
  "471259436_122110133192662721_8770243998665933375_n.jpg",
  "471287937_122110133006662721_8897969707097073330_n.jpg",
  "471315548_122110132784662721_7906277836566558176_n.jpg",
  "471334590_122110133234662721_4524760657034606524_n.jpg",
  "471386681_122110132964662721_8891261924574495716_n.jpg",
  "471472025_122110133150662721_2035429095919131396_n.jpg",
  "471545047_122110132700662721_8913308712412011988_n.jpg",
  "471574375_122110132658662721_9022441313712698728_n.jpg",
  "502903777_122135499608662721_4643958249202063315_n.jpg",
];

const leadershipRoles = [
  "Honorable Board of trustees",
  "President",
  "Organizing Secretary",
  "Honorable Mentor",
  "Joint Treasurer",
  "Office Secretary",
  "Treasurer",
  "Honorable Mentor",
  "Joint Office Secretary",
  "Joint Secretary",
  "Joint Organizing Secretary",
  "Honorable Adviser",
  "Honorable Adviser",
  "General Secretary",
  
];

const committeeNames = [
  "MS. LABIBA ABDULLAH",
  "S.M. ABDULLAH RAFI",
  "MD. SHIFUL ISLAM SHOUROV",
  "MD. RASHEL HAWLADER",
  "ANZUMAN ARA MEEM",
  "S M ROKIBUL ISLAM",
  "MD. TANZIM SAHADAT",
  "FURHATUN NOOR",
  "SUDIPA GHOSH",
  "MAHDIN ISLAM MUKIM",
  "SABINA YEASMIN MITU",
  "DR. MD. HARUN AR RASHID",
  "LT. COL. MIR MOTAHAR HASAN",
  "ASHRAFUL ISLAM ZAHID",
];

const committeeMembers = committeePhotos.map((file, index) => ({
  name: committeeNames[index] ?? "Committee Member",
  role: leadershipRoles[index % leadershipRoles.length],
  photo: `../public/Committe%20Member/${file}`,
}));

const galleryImages = [
  "471202066_122110951832662721_9071568280706333118_n.jpg",
  "471530035_122110718678662721_569264120829719115_n.jpg",
  "472784214_122112950360662721_6961842529487322316_n.jpg",
  "472862248_122112950972662721_8457094300053030682_n.jpg",
  "472969604_122112950618662721_7684317674469394999_n.jpg",
  "472985172_122112950534662721_3839372209632601264_n.jpg",
  "472999451_122112951020662721_3493260249717806808_n.jpg",
  "473012386_122112951872662721_4166739569503330314_n.jpg",
  "473055790_122112952736662721_741967393755199186_n.jpg",
  "473066330_122112951782662721_504225023347226823_n.jpg",
  "473092652_122112950402662721_4761775715848157474_n.jpg",
  "473111284_122112952652662721_618047530376126899_n.jpg",
  "473316455_122112951572662721_2320914392424221766_n.jpg",
  "473671780_122113406708662721_6606667356168796699_n.jpg",
  "485700840_122125207688662721_7374686881155469679_n.jpg",
  "485734401_122125207022662721_5379521178012180217_n.jpg",
  "485742454_122125207064662721_5015409056349947063_n.jpg",
  "485804537_122125207448662721_8456203797292841131_n.jpg",
  "485879151_122125207520662721_1364181157724368051_n.jpg",
  "485897139_122125207556662721_1925163085894002394_n.jpg",
  "485974079_122125207772662721_5304948711535318622_n.jpg",
  "486509389_122125207952662721_869443332210851083_n.jpg",
].map((file, index) => ({
  src: `../public/gallery/${file}`,
  caption: `Community highlight ${String(index + 1).padStart(2, "0")}`,
}));

const programs = [
  {
    title: "Health & Nutrition Outreach",
    summary: "Mobile clinics delivering primary checkups and nutrition packs to underserved districts.",
    poster: "../public/program/480700997_122120615492662721_6068042123690854491_n.jpg",
  },
  {
    title: "Eid Relief Drive",
    summary: "Seasonal campaign distributing essential food baskets and clothing across Dhaka neighborhoods.",
    poster: "../public/program/EID.jpg",
  },
  {
    title: "March for Gaza Solidarity",
    summary: "Campus-wide solidarity march amplifying humanitarian advocacy and fundraising.",
    poster: "../public/program/march_for_GAZA.jpg",
  },
  {
    title: "Winter Warmth Program",
    summary: "Blanket and warm clothing distribution supporting northern districts through student volunteers.",
    poster: "../public/program/winter.jpg",
  },
];

const lightbox = {
  root: document.querySelector(".lightbox"),
  img: document.querySelector(".lightbox img"),
  caption: document.querySelector(".lightbox-caption"),
  closeBtn: document.querySelector(".lightbox-close"),
  activeIndex: 0,
};

function renderCommittee() {
  const grid = document.getElementById("committee-grid");
  if (!grid) return;
  if (!committeeMembers.length) {
    grid.innerHTML = "<p>No committee portraits available.</p>";
    return;
  }

  grid.innerHTML = committeeMembers
    .map(
      (member) => `
        <article class="reveal">
          <img src="${member.photo}" alt="${member.name}" loading="lazy" />
          <h3>${member.name}</h3>
          <p>${member.role}</p>
          <a class="view-pill" href="${member.photo}" target="_blank" rel="noreferrer">View</a>
        </article>
      `,
    )
    .join("");
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  if (!galleryImages.length) {
    grid.innerHTML = "<p>No gallery images available.</p>";
    return;
  }

  grid.innerHTML = galleryImages
    .map(
      (image, index) => `
        <button class="reveal" data-index="${index}">
          <img src="${image.src}" alt="${image.caption}" loading="lazy" />
        </button>
      `,
    )
    .join("");

  grid.addEventListener("click", (event) => {
    const target = event.target.closest("button[data-index]");
    if (!target) return;
    const idx = Number(target.dataset.index);
    openLightbox(idx);
  });
}

function renderPrograms() {
  const list = document.getElementById("program-timeline");
  if (!list) return;
  if (!programs.length) {
    list.innerHTML = "<p>No program posters available.</p>";
    return;
  }

  list.innerHTML = programs
    .map(
      (program, index) => `
        <article class="program-card reveal">
          <img src="${program.poster}" alt="${program.title}" loading="lazy" />
          <div>
            <p class="eyebrow">Initiative ${String(index + 1).padStart(2, "0")}</p>
            <h3>${program.title}</h3>
            <p>${program.summary}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function openLightbox(index) {
  const item = galleryImages[index];
  if (!item) return;
  lightbox.activeIndex = index;
  lightbox.img.src = item.src;
  lightbox.img.alt = item.caption;
  lightbox.caption.textContent = item.caption;
  lightbox.root.classList.add("active");
  lightbox.root.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.root.classList.remove("active");
  lightbox.root.setAttribute("aria-hidden", "true");
}

function navigateLightbox(direction) {
  const total = galleryImages.length;
  lightbox.activeIndex = (lightbox.activeIndex + direction + total) % total;
  openLightbox(lightbox.activeIndex);
}

function initLightboxControls() {
  lightbox.closeBtn?.addEventListener("click", closeLightbox);
  lightbox.root?.addEventListener("click", (event) => {
    if (event.target === lightbox.root) closeLightbox();
  });
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dir = btn.dataset.dir === "next" ? 1 : -1;
      navigateLightbox(dir);
    });
  });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.root?.classList.contains("active")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") navigateLightbox(1);
    if (event.key === "ArrowLeft") navigateLightbox(-1);
  });
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function initCounters() {
  const counters = document.querySelectorAll(".stat");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        const finalValue = Number(target.dataset.count || 0);
        const duration = 1600;
        const startTime = performance.now();
        const animate = (time) => {
          const progress = Math.min((time - startTime) / duration, 1);
          target.textContent = Math.floor(progress * finalValue).toString();
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.unobserve(target);
      });
    },
    { threshold: 1 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initThemeToggle() {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored === "dark") {
    root.setAttribute("data-theme", "dark");
  }

  const updateLabel = () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.querySelector(".toggle-label").textContent = isDark ? "Dark " : "Light ";
    toggle.querySelector(".toggle-icon i").className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
  };

  updateLabel();

  toggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    updateLabel();
  });
}

function init() {
  renderCommittee();
  renderGallery();
  renderPrograms();
  initLightboxControls();
  initReveal();
  initCounters();
  initThemeToggle();
}

document.addEventListener("DOMContentLoaded", init);
