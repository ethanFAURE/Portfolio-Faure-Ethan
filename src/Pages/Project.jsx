import { useState } from 'react';

export const projects = [
  {
    title: "Submit Of The Divin",
    engine: "Faster (Mon Moteur Custom)",
    year: "2024",
    genre: "Rogue Light, RPG, FPS, MultiJoueur",
    durationTeam: "Durée : 3 semaines - 3 personnes",
    mainImage: "/images/submit-main.png",
    desc: "Description du projet Submit Of The Divin.",
    tags: ["C++", "Gameplay", "Design"],
    color: "#ffaa00",
    videoSrc: "/videos/submit-demo.mp4",
    images: [
      { src: "/images/submit-1.png", desc: "Aperçu général des environnements et de l'ambiance du jeu." },
      { src: "/images/submit-2.png", desc: "Mise en avant des combats dynamiques en vue à la première personne." },
      { src: "/images/submit-3.png", desc: "Écran interactif où le joueur gère son équipement et ses compétences." }
    ]
  },
  {
    title: "Arena Shooter",
    engine: "GCE Engine (moteur custom)",
    year: "2026",
    genre: "Action / Shooter / FPS",
    durationTeam: "Durée : 2 semaines - 3 personnes",
    mainImage: "/Images/Arena-Shooter/Combat-Boss-Final.png",
    desc: "Un jeu d'action rapide en 3D.",
    tags: ["C++", "Gameplay", "Creation d'Outils"],
    color: "#ff4d4d",
    videoSrc: "/Videos/Arena-Shooter/demo.mp4",
    images: [
      { src: "/Images/Arena-Shooter/Pile-Drabigus.png", desc: "Choix de l'armement avant d'entrer dans l'arène de combat." },
      { src: "/Images/Arena-Shooter/Map-GamePlay.png", desc: "Vue d'ensemble de la conception de la map pour faire face aux vagues d'ennemis." }
    ]
  },
  {
    title: "PathFinding",
    engine: "Light Engine (moteur custom)",
    year: "2025",
    genre: "Pathfinding",
    durationTeam: "Durée : 2 semaines - 2 personnes",
    mainImage: "/Images/PathFinding/ComonMovement.png",
    desc: "Algorithmes de recherche de chemin.",
    tags: ["C++", "A*", "PFS", "DFS"],
    color: "#4da6ff",
    videoSrc: "/Videos/PathFinding/demo.mp4",
    images: [
      { src: "/Images/PathFinding/Debug.png", desc: "Mode debug affichant les nœuds de la grille qui sont vérifier par l'algorithme." },
      { src: "/Images/PathFinding/Wander.png", desc: "Mode de déplacement suivant les points placer automatiquement." },
      { src: "/Images/PathFinding/CustomMap.png", desc: "Intégration du Pathfinding sur un terrain disposant de barricades personnalisées." },
      { src: "/Images/PathFinding/3D.png", desc: "Évolution de l'algorithme vers une scène projetée en trois dimensions." }
    ]
  },
  {
    title: "Runner",
    engine: "Unity",
    year: "2023",
    genre: "Arcade / Runner",
    durationTeam: "Durée : 2 semaines - 3 personnes",
    mainImage: "/Images/Runner/Presentation.png",
    desc: "Description du projet Runer.",
    tags: ["C#", "Mobile", "Level Design"],
    color: "#33cc33",
    videoSrc: "/Videos/Runner/demo.mp4",
    images: [
      { src: "/Images/Runner/BOOST.png", desc: "Déclenchement des particules d'accélération sur le parcours." },
      { src: "/Images/Runner/BOOST2.png", desc: "Section du niveau accélérée pour un gameplay plus exigeant." },
      { src: "/Images/Runner/BOOST ACTIF.png", desc: "L'effet visuel marquant la pleine vitesse activée du personnage." },
      { src: "/Images/Runner/FPS.png", desc: "Outil de suivi des performances et du framerate du jeu pendant la course." }
    ]
  },
  {
    title: "Projet Fin D'année",
    engine: "Light Engine (moteur Custom)",
    year: "2025",
    genre: "Divers",
    durationTeam: "Durée : 2 semaines - 8 personnes",
    mainImage: "/Images/Projet-Fin-D'année/Tir_coter_droit_avec_beapbop.png",
    desc: "Description de votre projet de fin d'année.",
    tags: ["Programmation", "Architecture", "Travail d'équipe"],
    color: "#9933ff",
    videoSrc: "/Videos/Projet-Fin-D'année/demo.mp4",
    images: [
      { src: "/Images/Projet-Fin-D'année/Spawn.png", desc: "Visualisation de la zone d'apparition initiale du joueur." },
      { src: "/Images/Projet-Fin-D'année/Tir_deux_coter_avec_beapbop.png", desc: "Démonstration du système de tir asymétrique géré par le personnage BeapBop." },
      { src: "/Images/Projet-Fin-D'année/Features.png", desc: "Inventaire récapitulatif des différentes mécaniques implémentées dans le moteur." },
      { src: "/Images/Projet-Fin-D'année/Level-Maker.png", desc: "Aperçu de l'outil de création et de gestion de niveaux (Level Maker)." }
    ]
  },
  {
    title: "Rogue Shooter",
    engine: "Light Engine (moteur Custom)",
    year: "2024",
    genre: "Shoot Them Up",
    durationTeam: "Durée : 2 semaines - 2 personnes",
    mainImage: "/Images/Shoot-Them-Up/LEVEL1-1.png",
    desc: "Description du projet Shoot Them Up.",
    tags: ["C#", "2D", "ASFML", "Architecture Code", "Encpsulation", ],
    color: "#e6e600",
    videoSrc: "/Videos/Shoot-Them-Up/demo.mp4",
    images: [
      { src: "/Images/Shoot-Them-Up/Shop.png", desc: "Interface de la boutique permettant l'amélioration des armes." },
      { src: "/Images/Shoot-Them-Up/Select_Level.png", desc: "Menu de navigation pour sélectionner la difficulté du prochain niveau." },
      { src: "/Images/Shoot-Them-Up/LEVEL1.png", desc: "Action en plein cœur du premier niveau lors d'une vague ennemie." },
      { src: "/Images/Shoot-Them-Up/LEVEL2.png", desc: "Augmentation de la difficulté visuelle et ennemie arrivée au Niveau 2." }
    ]
  }
];

