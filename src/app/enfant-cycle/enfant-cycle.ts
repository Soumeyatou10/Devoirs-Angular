import { Component, input, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-enfant-cycle',
  imports: [],
  templateUrl: './enfant-cycle.html',
  styleUrl: './enfant-cycle.css',
})
export class EnfantCycle implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  message = input.required<string>();

  constructor() {
    console.log('1️⃣ Constructor - enfant créé');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2️⃣ ngOnChanges - Input modifié :', changes);
  }

  ngOnInit() {
    console.log('3️⃣ ngOnInit - enfant initialisé');
  }

  ngAfterViewInit() {
    console.log('4️⃣ ngAfterViewInit - template enfant affiché');
  }

  ngOnDestroy() {
    console.log('💀 ngOnDestroy - enfant détruit');
  }
}
