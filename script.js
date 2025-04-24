const dossier = 'textes/';
const container = document.getElementById('contenu');

fichiersTextes.reverse().forEach(nomFichier => {
  const bloc = document.createElement('div');
  bloc.className = 'texte';

  bloc.innerHTML = `
    <iframe 
      src="${dossier + nomFichier}" 
      width="100%" 
      height="600px" 
      frameborder="0">
    </iframe>
  `;

  container.appendChild(bloc);
});


  
