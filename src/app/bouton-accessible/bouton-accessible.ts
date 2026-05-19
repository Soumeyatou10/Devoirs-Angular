import { Component, output , input } from '@angular/core';

@Component({
  selector: 'app-bouton-accessible',
  imports: [],
  templateUrl: './bouton-accessible.html',
  styleUrl: './bouton-accessible.css',
})
export class BoutonAccessible {
// Inputs
  desactive = input(false);
  variante = input<'primary' | 'secondary' | 'danger'>('primary');
  
  // Output
  clic = output<void>();

  // Classes CSS en fonction de l'état
  classesHote(): string {
    const classes = ['inline-flex', 'items-center', 'justify-center', 'gap-2'];

    if (this.desactive()) {
      classes.push('bg-gray-300', 'text-gray-500', 'cursor-not-allowed', 'opacity-60');
    } else {
      switch (this.variante()) {
        case 'primary':
          classes.push('bg-gradient-to-r', 'from-green-600', 'to-green-700', 'text-white', 'hover:from-green-700', 'hover:to-green-800', 'shadow-md', 'hover:shadow-lg');
          break;
        case 'secondary':
          classes.push('bg-gray-200', 'text-gray-800', 'hover:bg-gray-300', 'border', 'border-gray-300');
          break;
        case 'danger':
          classes.push('bg-gradient-to-r', 'from-red-600', 'to-red-700', 'text-white', 'hover:from-red-700', 'hover:to-red-800', 'shadow-md');
          break;
      }
      classes.push('hover:scale-105', 'active:scale-95');
    }

    return classes.join(' ');
  }

  // Gestionnaire de clic avec vérification
  gererClic(event: Event) {
    if (this.desactive()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.clic.emit();
  }
}
