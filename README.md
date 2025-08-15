# OpenClassrooms Location Immobilière Kasa

Dans ce projet, vous allez implémenter le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive. Vous travaillerez sur la logique de présentation des données et les composants React. Vous utiliserez React Router pour configurer la navigation entre les différentes pages de l'application.

## Ressources mises à disposition :

[Maquette figma](https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1)  <br/>
[Coding guidelines](./Coding%20guidelines%20Kasa.pdf)  <br/>
[Data des logements](./src/data/logements.json) <br/>
Une base de code

## Technologies

- Utilisation de Create React App.
- Utilisation de React Router.
- Styling: Tout le style CSS doit être codé en utilisant Sass.
- Pas d'utilisation de librairie React externe.

## Livrables
||
|--------|
| [Support de présentation](./Support%20de%20présentation%20Kasa.pdf)|

## Contraintes Techniques & Fonctionnelles

### **React**
- **Composants** :
  - Découpage modulaire et réutilisable (1 composant = 1 fichier).
  - Structure logique et cohérente des fichiers.
  - Utilisation systématique des **props** et du **state** (quand nécessaire).
  - Gestion des événements et des listes (privilégier `map` pour l’itération).

### **React Router**
- **Routes** :
  - Paramètres gérés dans l’URL (ex : détails d’un logement).
  - 1 page = 1 route.
  - Page 404 pour les routes invalides ou données manquantes.
  - Logique du routeur centralisée dans un seul fichier.

### **Général**
- **Qualité du code** : Aucun warning ou erreur dans la console.

### **Fonctionnalités Clés**

#### **Galerie d’Images**
- **Navigation circulaire** :
  - "Précédent" sur la 1ère image → affiche la dernière.
  - "Suivant" sur la dernière image → affiche la 1ère.
- **Cas particulier** : Si une seule image, masquer les boutons et la numérotation.
- **Mise en page** : Hauteur fixe (selon maquette Figma), images centrées et rognées.

#### **Composant Collapse**
- **État initial** : Fermé au chargement de la page.
- **Interaction** : Clic pour basculer entre ouvert/fermé.