import { useState } from 'react';

export const projects = [
  {
    title: "Summit Of The Divin",
    engine: "Faster (Mon Moteur Custom)",
    year: "2024",
    genre: "Rogue Light, RPG, FPS, MultiJoueur",
    durationTeam: "Durée : 3 semaines - 3 personnes",
    mainImage: "/images/submit-main.png",
    desc: `<strong>DESCRIPTION</strong><br/>
Le but est de battre le boss final du jeu en avançant à travers une multitude de salles avec des événements aléatoires. Avec vos coéquipiers, vous devrez récupérer des armes, améliorer vos statistiques et débloquer de nouvelles compétences pour battre le boss de chaque biome !<br/><br/>
<strong>OBJECTIF DU PROJET</strong><br/>
Nous avions carte blanche pour la création d'un jeu qui nous ferait plaisir à coder, la seule contrainte était d'utiliser un moteur spécifique parmi une liste de choix. Le but de ce projet était aussi de montrer les compétences acquises durant l'année et de les mettre en œuvre.`,
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
    title: "Candy Shooter",
    engine: "GCE Engine (moteur custom)",
    year: "2026",
    genre: "Action / Shooter / FPS",
    durationTeam: "Durée : 2 semaines - 3 personnes",
    mainImage: "/Images/Arena-Shooter/Combat-Boss-Final.png",
    desc: `<strong>DESCRIPTION</strong><br/>
Incarnez un personnage armé jusqu'aux dents dans une arène fermée où vous devez survivre à des vagues successives d'ennemis. Collectez des bonus et affrontez un boss final redoutable.<br/><br/>
<strong>OBJECTIF DU PROJET</strong><br/>
L'objectif principal était de prendre en main un moteur custom (GCE Engine) de A à Z. Nous devions concevoir des outils de création de niveau et implémenter une boucle de gameplay rapide et nerveuse.`,
    tags: ["C++", "Gameplay", "Creation d'Outils"],
    color: "#ff4d4d",
    videoSrc: "/Videos/Arena-Shooter/demo.mp4",
    images: [
      { src: "/Images/Arena-Shooter/Pile-Drabigus.png", desc: "Chaque ennemi possède ses propres caractéristiques. Comme on peut le voir ici, ces ennemis s'empilent s'ils entrent en contact et gagnent un bonus de statistiques." },
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
    desc: `<strong>DESCRIPTION</strong><br/>
Un outil technique permettant de visualiser différents algorithmes de recherche de chemin (A*, BFS, DFS) en temps réel sur une grille modifiable, dans un environnement 2D puis 3D.<br/><br/>
<strong>OBJECTIF DU PROJET</strong><br/>
Ce projet purement algorithmique avait pour but de comprendre en profondeur la navigation d'une intelligence artificielle. Il fallait coder ces algorithmes depuis zéro et les optimiser pour qu'ils soient performants sur de grandes grilles de nœuds.`,
    tags: ["C++", "A*", "PFS", "DFS"],
    color: "#4da6ff",
    videoSrc: "/Videos/PathFinding/demo.mp4",
    images: [
      { src: "/Images/PathFinding/Debug.png", desc: "Mode debug affichant les nœuds de la grille qui sont vérifiés par l'algorithme." },
      { src: "/Images/PathFinding/Wander.png", desc: "Mode de déplacement suivant des points placés automatiquement." },
      { src: "/Images/PathFinding/CustomMap.png", desc: "Possibilité de modifier le terrain à sa guise." },
      { src: "/Images/PathFinding/3D.png", desc: "Évolution de l'algorithme vers une scène en trois dimensions." }
    ]
  },
  {
    title: "Runner",
    engine: "Light Engine (moteur custom)",
    year: "2023",
    genre: "Arcade / Runner",
    durationTeam: "Durée : 2 semaines - 3 personnes",
    mainImage: "/Images/Runner/Presentation.png",
    desc: `<strong>DESCRIPTION</strong><br/>
Un jeu de course infinie où le joueur doit esquiver des obstacles générés procéduralement. La difficulté augmente avec le temps, et le joueur peut utiliser des power-ups pour survivre plus longtemps.<br/><br/>
<strong>OBJECTIF DU PROJET</strong><br/>
L'objectif principal de ce projet, réalisé sur un moteur custom, était de s'approprier les 3C (Camera, Character, Controller). Nous devions gérer les interactions fluides du personnage, le bon comportement de la caméra et concevoir une architecture logicielle robuste.`,
    tags: ["C++", "3C", "Level Design", "Architecture", "3D"],
    color: "#33cc33",
    videoSrc: "/Videos/Runner/demo.mp4",
    images: [
      { src: "/Images/Runner/BOOST.png", desc: "Aperçu d'un power-up de boost d'accélération présent sur le parcours." },
      { src: "/Images/Runner/BOOST2.png", desc: "Activation du JetPack (FlyingBoost) permettant au joueur de voler temporairement." },
      { src: "/Images/Runner/BOOST ACTIF.png", desc: "Augmentation progressive du nombre d'obstacles et de la difficulté en cours de partie." },
      { src: "/Images/Runner/FPS.png", desc: "Possibilité de changer de point de vue pendant la course." }
    ]
  },
  {
    title: "Projet Fin D'année",
    engine: "Light Engine (moteur Custom)",
    year: "2025",
    genre: "Divers",
    durationTeam: "Durée : 2 semaines - 8 personnes",
    mainImage: "/Images/Projet-Fin-D'année/Tir_coter_droit_avec_beapbop.png",
    desc: `<strong>DESCRIPTION</strong><br/>
Notre jeu de fin d'année englobe de nombreuses mécaniques complexes (téléportation, destruction d'environnement, asymétrie). Le projet propose un éditeur de niveaux intégré pour faciliter la création par l'équipe.<br/><br/>
<strong>OBJECTIF DU PROJET</strong><br/>
Apprendre à travailler en équipe nombreuse (8 personnes) sur un vrai cycle de production, avec des pôles séparés (code, architecture, design). La création d'un "Level Maker" custom était essentielle pour automatiser notre flux de travail.`,
    tags: ["Programmation", "Architecture", "Travail d'équipe"],
    color: "#9933ff",
    videoSrc: "/Videos/Projet-Fin-D'année/demo.mp4",
    images: [
      { src: "/Images/Projet-Fin-D'année/Spawn.png", desc: "Visualisation de la zone d'apparition initiale du joueur." },
      { src: "/Images/Projet-Fin-D'année/Tir_deux_coter_avec_beapbop.png", desc: "Démonstration du système de tir asymétrique géré par le personnage BeapBop." },
      { 
        src: "/Images/Projet-Fin-D'année/Features.png", 
        desc: "On peut voir différentes fonctionnalités qui ont été implémentées comme les téléporteurs, les blocs destructibles en fonction d'un événement, les passages secrets, <br /> et la fonction qui permet de placer la caméra sur un plan précis de la scène en fonction de la description." 
      },
      { 
        src: "/Images/Projet-Fin-D'année/Level-Maker.png", 
        desc: "Aperçu de l'outil de création et de gestion de niveaux (Level Maker) en fichier txt." 
      }
    ]
  },
  {
    title: "Rogue Shooter",
    engine: "Light Engine (moteur Custom)",
    year: "2024",
    genre: "Shoot Them Up",
    durationTeam: "Durée : 2 semaines - 2 personnes",
    mainImage: "/Images/Shoot-Them-Up/LEVEL1-1.png",
    desc: `<strong>DESCRIPTION</strong><br/>
Un shoot 'em up classique vu de dessus où le joueur doit éliminer des vagues d'ennemis tout en esquivant un nombre grandissant de projectiles. Entre les niveaux, le joueur peut améliorer son vaisseau.<br/><br/>
<strong>OBJECTIF DU PROJET</strong><br/>
Mettre en pratique l'encapsulation et l'architecture logicielle propre en C#. Nous devions créer des systèmes capables de gérer beaucoup d'entités à l'écran sans impacter les performances.`,
    tags: ["C#", "2D", "ASFML", "Architecture Code", "Encapsulation"],
    color: "#e6e600",
    videoSrc: "/Videos/Shoot-Them-Up/demo.mp4",
    images: [
      { src: "/Images/Shoot-Them-Up/Shop.png", desc: "Interface de la boutique permettant de modifier son skin et son équipement." },
      { src: "/Images/Shoot-Them-Up/Select_Level.png", desc: "Menu de navigation pour sélectionner le niveau actuel." },
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
          {/* Rendu HTML pour interpréter <br/> et <strong> */}
          <p dangerouslySetInnerHTML={{ __html: p.desc }}></p>

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
                <p 
                  style={{ fontSize: '0.85rem', color: '#ccc', margin: '5px 0 0 0', textAlign: 'center' }}
                  dangerouslySetInnerHTML={{ __html: img.desc }}
                />  
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