import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-utilisateur',
  standalone: true, 
  templateUrl: './carte-utilisateur.html',
  styleUrl: './carte-utilisateur.css',
})
export class CarteUtilisateur {
  nom = 'Soumeyatou Maya';
  poste = 'Développeuse Web';
  ville = 'Douala';
}
