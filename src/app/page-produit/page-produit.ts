import { Component } from '@angular/core';
import { Notation } from '../notation/notation';

@Component({
  selector: 'app-page-produit',
  imports: [Notation],
  templateUrl: './page-produit.html',
  styleUrl: './page-produit.css',
})
export class PageProduit {
derniereNote = 0;
  
  afficherNote(note: number) {
    this.derniereNote = note;
    console.log(`L'utilisateur a noté : ${note}/5`);
  }
}
