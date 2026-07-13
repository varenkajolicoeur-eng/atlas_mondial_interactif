# Atlas Mondial Interactif 🌍

## Description

Atlas Mondial Interactif est une application Web développée en HTML, CSS et JavaScript. Elle permet de rechercher un pays et d'afficher ses principales informations grâce à une API REST.

## Fonctionnalités

- Recherche d'un pays par son nom
- Affichage du drapeau
- Affichage du nom officiel
- Affichage de la capitale
- Affichage de la population
- Affichage de la région
- Affichage de la monnaie
- Affichage des langues parlées
- Gestion des erreurs de recherche
- Interface responsive (Mobile First)

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- API RestCountries v5

## Structure du projet

```
atlas_mondial_interactif/
│
├── index.html
├── styles.css
├── app.js
├── README.md
└── images/
```

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/varenkajolicoeur-eng/atlas_mondial_interactif.git
```

2. Ouvrir le dossier du projet.

3. Ouvrir le fichier **index.html** dans un navigateur.

## Utilisation

1. Saisir le nom d'un pays.
2. Cliquer sur le bouton **Rechercher**.
3. Les informations du pays s'affichent automatiquement.

## Gestion des erreurs

L'application gère plusieurs cas d'erreur :

- Champ de recherche vide.
- Pays introuvable.
- Erreur de connexion réseau ou indisponibilité de l'API.

Des messages explicites sont affichés afin d'informer l'utilisateur.

## Responsive Design

L'application est développée selon l'approche **Mobile First**.

Elle s'adapte automatiquement aux différentes tailles d'écran :

- Smartphone
- Tablette
- Ordinateur

## Auteur

**Varenka Jolicoeur**

Étudiante en TIC – ISTEAH

## Licence

Projet réalisé dans le cadre du cours **LOG3500 – Conception et programmation de sites Web**.