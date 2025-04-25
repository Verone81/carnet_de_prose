const fichiersPDF = [
    "Sir_Willis.pdf",
    "Le_taxidermiste.pdf",
    "Le_secret_du_poker.pdf",
    "L_opération.pdf",
    "La_bete_sauvage.pdf",
    "Le_jeu_du_ouija.pdf",
    "La_chambre_maudite.pdf"
  ];
  
  const contenu = document.getElementById('contenu');
  
  fichiersPDF.forEach(fichier => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('serpent-wrapper');
  
    // Ajoute le serpent gauche
    const serpentGauche = document.createElement('img');
    serpentGauche.src = 'images/serpentgauche.png';
    serpentGauche.classList.add('serpent-gauche');
    wrapper.appendChild(serpentGauche);
  
    // Ajoute l'iframe PDF
    const iframe = document.createElement('iframe');
    iframe.src = `textes/${fichier}`;
    iframe.classList.add('cadre-pdf');
    wrapper.appendChild(iframe);
  
    // Ajoute le serpent droit
    const serpentDroite = document.createElement('img');
    serpentDroite.src = 'images/serpentdroite.png';
    serpentDroite.classList.add('serpent-droite');
    wrapper.appendChild(serpentDroite);
  
    // Ajoute le wrapper à la page
    contenu.appendChild(wrapper);
  });
  
