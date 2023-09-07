import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaerternerComponent } from './paerterner.component';

describe('PaerternerComponent', () => {
  let component: PaerternerComponent;
  let fixture: ComponentFixture<PaerternerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaerternerComponent]
    });
    fixture = TestBed.createComponent(PaerternerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
