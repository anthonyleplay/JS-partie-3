//Exercice 1 : Donner la taille de la chaîne de caractères. OK
let stringLength = function (sentence) {
  return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace. OK
let replaceFirstEBySpace = function (sentence) {
  return sentence.replace('e', ' ');
}

//Exercice 3 : Concaténer les deux chaînes de caractères. OK
let concatenateSentences = function (firstSentence, secondSentence) {
  return (firstSentence.concat(secondSentence));
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne. OK
let displayFifthCharacter = function (sentence) {
  console.log(sentence.substring(4,5))
  return sentence.substring(4,5);
}

//Exercice 5 : Afficher les 9 premiers caractère. OK
let displayFirstNineCharacters = function (sentence) {
  console.log(sentence.substring(0,9))
  return sentence.substring(0,9);
}

//Exercice 6 : Mettre en majuscule la chaîne. OK
let upperTheSentence = function (sentence) {
  console.log(sentence.toUpperCase())
  return sentence.toUpperCase();
}

//Exercice 7 : Mettre en minuscule la chaîne. OK
let lowerTheSentence = function (sentence) {
  console.log(sentence.toLowerCase())
  return sentence.toLowerCase();
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne. OK
let removeSpaces = function (sentence) {
  console.log(sentence.trim())
  return sentence.trim();
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*. OK
let isString = function (sentence) {
  console.log(isNaN(sentence))
  return isNaN(sentence);
}

//Exercice 10 : Afficher l'extension du fichier. OK
let displayExtension = function (fileName) {
  console.log(fileName.substring(fileName.length-3, fileName.length));
  return fileName.substring((fileName.length)-3, (fileName.length));
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne. OK
let countSpaces = function (sentence) {
  console.log(sentence.split(' ').length - 1);
  return sentence.split(' ').length - 1;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  console.log(sentence);
  console.log(sentence.split("").reverse().join(''));
  return sentence.split("").reverse().join('');
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  console.log(sentence.indexOf("La Manu") != -1);
  return sentence.indexOf("La Manu") != -1;
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  console.log(Math.abs(number));
  return Math.abs(number);
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  console.log(numbersArray);
  console.log(numbersArray.map(Math.abs));
  return numbersArray.map(Math.abs);
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  console.log(Math.round(Math.PI *(radius * radius)));
  return Math.round(Math.PI *(radius * radius));
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  console.log(Math.round(Math.sqrt((a * a) + (b * b))));
  return Math.round(Math.sqrt((a * a) + (b * b)));
}
