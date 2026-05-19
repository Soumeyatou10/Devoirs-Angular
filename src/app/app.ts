import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageAccueil } from './page-accueil/page-accueil';
import { CarteRouge } from './carte-rouge/carte-rouge';
import { CarteBleue } from './carte-bleue/carte-bleue';
import { CarteVerte } from './carte-verte/carte-verte';
import { Boutique } from './boutique/boutique';
import { Produit } from './produit/produit';
import { Notation } from './notation/notation';
import { PageProduit } from './page-produit/page-produit';
import { PageProfil } from './page-profil/page-profil';
import { PageHome } from './page-home/page-home';
import { PageContact } from './page-contact/page-contact';
import { PageBoutons } from './page-boutons/page-boutons';
import { ParentCycle } from './parent-cycle/parent-cycle';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ParentCycle, PageAccueil,CarteRouge,CarteBleue,CarteVerte,Boutique,Produit,Notation,PageProduit,PageProfil,PageHome,PageContact,PageBoutons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('devoirs-angular');
   // Onglet actif
  ongletActif = 'accueil';

  // Liste des onglets avec emojis
  onglets = [
    { id: 'accueil', nom: 'Accueil', emoji: '🏠' },
    { id: 'cartes', nom: 'Cartes', emoji: '🎴' },
    { id: 'boutique', nom: 'Boutique', emoji: '🛍️' },
    { id: 'notation', nom: 'Notation', emoji: '⭐' },
    { id: 'profil', nom: 'Profil', emoji: '👤' },
    { id: 'home', nom: 'Home', emoji: '📱' },
    { id: 'contact', nom: 'Contact', emoji: '📞' },
    { id: 'boutons', nom: 'Boutons', emoji: '🔘' },
    { id: 'cycle', nom: 'Cycle', emoji: '🔄' }
  ];

  // Changer d'onglet
  changerOnglet(ongletId: string) {
    this.ongletActif = ongletId;
  }
}
