// Tracker livreur simulé
let trackerText = [
    "Livreur en préparation...",
    "Commande en route...",
    "Livreur arrive dans 5 minutes...",
    "Commande livrée !"
  ];
  
  let index = 0;
  const tracker = document.getElementById('tracker-status');
  
  function updateTracker() {
    tracker.textContent = trackerText[index];
    index = (index + 1) % trackerText.length;
  }
  
  // Change status toutes les 10 secondes (simulation)
  setInterval(updateTracker, 10000);
  