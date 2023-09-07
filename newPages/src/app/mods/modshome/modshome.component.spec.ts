import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModshomeComponent } from './modshome.component';

describe('ModshomeComponent', () => {
  let component: ModshomeComponent;
  let fixture: ComponentFixture<ModshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModshomeComponent]
    });
    fixture = TestBed.createComponent(ModshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
