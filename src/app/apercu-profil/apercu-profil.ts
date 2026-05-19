import { Component, input } from '@angular/core';

@Component({
  selector: 'app-apercu-profil',
  imports: [],
  templateUrl: './apercu-profil.html',
  styleUrl: './apercu-profil.css',
})
export class ApercuProfil {

  nom  = input<string>('');
  age  = input<number | null>(null);
  bio  = input<string>('');
  
  estVide(): boolean {
    return !this.nom() && !this.age() && !this.bio();
  }
}
