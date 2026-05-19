import { Component } from '@angular/core';
import { LayoutPage } from '../layout-page/layout-page';

@Component({
  selector: 'app-page-home',
  imports: [LayoutPage],
  templateUrl: './page-home.html',
  styleUrl: './page-home.css',
})
export class PageHome {
 infos = [
    { emoji: '🏔️', titre: 'Montagnes', description: 'Mont Cameroun, Mont Bamboutos' },
    { emoji: '🦁', titre: 'Faune', description: 'Parcs nationaux, biodiversité unique' },
    { emoji: '🏖️', titre: 'Plages', description: 'Kribi, Limbe, plages magnifiques' }
  ];
}
