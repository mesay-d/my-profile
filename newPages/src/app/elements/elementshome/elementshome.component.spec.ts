import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementshomeComponent } from './elementshome.component';

describe('ElementshomeComponent', () => {
  let component: ElementshomeComponent;
  let fixture: ComponentFixture<ElementshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementshomeComponent]
    });
    fixture = TestBed.createComponent(ElementshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
