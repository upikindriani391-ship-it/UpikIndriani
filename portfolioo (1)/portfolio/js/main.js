/* ============================================================
   main.js — Portfolio Interactivity
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
          // Right-angle routing (circuit style)
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

/* ── RENDER PROJECTS ── */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  portfolioData.projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;

    const imgHtml = `
      <div class="project-img-placeholder">
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
      <div class="project-body">
        <div class="project-tags">${tagsHtml}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
      </div>`;

    grid.appendChild(card);
  });
}

/* ── RENDER SKILLS ── */
function renderSkills() {
  const wrapper = document.getElementById('skillsWrapper');
  if (!wrapper) return;

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
  if (!timeline) return;

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
  if (!info) return;
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
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
      label: 'LinkedIn',
      value: 'Lihat Profil →',
      href: c.linkedin
    }
  ];

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'contact-item reveal';
    const valueHtml = item.href
      ? `<a href="${item.href}" target="_blank" class="contact-item-value" style="color:var(--accent-dim)">${item.value}</a>`
      : `<p class="contact-item-value">${item.value}</p>`;
    div.innerHTML = `
      <div class="contact-icon">${item.icon}</div>
      <div>
        <p class="contact-item-label">${item.label}</p>
        ${valueHtml}
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
      note.textContent = '✓ Pesan terkirim! Saya akan segera menghubungi Anda.';
      note.style.color = 'var(--accent-dim)';
      form.reset();
      btn.textContent = 'Kirim Pesan';
      btn.disabled = false;
    }, 1200);
  });
}