function ProjectCard({ p }) {
  const [showImages, setShowImages] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="project-card" style={{ width: '100%' }}>
        <div
          className="project-header"
          style={{ borderTop: `3px solid ${p.color}` }}
        >
          <div>
            <span>{p.engine}</span> • <span>{p.year}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div className="project-title">{p.title}</div>
            {p.durationTeam && (
              <div style={{ fontSize: '0.9rem', color: '#ccc', fontStyle: 'italic', marginTop: '4px' }}>
                {p.durationTeam}
              </div>
            )}
          </div>

          <div>{p.genre}</div>
        </div>

        {p.mainImage && (
          <div style={{ padding: '0 15px', marginTop: '15px' }}>
            <img 
              src={p.mainImage} 
              alt={`Couverture de ${p.title}`} 
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }} 
            />
          </div>
        )}

        <div className="project-body">
          <p>{p.desc}</p>

          <div className="skills-tags">
            {p.tags.map((t, i) => (
              <span key={i} className="skill-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="project-body" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            className="btn btn-primary"
            onClick={() => setShowVideo(true)}
          >
            ▶ Voir la démo
          </button>
          
          {p.images && p.images.length > 0 && (
            <button
              className="btn btn-secondary"
              onClick={() => setShowImages(!showImages)}
            >
              {showImages ? "▲ Masquer les images" : "▼ Découvrir en images"}
            </button>
          )}
        </div>

        {showImages && p.images && (
          <div className="project-gallery" style={{ padding: '15px', borderTop: '1px solid #333' }}>
            {p.images.map((img, idx) => (
              <div key={idx} className="gallery-item" style={{ marginBottom: '15px' }}>
                <img 
                  src={img.src} 
                  alt={`${p.title} - ${idx + 1}`} 
                  style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} 
                />
                <p style={{ fontSize: '0.85rem', color: '#ccc', margin: '5px 0 0 0', textAlign: 'center' }}>
                  {img.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODALE VIDÉO EN SUPERPOSITION */}
      {showVideo && (
        <div 
          onClick={() => setShowVideo(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <button 
            onClick={() => setShowVideo(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              fontSize: '2rem',
              color: 'white',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            ✖
          </button>

          <video 
            src={p.videoSrc} 
            controls 
            autoPlay 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '80%',
              maxHeight: '80%',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              cursor: 'default'
            }} 
          >
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      )}
    </>
  );
}

export default function Project() {
  return (
    <div className="Projets">
      <div className="page-header" style={{ textAlign: 'center' }}>
        <div className="page-header-eyebrow">Portfolio</div>
        <h1 className="page-header-title">Mes Projets</h1>
        <p className="page-header-sub">
          6 jeux développés — vidéos & images disponibles
        </p>
      </div>

      <div 
        className="projects-list" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '2rem', 
          maxWidth: '900px', 
          margin: '0 auto',
          padding: '0 20px'
        }}
      >
        {projects.map((p, index) => (
          <ProjectCard key={index} p={p} />
        ))}
      </div>
    </div>
  );
}