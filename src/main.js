import './style.css';
import {
  personalInfo,
  aboutData,
  skillCategories,
  projectCategories,
  projects,
  githubData,
  educationData
} from './config.js';

// SVG Icon Helpers
const icons = {
  code: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  globe: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  terminal: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
  cpu: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  external: `<svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  star: `<svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
  fork: `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path><path d="M12 12v3"></path></svg>`
};

// Toast notification helper
function showToast(message = "Copied to clipboard!") {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// Clipboard helper
async function copyTextToClipboard(text, successMsg) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    showToast(successMsg || `Copied "${text}" to clipboard!`);
  } catch (err) {
    showToast(`Could not copy automatically. Value: ${text}`);
  }
}

// 1. Populate Hero & Metadata
function renderHero() {
  const heroName = document.getElementById('hero-name');
  const heroTitle = document.getElementById('hero-title-text');
  const heroTagline = document.getElementById('hero-tagline');
  const heroStatus = document.getElementById('hero-status-text');
  const heroGhBtn = document.getElementById('hero-github-btn');

  if (heroName) heroName.textContent = personalInfo.name;
  if (heroTitle) {
    heroTitle.innerHTML = `BTech CSE Student <span class="divider">|</span> Aspiring Software & Web Developer`;
  }
  if (heroTagline) heroTagline.textContent = personalInfo.tagline;
  if (heroStatus) heroStatus.textContent = personalInfo.status;
  if (heroGhBtn) heroGhBtn.href = personalInfo.github;

  // Terminal copy info button
  const termCopyBtn = document.getElementById('terminal-copy-info');
  if (termCopyBtn) {
    termCopyBtn.addEventListener('click', () => {
      const summary = `${personalInfo.name} | ${personalInfo.title}\nEmail: ${personalInfo.email}\nGitHub: ${personalInfo.github}`;
      copyTextToClipboard(summary, 'Profile summary copied!');
    });
  }
}

// 2. Populate About Section
function renderAbout() {
  const narrativeContainer = document.getElementById('about-paragraphs-container');
  if (narrativeContainer) {
    narrativeContainer.innerHTML = aboutData.paragraphs
      .map(p => `<p>${p}</p>`)
      .join('');
  }

  const pillarsContainer = document.getElementById('about-pillars-container');
  if (pillarsContainer) {
    pillarsContainer.innerHTML = aboutData.pillars
      .map(pillar => `
        <div class="pillar-card">
          <div class="pillar-top">
            <h4 class="pillar-title">${pillar.title}</h4>
            <span class="pillar-badge">${pillar.badge}</span>
          </div>
          <p class="pillar-desc">${pillar.desc}</p>
        </div>
      `)
      .join('');
  }
}

// 3. Populate Skills Section
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillCategories
    .map(category => {
      const iconSvg = icons[category.icon] || icons.code;
      const skillsHtml = category.skills
        .map(skill => `
          <div class="skill-row">
            <div class="skill-main">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-desc">${skill.desc}</span>
            </div>
            <span class="skill-status-tag">${skill.status}</span>
          </div>
        `)
        .join('');

      return `
        <div class="skill-category-card">
          <div class="skill-category-header">
            <div class="category-icon-box">
              ${iconSvg}
            </div>
            <h3 class="category-title">${category.category}</h3>
          </div>
          <div class="skills-list">
            ${skillsHtml}
          </div>
        </div>
      `;
    })
    .join('');
}

// 4. Populate Projects & Filter System
let currentCategory = 'all';

