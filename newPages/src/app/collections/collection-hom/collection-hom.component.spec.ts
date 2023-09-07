import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionHomComponent } from './collection-hom.component';

describe('CollectionHomComponent', () => {
  let component: CollectionHomComponent;
  let fixture: ComponentFixture<CollectionHomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionHomComponent]
    });
    fixture = TestBed.createComponent(CollectionHomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
