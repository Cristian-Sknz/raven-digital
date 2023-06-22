import { Component, Input } from '@angular/core';

@Component({
  selector: 'common-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent {

  @Input() slide: number = 1;
  @Input() slide_size: number = 3;

  public array(): any[] {
    return Array.from({ length: this.slide_size});
  }
}
