// --- Data Sources (From your upload) ---
const committeePhotos = [
  "471157659_122110132574662721_1167304852770550736_n.jpg",
  "471574375_122110132658662721_9022441313712698728_n.jpg",
  "471545047_122110132700662721_8913308712412011988_n.jpg",
  "471315548_122110132784662721_7906277836566558176_n.jpg",
  "471256631_122110132742662721_7420912429361589027_n.jpg",
  "502704144_122135499560662721_6175933737862356110_n.jpg",
  "502903777_122135499608662721_4643958249202063315_n.jpg",
  "471253261_122110133108662721_3897760377308883014_n.jpg",
  "471258662_122110133048662721_3573318472672543862_n.jpg",
  "471259436_122110133192662721_8770243998665933375_n.jpg",
  "471287937_122110133006662721_8897969707097073330_n.jpg",
  "471334590_122110133234662721_4524760657034606524_n.jpg",
  "471386681_122110132964662721_8891261924574495716_n.jpg",
  "471472025_122110133150662721_2035429095919131396_n.jpg",
];

const leadershipRoles = [
  "Honorable Board of Trustees",
  "Honorable Adviser",
  "Honorable Adviser",
  "Honorable Mentor",
  "Honorable Mentor",
  "President",
  "General Secretary",
  "Organizing Secretary",
  "Joint Treasurer",
  "Office Secretary",
  "Treasurer",
  "Joint Office Secretary",
  "Joint Secretary",
  "Joint Organizing Secretary",
];

const committeeNames = [
  "MS. LABIBA ABDULLAH",
  "LT. COL. MIR MOTAHAR HASAN",
  "DR. MD. HARUN AR RASHID",
  "FURHATUN NOOR",
  "MD. RASHEL HAWLADER",
  "S.M. ABDULLAH RAFI",
  "ASHRAFUL ISLAM ZAHID",
  "MD. SHIFUL ISLAM SHOUROV",
  "ANZUMAN ARA MEEM",
  "S M ROKIBUL ISLAM",
  "MD. TANZIM SAHADAT",
  "SUDIPA GHOSH",
  "MAHDIN ISLAM MUKIM",
  "SABINA YEASMIN MITU",
];

const committeeMembers = committeePhotos.map((file, index) => ({
  name: committeeNames[index] ?? "Committee Member",
  role: leadershipRoles[index % leadershipRoles.length],
  photo: `public/Committe%20Member/${file}`,
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
  src: `public/gallery/${file}`,
  caption: `Community highlight ${String(index + 1).padStart(2, "0")}`,
}));

const programs = [
  {
    title: "Health & Nutrition Outreach",
    summary:
      "Mobile clinics delivering primary checkups and nutrition packs to underserved districts.",
    poster:
      "public/program/480700997_122120615492662721_6068042123690854491_n.jpg",
  },
  {
    title: "Eid Relief Drive",
    summary:
      "Seasonal campaign distributing essential food baskets and clothing across Dhaka neighborhoods.",
    poster: "public/program/EID.jpg",
  },
  {
    title: "March for Gaza Solidarity",
    summary:
      "Campus-wide solidarity march amplifying humanitarian advocacy and fundraising.",
    poster: "public/program/march_for_GAZA.jpg",
  },
  {
    title: "Winter Warmth Program",
    summary:
      "Blanket and warm clothing distribution supporting northern districts through student volunteers.",
    poster: "public/program/winter.jpg",
  },
];

// --- Rendering Logic ---

function renderCommittee() {
  const grid = document.getElementById("committee-grid");
  if (!grid) return;

  if (!committeeMembers.length) {
    grid.innerHTML = "<p>No committee portraits available.</p>";
    return;
  }

  // Uses object-contain to ensure the full poster is visible
  grid.innerHTML = committeeMembers
    .map(
      (member, index) => `
    <article class="reveal opacity-0 translate-y-4 transition-all duration-700 bg-panel rounded-[1.5rem] overflow-hidden shadow-sm border border-edge hover:shadow-xl hover:-translate-y-1 group" style="transition-delay: ${index * 50}ms">
      <div class="bg-panel-soft aspect-[3/4] relative p-1">
          <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-contain rounded-xl" loading="lazy" />
      </div>
      <div class="p-5 bg-panel border-t border-edge text-center">
        <h3 class="font-bold text-sm text-main truncate">${member.name}</h3>
        <p class="text-[0.7rem] text-toasty uppercase tracking-widest mt-1 font-bold truncate opacity-90">${member.role}</p>
      </div>
    </article>
  `,
    )
    .join("");
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  grid.innerHTML = galleryImages
    .map(
      (image, index) => `
    <button class="reveal opacity-0 scale-95 transition-all duration-700 relative w-full aspect-square rounded-[1.5rem] overflow-hidden group focus:outline-none focus:ring-2 focus:ring-toasty" data-index="${index}" style="transition-delay: ${(index % 5) * 50}ms">
      <img src="${image.src}" alt="${image.caption}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
  `,
    )
    .join("");

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn) openLightbox(Number(btn.dataset.index));
  });
}

