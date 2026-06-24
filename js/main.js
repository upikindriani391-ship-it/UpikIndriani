/* ============================================================
   main.js — Portfolio Interactivity (Updated for Real Images)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCircuitCanvas();
  renderProjects();
  renderSkills();
  renderExperience();
  renderContact();
  initScrollReveal();
  initSkillBars();
  initContactForm();
  initHamburger();
});

/* ── NAVBAR ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ── HAMBURGER MENU ── */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  
  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

/* ── CIRCUIT CANVAS ANIMATION ── */
function initCircuitCanvas() {
  const canvas = document.getElementById('circuitCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const nodes = [];
  const NODE_COUNT = 28;

  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2.5 + 1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 180, 216, ${0.5 - dist / 320})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          // Right-angle routing (circuit style layout)
          ctx.lineTo(nodes[i].x, nodes[j].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 180, 216, 0.7)';
      ctx.fill();
    });

    // Move nodes
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
    });

    requestAnimationFrame(draw);
  }
  draw();
}

/* ── RENDER PROJECTS (SINKRON DENGAN GAMBAR DATA.JS) ── */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !portfolioData || !portfolioData.projects) return;

  grid.innerHTML = ''; // Membersihkan grid bawaan template sebelum render data asli

  portfolioData.projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.overflow = 'hidden';

    // MEMANGGIL FOTO ASLI: Jika ada properti image, pasang tag img, jika kosong pakai fallback icon SVG
    const imgHtml = p.image 
      ? `<div class="project-img-container" style="width:100%; height:200px; overflow:hidden; border-bottom:2px solid var(--accent-cyan, #00b4d8);">
           <img src="${p.image}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover; display:block;">
         </div>`
      : `<div class="project-img-placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <path d="M8 21h8M12 17v4"/>
            <circle cx="7" cy="10" r="1.5"/>
            <path d="M10 10h7M10 7h4"/>
          </svg>
         </div>`;

    const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

    card.innerHTML = `
      ${imgHtml}
      <div class="project-body" style="padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div class="project-tags" style="margin-bottom: 0.75rem;">${tagsHtml}</div>
          <h3 class="project-title" style="margin-top: 0.5rem; font-size: 1.25rem; line-height: 1.4;">${p.title}</h3>
          <p class="project-desc" style="margin-top: 0.5rem; font-size: 0.95rem; line-height: 1.5; color: var(--text-muted);">${p.description}</p>
        </div>
      </div>`;

    grid.appendChild(card);
  });
}

/* ── RENDER SKILLS ── */
function renderSkills() {
  const wrapper = document.getElementById('skillsWrapper');
  if (!wrapper || !portfolioData || !portfolioData.skills) return;

  wrapper.innerHTML = '';

  portfolioData.skills.forEach((group, i) => {
    const div = document.createElement('div');
    div.className = 'skill-group reveal';
    div.style.transitionDelay = `${i * 0.1}s`;

    const itemsHtml = group.items.map(item => `
      <div class="skill-item">
        <div class="skill-label">
          <span>${item.name}</span>
          <span class="skill-pct">${item.level}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-level="${item.level}"></div>
        </div>
      </div>`).join('');

    div.innerHTML = `
      <div class="skill-group-title">${group.category}</div>
      ${itemsHtml}`;

    wrapper.appendChild(div);
  });
}

/* ── RENDER EXPERIENCE ── */
function renderExperience() {
  const timeline = document.getElementById('timeline');
  if (!timeline || !portfolioData || !portfolioData.experience) return;

  timeline.innerHTML = '';

  portfolioData.experience.forEach((exp, i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.style.transitionDelay = `${i * 0.1}s`;
    item.innerHTML = `
      <div class="timeline-dot${exp.active ? ' active' : ''}"></div>
      <p class="timeline-period">${exp.period}</p>
      <h3 class="timeline-role">${exp.role}</h3>
      <p class="timeline-company">${exp.company}</p>
      <p class="timeline-desc">${exp.description}</p>`;
    timeline.appendChild(item);
  });
}

/* ── RENDER CONTACT ── */
function renderContact() {
  const info = document.getElementById('contactInfo');
  if (!info || !portfolioData || !portfolioData.contact) return;
  
  info.innerHTML = '';
  const c = portfolioData.contact;

  const items = [
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      label: 'Email',
      value: c.email
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.38 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
      label: 'Telepon',
      value: c.phone
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      label: 'Lokasi',
      value: c.location
    }
  ];

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'contact-item reveal';
    div.innerHTML = `
      <div class="contact-icon">${item.icon}</div>
      <div>
        <p class="contact-item-label">${item.label}</p>
        <p class="contact-item-value">${item.value}</p>
      </div>`;
    info.appendChild(div);
  });
}

/* ── SCROLL REVEAL ── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── SKILL BARS ── */
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-group').forEach(g => observer.observe(g));
}

/* ── CONTACT FORM ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Mengirim...';
    btn.disabled = true;

    setTimeout(() => {
      if (note) {
        note.textContent = '✓ Pesan terkirim! Saya akan segera menghubungi Anda.';
        note.style.color = 'var(--accent-dim, #00b4d8)';
      } else {
        alert('✓ Pesan terkirim! Saya akan segera menghubungi Anda.');
      }
      form.reset();
      btn.textContent = 'Kirim Pesan';
      btn.disabled = false;
    }, 1200);
  });
}
