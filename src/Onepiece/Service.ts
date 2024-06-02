// Importe l'instance d'Axios pour les requêtes HTTP
import { http } from "../Http/axios.ts";

// Importe les types PokemonApi et PokemonList depuis le fichier PokemonApi.ts
import { charOnepieceApi, charList } from "./Api.ts";

// Importe la classe PokemonDto depuis le fichier Pokemondto.ts
import { OPDto } from "./OPdto.ts";

export class OPService {
  /**
   * Méthode statique qui récupère la liste des pokémons depuis l'API
   * @returns Une promesse qui résout en un tableau de PokémonApi
   */
  static getCharacters = async () => {
    try {
      // Envoie une requête GET à l'API pour récupérer la liste des pokémons
      const response = await http.get<charList[]>("/characters");
      // Renvoie les données de la réponse
      return response.data;
    } catch (error) {
      // Logue l'erreur si elle se produit
      console.log("ERROR => ", error);
      // Relance l'erreur pour qu'elle soit gérée par le appelant
      throw error;
    }
  };
  static charOnepieceApiToCharList = (char: charOnepieceApi): charList => {
    return {
      id: char.id ?? "",
      name: char.name ?? "",
      size: char.size ?? "",
      age: char.age ?? "",
      bounty: char.bounty ?? "",
      crew: {
        id: char.crew?.id ?? "",
        name: char.crew?.name ?? "",
        description: char.crew?.description ?? null,
        status: char.crew?.status ?? "",
        number: char.crew?.number ?? "",
        roman_name: char.crew?.roman_name ?? "",
        total_prime: char.crew?.total_prime ?? "",
        is_yonko: char.crew?.is_yonko ?? false,
      },
      fruit: {
        id: char.fruit?.id ?? "",
        name: char.fruit?.name ?? "",
        description: char.fruit?.description ?? "",
        type: char.fruit?.type ?? "",
        filename: char.fruit?.filename ?? "",
        roman_name: char.fruit?.roman_name ?? "",
        technicalFile: char.fruit?.technicalFile ?? "",
      },
      job: char.job ?? "",
      status: char.status ?? "",
    };
  };

  static Apitocharlist = (listchar: charList[]): OPDto[] => {
    return listchar.map((character) => OPDto.basic(character));
  };
};