function renderPrograms() {
  const list = document.getElementById("program-timeline");
  if (!list) return;

  list.innerHTML = programs
    .map(
      (program, index) => `
    <article class="reveal opacity-0 translate-y-4 transition-all duration-700 bg-panel p-6 md:p-8 rounded-[2rem] border border-edge shadow-sm hover:shadow-lg hover:border-toasty/30 grid md:grid-cols-[220px_1fr] gap-8 items-center group">
      <div class="aspect-video md:aspect-[4/5] md:h-full rounded-2xl overflow-hidden bg-panel-soft border border-edge">
          <img src="${program.poster}" alt="${program.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div>
        <span class="text-xs font-bold uppercase text-toasty tracking-widest block mb-2 opacity-80">Initiative ${String(index + 1).padStart(2, "0")}</span>
        <h3 class="text-2xl font-bold mb-4 text-main">${program.title}</h3>
        <p class="text-muted leading-relaxed">${program.summary}</p>
      </div>
    </article>
  `,
    )
    .join("");
}

// --- Mobile Navigation ---
function initMobileMenu() {
  const btn = document.getElementById("mobile-toggle");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-link");

  if (!btn || !menu) return;

  const toggleMenu = () => {
    const isOpen = !menu.classList.contains("translate-x-full");
    if (isOpen) {
      menu.classList.add("translate-x-full");
      btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      document.body.style.overflow = "";
    } else {
      menu.classList.remove("translate-x-full");
      btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      document.body.style.overflow = "hidden";
    }
  };

  btn.addEventListener("click", toggleMenu);
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("translate-x-full");
      btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      document.body.style.overflow = "";
    });
  });
}

// --- Lightbox ---
const lightbox = {
  el: document.getElementById("lightbox"),
  img: document.getElementById("lightbox-img"),
  caption: document.getElementById("lightbox-caption"),
  close: document.getElementById("lightbox-close"),
  idx: 0,
};

function openLightbox(index) {
  if (!galleryImages[index]) return;
  lightbox.idx = index;
  updateLightbox();
  lightbox.el.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function updateLightbox() {
  const item = galleryImages[lightbox.idx];
  lightbox.img.src = item.src;
  lightbox.caption.textContent = item.caption;
}

function closeLightbox() {
  lightbox.el.classList.add("hidden");
  document.body.style.overflow = "";
}

function initLightbox() {
  if (!lightbox.el) return;

  lightbox.close.addEventListener("click", closeLightbox);
  lightbox.el.addEventListener("click", (e) => {
    if (e.target === lightbox.el) closeLightbox();
  });

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dir = Number(btn.dataset.dir);
      const total = galleryImages.length;
      lightbox.idx = (lightbox.idx + dir + total) % total;
      updateLightbox();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.el.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") {
      const total = galleryImages.length;
      lightbox.idx = (lightbox.idx + 1 + total) % total;
      updateLightbox();
    }
    if (e.key === "ArrowLeft") {
      const total = galleryImages.length;
      lightbox.idx = (lightbox.idx - 1 + total) % total;
      updateLightbox();
    }
  });
}

// --- Animations & Stats ---
function initObservers() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(
            "opacity-0",
            "translate-y-8",
            "scale-95",
            "translate-y-4",
          );
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const count = Number(target.dataset.count);
        const duration = 2000;
        const start = performance.now();
        const animate = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          target.textContent = Math.floor(ease * count);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        statObserver.unobserve(target);
      }
    });
  });
  document.querySelectorAll(".stat").forEach((el) => statObserver.observe(el));
}

// --- Theme Logic ---
function initTheme() {
  const btns = [
    document.getElementById("theme-toggle"),
    document.getElementById("mobile-theme-toggle"),
  ];
  const html = document.documentElement;
  const icons = document.querySelectorAll(".fa-moon");

  // Load preference
  const isDark =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (isDark) html.classList.add("dark");

  // Update icons
  const updateIcons = () => {
    const darkActive = html.classList.contains("dark");
    icons.forEach((icon) => {
      icon.className = darkActive ? "fa-solid fa-sun" : "fa-solid fa-moon";
    });
  };
  updateIcons();

  btns.forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", () => {
      html.classList.toggle("dark");
      localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
      updateIcons();
    });
  });
}

function init() {
  renderCommittee();
  renderGallery();
  renderPrograms();
  initMobileMenu();
  initLightbox();
  initObservers();
  initTheme();
  document.getElementById("year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
