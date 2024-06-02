// Importe les classes nécessaires
import { OPDto } from "../Onepiece/OPdto.ts";
import { Card } from "../Composant/Card.ts";
import { ImageCard } from "../Composant/imagescard.ts";
import { ContentCard } from "../Composant/Content_Cards.ts";

export class Displayinterface {
  // Méthode statique pour créer les éléments d'interface pour une liste de personnages
  static createCharacterElements(characters: OPDto[]) {
    // Parcourt la liste de personnages
    characters.forEach((character) => {
      // Création des différents éléments de l'interface

      // Création d'une carte
      const theCard = Card.basic("card");

      // Création d'une ImageCard avec l'image du personnage et une classe CSS
      const thisImageCard = ImageCard.basic(character.image, "image-card");

      // Création d'une ContentCard avec les informations du personnage
      const contentCard = ContentCard.OPContent(
  characters.id;
  characters.name
  characters.size
  characters.age
  characters.bounty
  crew: {
    characters.id
    characters.name
    characters.description
    characters.status
    characters.number
    characters.roman_name
    characters.total_prime
    characters.is_yonko
  };
  fruit: {
    characters.id
    characters.name
    characters.description
    characters.type
    characters.filename
    characters.roman_name
    characters.technicalFile
  };
  characters.job
  characters.status
    );

     // Ajout de l'image dans la carte
      card.addElement(ImageCard);

      // Ajout de la ContentCard dans la carte
      card.addElement(Card);

      // Ajout de la carte dans le conteneur
      card.addCardInContainer();
    };
  }