import { Injectable } from '@angular/core'
import servicesJson from './services.json'

@Injectable()
export class DigitalServices {

  public getDigitalServices(): DigitalServiceJson[] {
    return servicesJson;
  }
}

interface DigitalServiceJson {
  title: string;
  content: string;
  link: string;
  icon: string;
}