import React, { useState } from "react";

function JeuDe() {
  const [face, setFace] = useState(null);
  const [compteur, setCompteur] = useState(0);
  const [fin, setFin] = useState(false);
  const [cache, setCache] = useState(null); // État pour stocker le nombre caché
  const [inputCache, setInputCache] = useState(""); // État pour gérer l'input

  const jouer = () => {
    const valeur = Math.floor(Math.random() * 6) + 1;
    setFace(valeur);
    setCompteur(compteur + 1);
    if (valeur === cache) {
      setFin(true);
    }
  };

  const getImage = () => {
    return face ? `images/face${face}.png` : "images/Dé.PNG";
  };

  const initialiser = () => {
    setFace(null);
    setCompteur(0);
    setFin(false);
    setCache(null);
    setInputCache("");
  };

  const handleCacheChange = (event) => {
    setInputCache(event.target.value);
  };

  const handleSetCache = () => {
    setCache(parseInt(inputCache, 10)); // Convertit la valeur en nombre entier
    setFin(false); // Réinitialise l'état de fin
  };

  return (
    <div>
      <h1>Jeu de Dé...</h1>
      <img src={getImage()} style={{ width: "60px", height: "60px" }} alt="Face du dé" />
      <h2>Face: {face || "..."}</h2>
      <h2>Nombre d'essais: {compteur}</h2>

      {/* Champ pour saisir le nombre caché */}
      <input
        type="number"
        value={inputCache}
        onChange={handleCacheChange}
        placeholder="Entrez un nombre caché entre 1 et 6"
      />
      <button onClick={handleSetCache}>Définir le nombre caché</button>

      <button onClick={jouer} disabled={cache === null}>Jouer</button>

      {fin && <p>Bravo! Vous avez trouvé la face cachée {cache}!</p>}

      <button onClick={initialiser}>Initialiser</button>
    </div>
  );
}

export default JeuDe;
