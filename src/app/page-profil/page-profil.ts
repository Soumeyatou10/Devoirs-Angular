import { Component } from '@angular/core';
import { EditeurProfil } from '../editeur-profil/editeur-profil';
import { ApercuProfil } from '../apercu-profil/apercu-profil';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-profil',
  imports: [EditeurProfil,ApercuProfil,CommonModule],
  templateUrl: './page-profil.html',
  styleUrl: './page-profil.css',
})
export class PageProfil {
 nomUtilisateur = 'François Ngannou';
  ageUtilisateur = 37;
  bioUtilisateur = 'Boxeur professionnel, fier représentant du Cameroun 🇨🇲';
  dateMAJ = new Date();
  
  constructor() {
    // Mettre à jour l'horodatage à chaque modification
    setInterval(() => {
      this.dateMAJ = new Date();
    }, 1000);
  }
}
