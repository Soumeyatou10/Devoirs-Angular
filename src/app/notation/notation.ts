import { Component, output, input } from '@angular/core';

@Component({
  selector: 'app-notation',
  imports: [],
  templateUrl: './notation.html',
  styleUrl: './notation.css',
})
export class Notation {
// Output pour notifier le parent
  noteChoisie = output<number>();
  
  // Input optionnel pour une note existante
  noteInitiale = input<number>(0);
  
  etoiles = [1, 2, 3, 4, 5];
  noteActuelle = 0;
  noteSurvolee = 0;
  
  ngOnInit() {
    this.noteActuelle = this.noteInitiale();
  }
  
  noter(note: number) {
    this.noteActuelle = note;
    this.noteChoisie.emit(note); // Émission vers le parent
  }
  
  survoler(note: number) {
    this.noteSurvolee = note;
  }
  
  quitterSurvol() {
    this.noteSurvolee = 0;
  }
  
  estActive(index: number): boolean {
    if (this.noteSurvolee) {
      return index <= this.noteSurvolee;
    }
    return index <= this.noteActuelle;
  }
}
