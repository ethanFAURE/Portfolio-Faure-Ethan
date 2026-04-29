import { skills } from '../data/skills.js';

export function initSkillsCloud() {
  const container = document.getElementById('skillsCloud');
  if (!container) return;

  container.innerHTML = skills.map(skill => {
    const size = 0.75 + (skill.level / 100) * 0.6;
    return `
      <div class="skill-pill" style="font-size:${size}rem" title="${skill.level}%">
        ${skill.name}
        <span class="skill-level">${skill.level}%</span>
      </div>
    `;
  }).join('');
}