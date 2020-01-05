import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureHospitalsComponent } from './configure-hospitals.component';

describe('ConfigureHospitalsComponent', () => {
  let component: ConfigureHospitalsComponent;
  let fixture: ComponentFixture<ConfigureHospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureHospitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
