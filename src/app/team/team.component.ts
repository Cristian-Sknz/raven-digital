import { Component } from '@angular/core';
import { Icons } from '../app.component'
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  icons: Icons = {
    facebook: faFacebookSquare,
    twitter: faTwitter,
    instagram: faInstagram
  }
}
