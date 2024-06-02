// Exporte la classe ImageCard
export class ImageCard {
  // Élément HTMLImageElement représentant l'image
  public element: HTMLImageElement;

  // Constructeur de la classe, prend en paramètre l'URL de l'image
  constructor(url: string) {
    // Crée un élément img et le stocke dans la propriété element
    this.element = document.createElement("img");
    // Définit l'attribut src de l'élément img avec l'URL passée en paramètre
    this.element.setAttribute("src", url);
  }

  // Méthode pour ajouter une classe CSS à l'élément img
  public addClass(className: string) {
    // Ajoute la classe CSS passée en paramètre à la liste des classes de l'élément img
    this.element.classList.add(className);
  }

  // Méthode pour ajouter un attribut à l'élément img
  public addAttribute(attribute: string, value: string) {
    // Définit l'attribut passé en paramètre avec la valeur passée en paramètre
    this.element.setAttribute(attribute, value);
  }

  // Méthode statique pour créer une instance de ImageCard avec une classe CSS de base
  public static basic(url: string, nameClass: string) {
    // Crée une nouvelle instance de ImageCard avec l'URL passée en paramètre
    const instance = new ImageCard(url);
    // Ajoute la classe CSS passée en paramètre à l'élément img
    instance.addClass(nameClass);
    // Retourne l'instance créée
    return instance;
  }
}
