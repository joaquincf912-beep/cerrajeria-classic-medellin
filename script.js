// ==========================================
// CONTROLLER - CERRAJERÍA CLASSIC MEDELLÍN
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const CONFIG = window.CONFIG;
  if (!CONFIG) {
    console.error("Configuration file config.js was not loaded properly.");
    return;
  }

  let selectedService = null;
  let selectedSchedule = null;

  const SVG_ICONS = {
    key: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 40px; height: 40px;"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
    car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 40px; height: 40px;"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-1z"/><circle cx="7" cy="17" r="2"/><circle cx="15" cy="17" r="2"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 40px; height: 40px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    logoLock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 40px; height: 40px; color: var(--primary);"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px; color: var(--secondary);"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; color: var(--primary);"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; color: var(--primary);"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; color: var(--primary);"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px;"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px; vertical-align: middle;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.472 5.357 1.473 5.432 0 9.851-4.388 9.854-9.782.002-2.614-1.015-5.07-2.863-6.92C17.09 2.075 14.625.998 12.012.998c-5.44 0-9.859 4.39-9.863 9.784-.002 2.03.518 3.639 1.491 5.31l-.991 3.62 3.702-.972zm10.165-7.467c-.26-.13-1.534-.757-1.771-.843-.238-.086-.412-.13-.585.13-.173.26-.67.843-.822 1.014-.153.172-.305.19-.565.06-.26-.13-1.096-.404-2.09-1.288-.773-.69-1.294-1.543-1.446-1.802-.152-.26-.016-.4.113-.53.117-.118.26-.3.39-.45.13-.15.172-.26.26-.432.086-.173.043-.324-.022-.453-.065-.13-.585-1.41-.8-.1.932-.218.423-.396.423-.526 0-.23-.1-.39-.17-.52-.07-.13-.58-1.4-.8-1.92z"/></svg>`,
    problem1: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 44px; height: 44px; margin-bottom: 20px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    problem2: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 44px; height: 44px; margin-bottom: 20px;"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zm0 0L15.5 7.5m0 0L18 5m-2.5 2.5L19 4"/><line x1="16" y1="14" x2="22" y2="20"/></svg>`,
    problem3: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 44px; height: 44px; margin-bottom: 20px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  };

  // 1. APPLY BRANDING
  const applyBranding = () => {
    const root = document.documentElement;
    const theme = CONFIG.theme;
    root.style.setProperty("--primary", theme.primaryColor);
    root.style.setProperty("--secondary", theme.secondaryColor);
    root.style.setProperty("--accent", theme.accentColor);
    root.style.setProperty("--bg", theme.backgroundColor);
    root.style.setProperty("--text", theme.textColor);
    root.style.setProperty("--text-muted", theme.textColorMuted);
    root.style.setProperty("--radius", theme.borderRadius);
    root.style.setProperty("--font-heading", `'${theme.fontHeading}', Georgia, serif`);
    root.style.setProperty("--font-body", `'${theme.fontBody}', system-ui, sans-serif`);
  };

  // 2. INJECT CONTENT
  const injectContent = () => {
    const info = CONFIG.info;
    const leads = CONFIG.leads;
    const copy = CONFIG.copy;

    // SVG Icons
    document.getElementById("header-logo-icon").innerHTML = SVG_ICONS.logoLock;
    document.getElementById("footer-logo-icon").innerHTML = SVG_ICONS.logoLock;
    document.getElementById("floating-card-icon").innerHTML = SVG_ICONS.sparkles;
    document.querySelector(".whatsapp-icon-wrapper").innerHTML = SVG_ICONS.whatsapp;

    // Banner Promo
    document.getElementById("promo-text").innerHTML = leads.promoText;

    // Header Logo
    document.getElementById("logo-name").textContent = info.shortName;

    // Google Rating Badge
    const ratingBadge = document.getElementById("google-rating-badge");
    if (ratingBadge) {
      ratingBadge.innerHTML = `
        <span class="rating-score">${info.googleRating}</span>
        <span class="rating-stars">★★★★★</span>
        <span class="rating-count">(${info.googleReviewCount} opiniones en Google)</span>
      `;
    }

    // Hero Section
    document.getElementById("hero-trust-badge").innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" style="width:16px; height:16px; color: var(--secondary); display: inline-block; vertical-align: middle; margin-right: 4px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      ★ 5.0 en Google · Cerrajería Profesional en Medellín
    `;
    document.getElementById("hero-title").innerHTML = copy.heroTitle;
    document.getElementById("hero-subtitle").textContent = copy.heroSubtitle;
    document.getElementById("hero-cta-main").textContent = leads.ctaMainText;
    document.getElementById("hero-cta-sec").textContent = leads.ctaSecondaryText;

    // Problem Section
    document.getElementById("problem-title").innerHTML = copy.problemTitle;
    document.getElementById("problem-subtitle").textContent = copy.problemSubtitle;

    const problemGrid = document.getElementById("problem-points-grid");
    problemGrid.innerHTML = "";
    copy.problemPoints.forEach((point, index) => {
      const icons = [SVG_ICONS.problem1, SVG_ICONS.problem2, SVG_ICONS.problem3];
      const card = document.createElement("div");
      card.className = "problem-card";
      card.innerHTML = `
        <div class="problem-icon">${icons[index] || SVG_ICONS.logoLock}</div>
        <h3>${point.title}</h3>
        <p>${point.desc}</p>
      `;
      problemGrid.appendChild(card);
    });

    // Methodology
    document.getElementById("methodology-title").innerHTML = copy.methodologyTitle;
    document.getElementById("methodology-subtitle").textContent = copy.methodologySubtitle;

    const stepsGrid = document.getElementById("methodology-steps-grid");
    stepsGrid.innerHTML = "";
    copy.methodologySteps.forEach((step) => {
      const card = document.createElement("div");
      card.className = "step-card";
      card.innerHTML = `
        <span class="step-num">${step.num}</span>
        <h3>${step.title}</h3>
        <p>${step.desc}</p>
      `;
      stepsGrid.appendChild(card);
    });

    // Services
    const servicesGrid = document.getElementById("services-grid");
    servicesGrid.innerHTML = "";
    CONFIG.services.forEach((service) => {
      const card = document.createElement("div");
      card.className = "service-card";
      const featuresLi = service.details.map(detail => `<li>${detail}</li>`).join("");
      const svgIcon = SVG_ICONS[service.icon] || SVG_ICONS.logoLock;
      card.innerHTML = `
        <div class="service-header-row">
          <span class="service-badge">${service.tag}</span>
          <span class="service-price">${service.price}</span>
        </div>
        <div class="service-icon">${svgIcon}</div>
        <h3>${service.name}</h3>
        <span class="service-meta-duration">⏱ Duración: ${service.duration}</span>
        <p>${service.description}</p>
        <ul class="service-features">
          ${featuresLi}
        </ul>
      `;
      servicesGrid.appendChild(card);
    });

    // Testimonials
    const testimonialsGrid = document.getElementById("testimonials-grid");
    testimonialsGrid.innerHTML = "";
    CONFIG.testimonials.forEach((t) => {
      const card = document.createElement("div");
      card.className = "testimonial-card";
      let starsSvg = "";
      for (let i = 0; i < 5; i++) {
        starsSvg += `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px; color: #c9960c; display: inline-block;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
      }
      card.innerHTML = `
        <div class="stars" style="margin-bottom: 20px;">${starsSvg}</div>
        <p>"${t.comment}"</p>
        <div class="testimonial-user">
          <img src="${t.avatar}" alt="${t.name}" class="user-avatar" loading="lazy">
          <div class="user-meta">
            <h4>${t.name}</h4>
            <span>${t.role}</span>
          </div>
        </div>
      `;
      testimonialsGrid.appendChild(card);
    });

    // FAQs
    const faqAccordion = document.getElementById("faq-accordion");
    faqAccordion.innerHTML = "";
    CONFIG.faqs.forEach((faq) => {
      const item = document.createElement("div");
      item.className = "faq-item";
      item.innerHTML = `
        <div class="faq-question">${faq.q}</div>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      `;
      faqAccordion.appendChild(item);
    });

    // Footer
    document.getElementById("footer-logo-name").textContent = info.shortName;
    document.getElementById("footer-copyright-name").textContent = info.name;
    document.getElementById("footer-doctor-title").textContent = info.doctorTitle;
    document.getElementById("footer-address").innerHTML = `${SVG_ICONS.mapPin} <a href="${info.googleMapsLink}" target="_blank" style="color: inherit; text-decoration: none;">${info.address}</a>`;
    document.getElementById("footer-phone").innerHTML = `${SVG_ICONS.phone} <a href="tel:${info.phone}" style="color: inherit; text-decoration: none;">${info.phoneDisplay}</a>`;
    document.getElementById("footer-email").innerHTML = `${SVG_ICONS.mail} <a href="mailto:${info.email}" style="color: inherit; text-decoration: none;">${info.email}</a>`;
    
    // Hours
    const hoursList = document.getElementById("footer-hours-list");
    hoursList.innerHTML = "";
    info.openingHours.forEach((hour) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${hour.day}:</strong> ${hour.hours}`;
      hoursList.appendChild(li);
    });

    // Social Links
    const socialLinks = document.getElementById("footer-social-links");
    socialLinks.innerHTML = `
      <a href="${info.instagram}" target="_blank" aria-label="Instagram">${SVG_ICONS.instagram}</a>
    `;

    // Sticky WhatsApp Text
    const stickyText = document.getElementById("whatsapp-sticky-text");
    if (stickyText) stickyText.textContent = leads.whatsappStickyText;

    // UTM Tracking
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    let utmString = '';
    if (utmSource || utmMedium || utmCampaign) {
      utmString = `\n\n(Ref: ${utmSource || 'direct'} | ${utmMedium || 'none'} | ${utmCampaign || 'none'})`;
    }
    window.utmString = utmString;

    // Generic WhatsApp link
    const defaultWhatsappUrl = `https://api.whatsapp.com/send?phone=${leads.whatsappNumber}&text=${encodeURIComponent(leads.whatsappPreFilledMsg.replace("{service}", "un servicio de cerrajería").replace("{schedule}", "mi zona") + utmString)}`;
    const whatsappLinks = document.querySelectorAll(".whatsapp-link, .floating-wa");
    whatsappLinks.forEach(link => {
      link.href = defaultWhatsappUrl;
      link.target = "_blank";
      link.addEventListener('click', () => {
        if (typeof fbq === 'function') fbq('track', 'Lead');
      });
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.hero-content, .problem-card, .step-card, .service-card, .testimonial-card, .faq-item, .booking-widget').forEach(el => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  };

  // 3. BOOKING WIDGET
  const initBookingWidget = () => {
    const servicesListContainer = document.getElementById("widget-services-list");
    const submitBtn = document.getElementById("booking-submit-btn");
    if (!servicesListContainer || !submitBtn) return;

    servicesListContainer.innerHTML = "";
    CONFIG.services.forEach((service) => {
      const btn = document.createElement("div");
      btn.className = "widget-service-item";
      btn.dataset.id = service.id;
      btn.dataset.name = service.name;
      btn.dataset.price = service.price;
      const svgIcon = SVG_ICONS[service.icon] || SVG_ICONS.logoLock;
      btn.innerHTML = `
        <div class="widget-service-icon">${svgIcon}</div>
        <div class="widget-service-name">${service.name}</div>
        <div class="widget-service-price">${service.price}</div>
      `;
      servicesListContainer.appendChild(btn);
    });

    servicesListContainer.addEventListener("click", (e) => {
      const item = e.target.closest(".widget-service-item");
      if (!item) return;
      servicesListContainer.querySelectorAll(".widget-service-item").forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");
      selectedService = {
        id: item.dataset.id,
        name: item.dataset.name,
        price: item.dataset.price
      };
      document.getElementById("summary-service-name").textContent = selectedService.name;
      document.getElementById("summary-service-price").textContent = selectedService.price;
      document.getElementById("summary-price-row").style.display = "flex";
      checkBookingStatus();
    });

    const scheduleContainer = document.getElementById("widget-schedule-list");
    if (scheduleContainer) {
      scheduleContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".schedule-btn");
        if (!btn) return;
        scheduleContainer.querySelectorAll(".schedule-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedSchedule = btn.dataset.time;
        document.getElementById("summary-schedule-name").textContent = selectedSchedule;
        checkBookingStatus();
      });
    }

    const checkBookingStatus = () => {
      if (selectedService && selectedSchedule) {
        submitBtn.removeAttribute("disabled");
      } else {
        submitBtn.setAttribute("disabled", "true");
      }
    };

    submitBtn.addEventListener("click", () => {
      if (!selectedService || !selectedSchedule) return;
      const leads = CONFIG.leads;
      let msg = leads.whatsappPreFilledMsg;
      msg = msg.replace("{service}", selectedService.name);
      msg = msg.replace("{schedule}", selectedSchedule);
      let utmStr = window.utmString || '';
      const finalWhatsappUrl = `https://api.whatsapp.com/send?phone=${leads.whatsappNumber}&text=${encodeURIComponent(msg + utmStr)}`;
      if (typeof fbq === 'function') fbq('track', 'Lead');
      window.open(finalWhatsappUrl, "_blank");
    });
  };

  // 4. FAQ ACCORDION
  const initFaqAccordion = () => {
    const accordion = document.getElementById("faq-accordion");
    if (!accordion) return;
    accordion.addEventListener("click", (e) => {
      const question = e.target.closest(".faq-question");
      if (!question) return;
      const item = question.parentNode;
      const isActive = item.classList.contains("active");
      accordion.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  };

  // 5. MOBILE MENU
  const initMobileMenu = () => {
    const toggleBtn = document.querySelector(".mobile-menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    if (!toggleBtn || !mobileNav) return;
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("open");
      mobileNav.classList.toggle("open");
    });
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        toggleBtn.classList.remove("open");
        mobileNav.classList.remove("open");
      });
    });
  };

  // 6. SCHEMA INJECTION
  const initSchema = () => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": CONFIG.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };
    const faqScript = document.createElement('script');
    faqScript.type = "application/ld+json";
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);
  };

  // 7. COUNTDOWN (disabled – no fake urgency)
  const initCountdown = () => {};

  // 8. SOCIAL PROOF TOAST
  const initSocialProof = () => {
    const toast = document.getElementById("social-proof-toast");
    if (!toast) return;
    const names = ["Antonieta C.", "Ana Laura I.", "Carlos A.", "María F.", "Juan Pablo R."];
    const services = CONFIG.services.map(s => s.name);
    const times = ["Hace 15 min", "Hace 30 min", "Hoy", "Ayer"];
    const zones = ["El Poblado", "Laureles", "Envigado", "Belén", "Sabaneta"];
    const avatars = [
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&crop=face"
    ];
    const showToast = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const service = services[Math.floor(Math.random() * services.length)];
      const time = times[Math.floor(Math.random() * times.length)];
      const avatar = avatars[Math.floor(Math.random() * avatars.length)];
      const zone = zones[Math.floor(Math.random() * zones.length)];
      document.getElementById("toast-name").textContent = name;
      document.getElementById("toast-service").textContent = `${service} en ${zone}`;
      document.getElementById("toast-time").textContent = time;
      document.getElementById("toast-img").src = avatar;
      toast.style.display = "flex";
      toast.classList.remove("hide");
      setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => { toast.style.display = "none"; }, 500);
      }, 5000);
    };
    setTimeout(() => {
      showToast();
      setInterval(showToast, 25000);
    }, 10000);
  };

  // 9. CALL BUTTON (mobile)
  const initCallButton = () => {
    const callBtns = document.querySelectorAll('.call-btn');
    callBtns.forEach(btn => {
      btn.href = `tel:${CONFIG.info.phone}`;
    });
  };

  // INIT
  applyBranding();
  injectContent();
  initBookingWidget();
  initFaqAccordion();
  initMobileMenu();
  initSchema();
  initCountdown();
  initSocialProof();
  initCallButton();
  document.getElementById("current-year").textContent = new Date().getFullYear();
});
