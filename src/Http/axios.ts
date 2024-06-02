// Importe la bibliothèque axios pour faire des requêtes HTTP
import axios from "axios";

/**
 * Crée une instance d'axios personnalisée
 * Nomée "http" que l'on pourra utiliser pour faire des requêtes
 * sur l'API Pokémon (et non Harry Potter, comme mentionné dans le commentaire)
 */
export const http = axios.create({
  // Définit la base URL de l'API ciblée
  baseURL: "https://api.api-onepiece.com/v2/",
});

// Ajout d'une fonction pour récupérer les personnages
(async () => {
    const response = await http.get('/characters/fr')
    console.log(response.data)
})();
