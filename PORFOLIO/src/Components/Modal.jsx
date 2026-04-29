export function initModal() {
  const overlay = document.getElementById('videoModal');
  const closeBtn = document.getElementById('modalClose');
  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

export function openModal(title, videoUrl) {
  const overlay = document.getElementById('videoModal');
  const titleEl = document.getElementById('modalTitle');
  const hintEl = document.getElementById('modalVideoHint');
  if (!overlay) return;

  if (titleEl) titleEl.textContent = title;
  if (hintEl) hintEl.textContent = videoUrl;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closeModal() {
  const overlay = document.getElementById('videoModal');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

export function renderModal() {
  return `
    <div class="modal-overlay" id="videoModal">
      <div class="modal-box">
        <div class="modal-title" id="modalTitle"></div>
        <div class="modal-video-placeholder">
          <span style="font-size:2rem">▶</span>
          <span>Remplacez par votre iframe YouTube / Vimeo</span>
          <span class="modal-video-hint" id="modalVideoHint"></span>
        </div>
        <span class="modal-close" id="modalClose">✕ Fermer</span>
      </div>
    </div>
  `;
}