import { Component } from '@angular/core';
import { BarreNavigation } from '../barre-navigation/barre-navigation';
import { CarteUtilisateur } from '../carte-utilisateur/carte-utilisateur';

@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [CarteUtilisateur, BarreNavigation],
  templateUrl: './page-accueil.html',
  styleUrl: './page-accueil.css',
})
export class PageAccueil {

}
