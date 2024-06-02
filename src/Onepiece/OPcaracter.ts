// Importe le type PokemonDto depuis le fichier PokemonDto
import { OPDto } from "./OPdto";

/**
 * Définit la classe CharacterPokemon qui permet de gérer un tableau de PokemonDto
 */
export class CharacterPokemon {
  // Définit un tableau de PokemonDto
  public pcharacters: OPDto[];

  // Définit le constructeur de la classe CharacterPokemon
  constructor(characters: OPDto[]) {
    // Initialise le tableau de PokemonDto avec les valeurs passées en argument
    this.pcharacters = characters;
  }
}
