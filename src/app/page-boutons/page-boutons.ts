import { Component } from '@angular/core';
import { BoutonAccessible } from '../bouton-accessible/bouton-accessible';

@Component({
  selector: 'app-page-boutons',
  imports: [BoutonAccessible],
  templateUrl: './page-boutons.html',
  styleUrl: './page-boutons.css',
})
export class PageBoutons {
message = '';
tousActifs = false;

  afficherMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 3000);
  }

  confirmerSuppression() {
    if (confirm(' Êtes-vous sûr de vouloir supprimer ?')) {
      this.afficherMessage(' Suppression confirmée');
    }
  }
 basculerTousBoutons() {
    this.tousActifs = !this.tousActifs;  

    if (this.tousActifs) {
      this.afficherMessage('🔓 Tous les boutons sont maintenant actifs');
    } else {
      this.afficherMessage('🔒 Tous les boutons sont maintenant désactivés');
    }
  }
}
