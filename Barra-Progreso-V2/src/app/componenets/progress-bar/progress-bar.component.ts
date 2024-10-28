import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {

  @Input() valueNumber: number = 25;


  changeColor():string {
    if (this.valueNumber == 0) {
      return 'danger';
    } else if (this.valueNumber >= 1 && this.valueNumber <= 25) {
      return 'warning';
    } else if (this.valueNumber > 25 && this.valueNumber <= 50) {
      return 'info';
    } else if (this.valueNumber > 50 && this.valueNumber <= 75) {
      return 'primary';
    } else if (this.valueNumber > 75 && this.valueNumber <= 99) {
      return 'secondary';
    } else {
      return 'success';
    }
  }


}
