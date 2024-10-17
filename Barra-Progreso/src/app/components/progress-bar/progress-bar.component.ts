import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() progreso = 80;

  getProgressColor(): string {
    if (this.progreso <= 25) {
      return 'danger';
    } else if (this.progreso > 25 && this.progreso <= 50) {
      return 'warning';
    } else if (this.progreso > 50 && this.progreso <= 75) {
      return 'primary';
    } else {
      return 'success';
    }
  }



}