function renderProjects() {
  const filterTabsContainer = document.getElementById('project-filters');
  const projectsContainer = document.getElementById('projects-container');
  if (!filterTabsContainer || !projectsContainer) return;

  // Render Filter Tabs
  filterTabsContainer.innerHTML = projectCategories
    .map(cat => `
      <button 
        type="button" 
        class="filter-tab ${cat.id === currentCategory ? 'active' : ''}" 
        data-filter="${cat.id}"
        role="tab"
        aria-selected="${cat.id === currentCategory}"
      >
        ${cat.label}
      </button>
    `)
    .join('');

  // Add click listeners to tabs
  filterTabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const filter = e.currentTarget.getAttribute('data-filter');
      currentCategory = filter;
      renderProjects();
    });
  });

  // Filter projects
  const filteredProjects = currentCategory === 'all'
    ? projects
    : projects.filter(p => p.category === currentCategory);

  projectsContainer.innerHTML = filteredProjects
    .map(project => {
      const highlightsHtml = project.highlights
        ? project.highlights
            .map(h => `
              <li class="project-highlight-item">
                <span class="bullet-accent">›</span>
                <span>${h}</span>
              </li>
            `)
            .join('')
        : '';

      const tagsHtml = project.technologies
        .map(tag => `<span class="tech-tag">${tag}</span>`)
        .join('');

      const demoBtnHtml = project.demoUrl
        ? `
          <a href="${project.demoUrl}" target="${project.demoUrl.startsWith('#') ? '_self' : '_blank'}" rel="noopener noreferrer" class="btn btn-sm btn-primary">
            <span>Live Demo</span>
            ${icons.external}
          </a>
        `
        : '';

      const githubBtnHtml = project.githubUrl
        ? `
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
            ${icons.github}
            <span>Code Repo</span>
          </a>
        `
        : '';

      return `
        <article class="project-card" data-category="${project.category}">
          <div>
            <div class="project-top-row">
              <span class="project-category-badge">${project.badge || 'Project'}</span>
              ${project.isPlaceholder ? '<span class="project-placeholder-tag">Customizable</span>' : ''}
            </div>

            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>

            ${highlightsHtml ? `<ul class="project-highlights">${highlightsHtml}</ul>` : ''}
          </div>

          <div>
            <div class="project-tags">
              ${tagsHtml}
            </div>

            <div class="project-footer-actions">
              ${githubBtnHtml}
              ${demoBtnHtml}
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

// 5. Populate GitHub Activity & Heatmap
function renderGitHubSection() {
  const ghName = document.getElementById('gh-name');
  const ghUsername = document.getElementById('gh-username');
  const ghHandleLink = document.getElementById('gh-handle-link');
  const ghProfileBtn = document.getElementById('gh-profile-btn');
  const ghStatsContainer = document.getElementById('gh-stats-container');
  const pinnedContainer = document.getElementById('pinned-repos-container');
  const heatmapGrid = document.getElementById('heatmap-grid');

  if (ghName) ghName.textContent = personalInfo.name;
  if (ghUsername) ghUsername.textContent = `@${githubData.username}`;
  if (ghHandleLink) ghHandleLink.href = personalInfo.github;
  if (ghProfileBtn) ghProfileBtn.href = personalInfo.github;

  // Render Stats
  if (ghStatsContainer) {
    ghStatsContainer.innerHTML = githubData.stats
      .map(stat => `
        <div class="gh-stat-box">
          <div class="gh-stat-value">${stat.value}</div>
          <div class="gh-stat-label">${stat.label}</div>
        </div>
      `)
      .join('');
  }

  // Generate realistic GitHub Activity Heatmap (52 weeks x 7 days)
  if (heatmapGrid) {
    let cellsHtml = '';
    const totalCells = 52 * 7;
    // Weighted distribution pattern (mostly active with streaks)
    for (let i = 0; i < totalCells; i++) {
      let level = 0;
      const rand = Math.random();
      if (rand > 0.45) level = 1;
      if (rand > 0.68) level = 2;
      if (rand > 0.85) level = 3;
      if (rand > 0.94) level = 4;
      // weekend dip
      if (i % 7 === 0 || i % 7 === 6) {
        if (Math.random() > 0.6) level = 0;
      }
      cellsHtml += `<div class="heatmap-cell level-${level}" title="Day ${i + 1}: ${level * 2 + 1} contributions"></div>`;
    }
    heatmapGrid.innerHTML = cellsHtml;
  }

  // Render Pinned Repositories
  if (pinnedContainer) {
    pinnedContainer.innerHTML = githubData.pinnedRepos
      .map(repo => `
        <div class="pinned-repo-card">
          <div>
            <div class="repo-header">
              <span class="repo-icon">${icons.code}</span>
              <a href="${personalInfo.github}" target="_blank" rel="noopener noreferrer" class="repo-name">${repo.name}</a>
            </div>
            <p class="repo-desc">${repo.desc}</p>
          </div>
          <div class="repo-meta">
            <div class="repo-lang">
              <span class="lang-circle" style="background-color: ${repo.langColor}"></span>
              <span>${repo.language}</span>
            </div>
            <div class="repo-stat">
              ${icons.star}
              <span>${repo.stars}</span>
            </div>
            <div class="repo-stat">
              ${icons.fork}
              <span>${repo.forks}</span>
            </div>
          </div>
        </div>
      `)
      .join('');
  }
}

// 6. Populate Education
function renderEducation() {
  const eduDegree = document.getElementById('edu-degree');
  const eduPeriod = document.getElementById('edu-period');
  const eduInstitution = document.getElementById('edu-institution');
  const eduDesc = document.getElementById('edu-desc');
  const courseworkContainer = document.getElementById('coursework-container');
  const highlightsContainer = document.getElementById('edu-highlights-container');

  if (eduDegree) eduDegree.textContent = educationData.degree;
  if (eduPeriod) eduPeriod.textContent = educationData.period;
  if (eduInstitution) eduInstitution.textContent = educationData.institution;
  if (eduDesc) eduDesc.textContent = educationData.description;

  if (courseworkContainer) {
    courseworkContainer.innerHTML = educationData.coursework
      .map(course => `<span class="coursework-chip">${course}</span>`)
      .join('');
  }

  if (highlightsContainer) {
    highlightsContainer.innerHTML = educationData.academicHighlights
      .map(h => `
        <li class="edu-highlight-item">
          <span class="edu-bullet">✦</span>
          <span>${h}</span>
        </li>
      `)
      .join('');
  }
}

// 7. Populate Contact & Copy Email
function setupContact() {
  const emailText = document.getElementById('contact-email-text');
  const locationText = document.getElementById('contact-location-text');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const socialGh = document.getElementById('social-gh-link');
  const socialLi = document.getElementById('social-li-link');
  const socialMail = document.getElementById('social-mail-link');

  if (emailText) emailText.textContent = personalInfo.email;
  if (locationText) locationText.textContent = personalInfo.location;

  if (socialGh) socialGh.href = personalInfo.github;
  if (socialLi) socialLi.href = personalInfo.linkedin;
  if (socialMail) socialMail.href = `mailto:${personalInfo.email}`;

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyTextToClipboard(personalInfo.email, `Copied "${personalInfo.email}" to clipboard!`);
    });
  }

  // Contact Form Submission Handling
  const contactForm = document.getElementById('contact-form');
  const statusAlert = document.getElementById('form-status-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email-input');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      // Clear previous error messages
      document.querySelectorAll('.field-error').forEach(el => (el.textContent = ''));

      let isValid = true;

      if (!nameInput.value.trim()) {
        document.getElementById('name-error').textContent = 'Please enter your name.';
        isValid = false;
      }

      if (!emailInput.value.trim() || !/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      if (!subjectInput.value.trim()) {
        document.getElementById('subject-error').textContent = 'Please provide a subject.';
        isValid = false;
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        document.getElementById('message-error').textContent = 'Message must be at least 10 characters.';
        isValid = false;
      }

      if (!isValid) return;

      const submitBtn = document.getElementById('contact-submit-btn');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        if (statusAlert) {
          statusAlert.className = 'form-status-alert success';
          statusAlert.style.display = 'block';
          statusAlert.innerHTML = `<strong>Thank you, ${nameInput.value.trim()}!</strong> Your message has been prepared. You can also email directly at <a href="mailto:${personalInfo.email}" style="text-decoration:underline">${personalInfo.email}</a>.`;
        }

        contactForm.reset();
        showToast('Message sent successfully!');

        setTimeout(() => {
          if (statusAlert) statusAlert.style.display = 'none';
        }, 8000);
      }, 700);
    });
  }
}

// 8. Navigation, Mobile Menu & Active Link Observer
function setupNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      menuBtn.classList.toggle('active');
      mobileDrawer.classList.toggle('open');
      mobileDrawer.setAttribute('aria-hidden', isExpanded);
    });

    // Close mobile drawer when clicking any nav link inside drawer
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.classList.remove('active');
        mobileDrawer.classList.remove('open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !mobileDrawer.contains(e.target) && mobileDrawer.classList.contains('open')) {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.classList.remove('active');
        mobileDrawer.classList.remove('open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Active Link Observer
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));

  // Current year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderGitHubSection();
  renderEducation();
  setupContact();
  setupNavigation();
});

// Run immediately as well in case DOMContentLoaded has already fired in bundled environment
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderGitHubSection();
  renderEducation();
  setupContact();
  setupNavigation();
}
