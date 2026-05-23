import { Component } from '@angular/core';

@Component({
  selector: 'app-barre-navigation',
  standalone: true,
  imports: [],
  templateUrl: './barre-navigation.html',
  styleUrl: './barre-navigation.css',
})
export class BarreNavigation {
 menuOuvert = false;

  toggleMenu() {
    this.menuOuvert = !this.menuOuvert;
  }

  fermerMenu() {
    this.menuOuvert = false;
  }
}
