import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [DecimalPipe],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
 nom   = input.required<string>();
  prix  = input.required<number>();
  stock = input.required<number>();
  
  // Input facultatif avec valeur par défaut
  promotion = input(false);
  
  // Méthode pour calculer le prix avec/sans promotion
  calculerPrixAvecPromo(prix: number, avecPromo: boolean): number {
    if (avecPromo && this.promotion()) {
      return Math.floor(prix * 0.8); // 20% de réduction
    }
    return prix;
  }
}
