import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "./Project";

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const btnProjects = document.getElementById("btn-projects");
    const btnContact = document.getElementById("btn-contact");

    if (btnProjects) {
      btnProjects.addEventListener("click", () => navigate("/projects"));
    }

    if (btnContact) {
      btnContact.addEventListener("click", () => navigate("/contact"));
    }

    return () => {
      if (btnProjects) {
        btnProjects.removeEventListener("click", () => navigate("/projects"));
      }
      if (btnContact) {
        btnContact.removeEventListener("click", () => navigate("/contact"));
      }
    };
  }, [navigate]);

  return (
    <div className="Home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">

          <div className="hero-tag">Stage en développement de jeux vidéos</div>

          <h1 className="hero-name">
            ETHAN <br />
            <span className="hollow">FAURE</span>
          </h1>

          <div className="hero-title">
            <span>// </span>Développeur Informatique, option Jeu Vidéo
          </div>

          <p className="hero-desc">
            Créatif, dynamique et sociable, j'apporte une énergie positive dans
            les projets auxquels je participe. J'apprécie le travail en équipe et
            les échanges constructifs.
          </p>

          <div className="hero-buttons">
            <button id="btn-projects" className="btn btn-primary">
              ▶ Voir mes projets
            </button>

            <button id="btn-contact" className="btn btn-outline">
              Me contacter
            </button>
          </div>

        </div>

        <div className="hero-right">
          <div className="avatar-frame">
            <div className="avatar-inner">EF</div>
          </div>
        </div>
      </section>

      {/* MON HISTOIRE */}
      <section className="section">
        <h2>Mon Histoire</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", lineHeight: "1.6", marginTop: "1.5rem", opacity: 0.9 }}>
          <p>Depuis l’âge de 3 ans, les jeux vidéo font partie de ma vie. J’ai commencé sur Wii avec des titres comme Mario Kart Wii, Super Smash Bros. Brawl ou encore Super Monkey Ball: Banana Blitz. Très tôt, j’ai développé une vraie curiosité pour cet univers.</p>
          <p>En grandissant, j’ai exploré énormément de jeux, au point de passer des heures à découvrir tout ce que proposait le Google Play Store. Certains jeux m’ont particulièrement marqué, comme Super Mario Galaxy 2, puis plus tard sur PlayStation avec Horizon Zero Dawn, Unravel Two, Sid Meier's Civilization VI, Slime Rancher, Destiny 2, Genshin Impact, Enter the Gungeon ou encore Elden Ring. J’ai aussi passé plusieurs années sur Rocket League, en parallèle de nombreux jeux indépendants.</p>
          <p>Avec le temps, une évidence s’est imposée : les jeux vidéo n’étaient pas seulement une passion, mais ce que je voulais faire de ma vie. Pourtant, le chemin n’a pas été simple. Pendant longtemps, je voulais créer des jeux sans avoir ni le matériel ni les compétences pour le faire. J’ai donc continué à jouer, en découvrant un maximum d’expériences, avec l’idée que cela me servirait un jour.</p>
          <p>J’ai essayé de m’orienter vers le développement avec un bac STI2D, puis un bachelor MMI, mais je me suis rapidement rendu compte que le développement web ne me correspondait pas. J’ai donc fait le choix de me réorienter vers une formation spécialisée dans le développement de jeux vidéo.</p>
          <p>Le vrai déclic est arrivé lorsque j’ai commencé à apprendre le C++ : dès la première semaine, j’ai su que c’était ce que je voulais faire sur le long terme. Malgré les difficultés rencontrées pour accéder à l’apprentissage, je n’ai jamais douté de mon objectif.</p>
          <p>Aujourd’hui, je suis en deuxième année de bachelor en développement informatique, spécialisé dans le jeu vidéo. Mon objectif est de travailler dans un studio indépendant, puis, à terme, de créer mon propre studio afin de développer des jeux aboutis, en allant bien au-delà des projets courts sur lesquels je travaille actuellement.</p>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-row">
        <div className="stat">
          <div className="stat-num">6+</div>
          <div className="stat-label">Projets réalisés</div>
        </div>

        <div className="stat">
          <div className="stat-num">3</div>
          <div className="stat-label">Moteurs maîtrisés</div>
        </div>

        <div className="stat">
          <div className="stat-num">4</div>
          <div className="stat-label">Ans d'expérience</div>
        </div>

        </section>

      {/* PARCOURS / FORMATION & EXPERIENCES */}
      <section className="section">
        <h2>Formation</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h3>Bachelor Développeur Informatique, option Jeu Vidéo</h3>
            <p>Gaming Campus (Lyon) — 2024 - Actuellement</p>
          </div>

          <div className="timeline-item">
            <h3>BUT MMI</h3>
            <p>IUT Clermont-Auvergne (Vichy) — 2023 - 2024</p>
          </div>

          <div className="timeline-item">
            <h3>BAC STI2D Option SIN</h3>
            <p>Lycée H. Carnot (Roanne) — 2020 - 2023</p>
          </div>
        </div>

        <h2 style={{ marginTop: "2rem" }}>Expérience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h3>Game Jams</h3>
            <p>2024 - 2026</p>
            <p>Participation à plusieurs Game Jams dans lesquels j'ai pu développer mes compétences techniques. Collaboration avec d'autres étudiants sur des projets de création de jeux entièrement sur Unity.</p>
          </div>

          <div className="timeline-item">
            <h3>Equipier McDonald's</h3>
            <p>(3 mois) 2025</p>
            <p>Rigueur et respect des procédures, gestion du temps et des priorités, communication claire, adaptation rapide, gestion du stress, sens de la qualité et résolution de problèmes au quotidien.</p>
          </div>

          <div className="timeline-item">
            <h3>JPO / visites guidées</h3>
            <p>2024 - 2026</p>
            <p>Accueil, visites, présentation des formations.</p>
          </div>

          <div className="timeline-item">
            <h3>Participation évènements caritatifs</h3>
            <p>2024 - 2026</p>
            <p>Support technique & logistique en environnement live : setup matériel, coordination d'équipe et gestion d'événements en temps réel (Gamer for Pet's, Téléthon Gaming).</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Compétences</h2>

        <div className="skills-categories">

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ marginBottom: "1rem", opacity: 0.9 }}>Programmation & Web</h3>
            <div className="skills-grid">
              <span>C++</span> <span>Langage C</span> <span>Python</span> <span>HTML</span> <span>CSS</span> <span>PHP</span> <span>MySQL</span> <span>Bases de Données</span> <span>Programmation Orientée Objet</span> <span>Fonctions C++</span> <span>Développement Web</span>
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ marginBottom: "1rem", opacity: 0.9 }}>Jeux Vidéo & Moteurs</h3>
            <div className="skills-grid">
              <span>Unity</span> <span>Architecture de Moteur</span> <span>Développement de jeux vidéo</span> <span>Jeux Multijoueurs</span>
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ marginBottom: "1rem", opacity: 0.9 }}>Design & Audiovisuel</h3>
            <div className="skills-grid">
              <span>Design UX/UI</span> <span>Design Graphique</span> <span>Blender (Modélisation 3D)</span> <span>Figma</span> <span>Photographie</span> <span>DaVinci Resolve</span> <span>Adobe Photoshop</span> <span>Adobe Illustrator</span> <span>Adobe InDesign</span>
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ marginBottom: "1rem", opacity: 0.9 }}>Outils & Gestion</h3>
            <div className="skills-grid">
              <span>Git / GitHub</span> <span>Gestion de Projet</span> <span>GanttProject</span> <span>WordPress</span> <span>Bootstrap</span> <span>Microsoft Word</span> <span>Microsoft PowerPoint</span> <span>Tableau Dynamique</span> <span>Documentation Technique</span>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: "1rem", opacity: 0.9 }}>Matériel & IT</h3>
            <div className="skills-grid">
              <span>Installation de Matériel</span> <span>Réparation d'Ordinateurs</span>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projets en vedette</h2>

        <div className="carousel-container" style={{ position: "relative", maxWidth: "800px", margin: "0 auto", overflow: "hidden" }}>

          <div 
            className="carousel-track" 
            style={{ 
              display: "flex", 
              gap: "0", 
              transition: "transform 0.4s ease-in-out", 
              transform: `translateX(-${currentSlide * 100}%)` 
            }}
          >
            {projects.map((p, index) => (
              <div 
                key={index} 
                className="carousel-slide" 
                style={{ 
                  flex: "0 0 100%", 
                  margin: "0", 
                  padding: "1rem", 
                  boxSizing: "border-box" 
                }}
              >

                <div className="project-card" style={{ margin: "0 auto", background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "8px", overflow: "hidden" }}>
                  <div className="project-header" style={{ padding: "1rem", borderTop: `4px solid ${p.color}`, borderBottom: "1px solid var(--color-border)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", fontSize: "0.85rem", opacity: 0.8 }}>
                      <span>{p.engine}</span>
                      <span>{p.year}</span>
                    </div>
                    <div className="project-title" style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.25rem" }}>{p.title}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--color-primary)" }}>{p.genre}</div>
                  </div>

                  <div className="project-body" style={{ padding: "1rem" }}>
                    <p style={{ marginBottom: "1rem", lineHeight: "1.5" }}>{p.desc}</p>

                    <div className="skills-tags" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                      {p.tags.map((t, i) => (
                        <span key={i} className="skill-tag" style={{ background: "rgba(255,255,255,0.1)", padding: "0.25rem 0.6rem", borderRadius: "4px", fontSize: "0.8rem" }}>{t}</span>
                      ))}
                    </div>

                    <button 
                      className="btn btn-primary" 
                      onClick={() => window.open(p.videoSrc, "_blank")}
                      style={{ width: "100%" }}
                    >
                      ▶ Voir la démo
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <button 
            onClick={prevSlide} 
            style={{ position: "absolute", top: "50%", left: "0", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", color: "white", border: "none", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer", zIndex: 10 }}
          >
            &#10094;
          </button>

          <button 
            onClick={nextSlide} 
            style={{ position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", color: "white", border: "none", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer", zIndex: 10 }}
          >
            &#10095;
          </button>

          {/* Points de navigation */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "none",
                  background: currentSlide === idx ? "var(--color-primary)" : "var(--color-border)",
                  cursor: "pointer",
                  transition: "background 0.3s"
                }}
              />
            ))}
          </div>

        </div>

      </section>

    </div>
  );
}