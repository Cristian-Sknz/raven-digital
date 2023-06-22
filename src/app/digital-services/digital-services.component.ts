import { Component } from '@angular/core';
import { DigitalServices } from './digital-services.service';
import { Icons } from '../app.component';
import { faDesktop, faHashtag, faGem,faChartColumn, faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'digital-services',
  templateUrl: './digital-services.component.html',
  styleUrls: ['./digital-services.component.scss']
})
export class DigitalServicesComponent {

  icons: Icons = {
    'desktop': faDesktop,
    'window': faWindowRestore,
    'frame': faHashtag,
    'gem': faGem,
    'chart-column': faChartColumn,
    'paint-roller':faPaintRoller,
  }
  
  constructor(public service: DigitalServices) {}
  
  public elements = this.service.getDigitalServices()
}
