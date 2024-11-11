import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-pop-web-designed',
  templateUrl: './pop-web-designed.component.html',
  styleUrl: './pop-web-designed.component.css',
  standalone: true,
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopWebDesignedComponent {
  readonly panelOpenState = signal(false);

}
