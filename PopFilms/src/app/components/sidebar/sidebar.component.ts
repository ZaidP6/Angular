import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  providers: string[] = ['Netflix', 'Amazon Prime', 'Disney+', 'HBO'];
  genres: string[] = ['Acción', 'Comedia', 'Drama', 'Terror'];
  ratings: string[] = ['G', 'PG', 'PG-13', 'R', 'NC-17'];

  selectedProvider: string = '';
  selectedGenres: string[] = [];
  releaseYear: number | null = null;
  selectedRating: string = '';

  applyFilters() {
    // Lógica para aplicar filtros y enviar datos al componente principal
    console.log({
      provider: this.selectedProvider,
      genres: this.selectedGenres,
      year: this.releaseYear,
      rating: this.selectedRating
    });
  }
}
