import { Component } from '@angular/core';
import { Produit } from '../produit/produit';

@Component({
  selector: 'app-boutique',
  imports: [Produit],
  templateUrl: './boutique.html',
  styleUrl: './boutique.css',
})
export class Boutique {

}
