const dossier = 'textes/';
const container = document.getElementById('contenu');

fichiersTextes.reverse().forEach(nomFichier => {
  fetch(dossier + nomFichier)
    .then(res => res.text())
    .then(html => {
      const bloc = document.createElement('div');
      bloc.className = 'texte';
      bloc.innerHTML = html;
      container.appendChild(bloc);
    })
    .catch(err => {
      console.error("Erreur avec le fichier :", nomFichier, err);
    });
});

  
