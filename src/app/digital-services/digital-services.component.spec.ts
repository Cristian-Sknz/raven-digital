import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalServicesComponent } from './digital-services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DigitalServices } from './digital-services.service';

describe('DigitalServicesComponent', () => {
  let component: DigitalServicesComponent;
  let fixture: ComponentFixture<DigitalServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalServicesComponent],
      providers: [DigitalServices],
      imports: [FontAwesomeModule]
    });
    fixture = TestBed.createComponent(DigitalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
