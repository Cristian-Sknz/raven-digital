import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Icons } from '../app.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  @HostBinding('class.scrolled') scrolled = false;

  items: string[] = ["Home", "About", "Services", "Portfolio", "Testimonial", "News", "Contacts", "Elements"];
  icons: Icons = {
    search: faSearch,
    menu: faBars
  }

  scroll() {
    if (window.scrollY >= 80) {
      if (this.scrolled) return;
      this.scrolled = true;
      return;
    }

    if (this.scrolled) {
      if (window.scrollY > 40 && window.scrollY < 80) return;
      this.scrolled = false;
      return;
    }
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll.bind(this));
  }
}