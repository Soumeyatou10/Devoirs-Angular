import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editeur-profil',
  imports: [FormsModule],
  templateUrl: './editeur-profil.html',
  styleUrl: './editeur-profil.css',
})
export class EditeurProfil {
 // Modèles bidirectionnels
  nom = model('');
  age = model<number | null>(null);
  bio = model('');
}
