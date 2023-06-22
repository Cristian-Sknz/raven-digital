import { Component } from '@angular/core';
import { Icons } from '../app.component';
import { faMapMarker, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  fields: string[] = ['Name', 'Last Name', 'Email'];
  icons: Icons = {
    phone: faPhone,
    email: faVoicemail,
    map: faMapMarker
  }
}
