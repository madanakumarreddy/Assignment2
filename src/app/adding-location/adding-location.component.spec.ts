import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingLocationComponent } from './adding-location.component';

describe('AddingLocationComponent', () => {
  let component: AddingLocationComponent;
  let fixture: ComponentFixture<AddingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
