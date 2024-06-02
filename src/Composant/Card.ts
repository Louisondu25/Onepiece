// Définition de la classe Card avec deux propriétés : containerElement et element
export class Card {
  // containerElement est un élément HTMLDivElement
  public containerElement: HTMLDivElement;
  // element est un élément HTMLDivElement
  public element: HTMLDivElement;

  // Constructeur de la classe Card qui initialise les propriétés containerElement et element
  constructor() {
    // Récupération de l'élément HTML avec l'ID "app" et affectation à la propriété containerElement
    this.containerElement = document.getElementById("app") as HTMLDivElement;
    // Création d'un nouvel élément HTMLDivElement et affectation à la propriété element
    this.element = document.createElement("div");
  }

  // Méthode statique basic qui crée une nouvelle instance de la classe Card, ajoute une classe à l'élément de la carte et retourne l'instance
  static basic(nameClass: string) {
    // Création d'une nouvelle instance de la classe Card
    const instance = new Card();
    // Ajout de la classe nameClass à l'élément de la carte
    instance.addClass(nameClass);
    // Retour de l'instance de la carte
    return instance;
  }

  // Méthode addClass qui ajoute une classe à l'élément de la carte
  addClass(className: string) {
    // Ajout de la classe à l'élément de la carte
    this.element.classList.add(className);
  }

  // Méthode addAttribute qui ajoute un attribut et une valeur à l'élément de la carte
  addAttribute(attribute: string, value: string) {
    // Ajout de l'attribut et de la valeur à l'élément de la carte
    this.element.setAttribute(attribute, value);
  }

  // Méthode addElement qui ajoute un élément HTML à l'élément de la carte
  addElement(element: HTMLElement) {
    // Ajout de l'élément HTML à l'élément de la carte
    this.element.appendChild(element);
  }

  // Méthode addCardInContainer qui ajoute l'élément de la carte au conteneur
  addCardInContainer() {
    // Ajout de l'élément de la carte au conteneur
    this.containerElement.appendChild(this.element);
  }
}
