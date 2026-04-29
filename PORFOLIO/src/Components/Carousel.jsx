import Project from "../Pages/Project.jsx"
import { openModal } from './modal.jsx';

let current = 0;

export function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (!track || !dots) return;

  renderCarouselItems(track, dots);

  prevBtn?.addEventListener('click', () => {
    current = (current - 1 + projects.length) % projects.length;
    updateCarousel(track, dots);
  });

  nextBtn?.addEventListener('click', () => {
    current = (current + 1) % projects.length;
    updateCarousel(track, dots);
  });
}

function renderCarouselItems(track, dots) {
  track.innerHTML = projects.map((p, i) => `
    <div class="carousel-card ${i === 0 ? 'active' : ''}">
      <div class="carousel-card-accent" style="background:${p.color}"></div>
      <div class="carousel-card-body">
        <div class="carousel-card-meta">
          <span class="carousel-engine">${p.engine}</span>
          <span class="carousel-year">${p.year}</span>
        </div>
        <div class="carousel-card-title">${p.title}</div>
        <div class="carousel-card-genre">${p.genre}</div>
        <p class="carousel-card-desc">${p.desc}</p>
        <div class="carousel-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <button class="btn btn-primary carousel-play-btn" data-title="${p.title}" data-url="${p.videoUrl}">
          ▶ Voir la démo
        </button>
      </div>
    </div>
  `).join('');

  dots.innerHTML = projects.map((_, i) => `
    <span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
  `).join('');

  // Play buttons
  track.querySelectorAll('.carousel-play-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.title, btn.dataset.url));
  });

  // Dots
  dots.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
      current = parseInt(dot.dataset.index);
      updateCarousel(track, dots);
    });
  });
}

function updateCarousel(track, dots) {
  track.querySelectorAll('.carousel-card').forEach((card, i) => {
    card.classList.toggle('active', i === current);
  });
  dots.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });
  track.style.transform = `translateX(-${current * 100}%)`;
}