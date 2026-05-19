import { Component } from '@angular/core';
import { EnfantCycle} from '../enfant-cycle/enfant-cycle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-cycle',
  imports: [EnfantCycle, FormsModule],
  templateUrl: './parent-cycle.html',
  styleUrl: './parent-cycle.css',
})
export class ParentCycle {
 messageParent = 'Message initial';
  messageEnvoye = 'Message initial';
  afficherEnfant = true;

  envoyerMessage() {
    this.messageEnvoye = this.messageParent;
    console.log('📨 Parent envoie :', this.messageEnvoye);
  }

  constructor() {
    console.log('🏠 Constructor - parent créé');
  }
}
