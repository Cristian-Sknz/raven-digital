import { Component } from '@angular/core';
import { Icons } from '../app.component';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  links: string[] = [
    'Website development',
    'Branding',
    'UI/UX design',
    'Software',
    'Digital marketing'
  ];

  icons: Icons = {
    facebook: faFacebookSquare,
    twitter: faTwitter,
    instagram: faInstagram
  }
}
