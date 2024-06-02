import { charOnepieceApi } from "../Onepiece/Api.ts";

// Définition de la classe ContentCard
export class ContentOPCard {
  // Propriétés de la classe ContentCard
  public id: number; // Identifiant de la carte
  public name: HTMLParagraphElement; // Élément HTML pour le nom
  public size: HTMLParagraphElement; // Élément HTML pour la taille
  public age: HTMLParagraphElement; // Élément HTML pour l'âge
  public bounty: HTMLParagraphElement; // Élément HTML pour la prime
  public crew: { // Informations sur l'équipage
    id: number; // Identifiant de l'équipage
    name: HTMLParagraphElement; // Élément HTML pour le nom de l'équipage
    description: null; // Description de l'équipage (non définie)
    status: HTMLParagraphElement; // Élément HTML pour le statut de l'équipage
    number: HTMLParagraphElement; // Élément HTML pour le numéro de l'équipage
    roman_name: HTMLParagraphElement; // Élément HTML pour le nom romain de l'équipage
    total_prime: HTMLParagraphElement; // Élément HTML pour la prime totale de l'équipage
    is_yonko: boolean; // Indicateur si l'équipage est un Yonko
  };
  public fruit: { // Informations sur le fruit
    id: number; // Identifiant du fruit
    name: HTMLParagraphElement; // Élément HTML pour le nom du fruit
    description: HTMLParagraphElement; // Élément HTML pour la description du fruit
    type: HTMLParagraphElement; // Élément HTML pour le type du fruit
    filename: HTMLParagraphElement; // Élément HTML pour le nom de fichier du fruit
    roman_name: HTMLParagraphElement; // Élément HTML pour le nom romain du fruit
    technicalFile: HTMLParagraphElement; // Élément HTML pour le fichier technique du fruit
  };
  public job: HTMLParagraphElement; // Élément HTML pour le métier
  public status: HTMLParagraphElement; // Élément HTML pour le statut

  // Constructeur de la classe ContentCard qui initialise les propriétés
  constructor() {
    this.id = 0;
    this.name = document.createElement("p");
    this.size = document.createElement("p");
    this.age = document.createElement("p");
    this.bounty = document.createElement("p");
    this.crew = {
      id: 0,
      name: document.createElement("p"),
      description: null,
      status: document.createElement("p"),
      number: document.createElement("p"),
      roman_name: document.createElement("p"),
      total_prime: document.createElement("p"),
      is_yonko: false,
    };
    this.fruit = {
      id: 0,
      name: document.createElement("p"),
      description: document.createElement("p"),
      type: document.createElement("p"),
      filename: document.createElement("p"),
      roman_name: document.createElement("p"),
      technicalFile: document.createElement("p"),
    };
    this.job = document.createElement("p");
    this.status = document.createElement("p");
  }
}

export class ContentCard {
  // Déclaration des propriétés de la classe ContentCard
  id: number;
  name: HTMLElement;
  size: HTMLElement;
  age: HTMLElement;
  bounty: HTMLElement;
  crew: {
    id: number;
    name: HTMLElement;
    description: null;
    status: HTMLElement;
    number: HTMLElement;
    roman_name: HTMLElement;
    total_prime: HTMLElement;
    is_yonko: boolean;
  };
  fruit: {
    id: number;
    name: HTMLElement;
    description: HTMLElement;
    type: HTMLElement;
    filename: HTMLElement;
    roman_name: HTMLElement;
    technicalFile: HTMLElement;
  };
  public job: HTMLElement;
  public status: HTMLElement;

  // Constructeur de la classe ContentCard qui initialise les propriétés
  constructor() {
    this.id = 0;
    this.name = document.createElement("p");
    this.size = document.createElement("p");
    this.age = document.createElement("p");
    this.bounty = document.createElement("p");
    this.crew = {
      id: 0,
      name: document.createElement("p"),
      description: null,
      status: document.createElement("p"),
      number: document.createElement("p"),
      roman_name: document.createElement("p"),
      total_prime: document.createElement("p"),
      is_yonko: false,
    };
    this.fruit = {
      id: 0,
      name: document.createElement("p"),
      description: document.createElement("p"),
      type: document.createElement("p"),
      filename: document.createElement("p"),
      roman_name: document.createElement("p"),
      technicalFile: document.createElement("p"),
    };
    this.job = document.createElement("p");
    this.status = document.createElement("p");
  }

  // Méthode statique PokeContent qui crée une nouvelle instance de la classe ContentCard et définit ses propriétés
  static OPContent(
    id: number,
    name: string,
    size: string,
    age: string,
    bounty: string,
    crew: {
      id: number;
      name: string;
      description: null | string;
      status: string;
      number: string;
      roman_name: string;
      total_prime: string;
      is_yonko: boolean;
    },
    fruit: {
      id: number;
      name: string;
      description: string;
      type: string;
      filename: string;
      roman_name: string;
      technicalFile: string;
    },
    job: string,
    status: string,
  ) {
    const instance = new ContentCard();
    instance.id = id;
    instance.name.textContent = name;
    instance.size.textContent = size;
    instance.age.textContent = age;
    instance.bounty.textContent = bounty;
    instance.crew.id = crew.id;
    instance.crew.name.textContent = crew.name;
    instance.crew.status.textContent = crew.status;
    instance.crew.number.textContent = crew.number;
    instance.crew.roman_name.textContent = crew.roman_name;
    instance.crew.total_prime.textContent = crew.total_prime;
    instance.crew.is_yonko = crew.is_yonko;
    instance.fruit.id = fruit.id;
    instance.fruit.name.textContent = fruit.name;
    instance.fruit.description.textContent = fruit.description;
    instance.fruit.type.textContent = fruit.type;
    instance.fruit.filename.textContent = fruit.filename;
    instance.fruit.roman_name.textContent = fruit.roman_name;
    instance.fruit.technicalFile.textContent = fruit.technicalFile;
    instance.job.textContent = job;
    instance.status.textContent = status;
    return instance;
  };
}