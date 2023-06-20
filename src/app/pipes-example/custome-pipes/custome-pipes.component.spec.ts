import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomePipesComponent } from './custome-pipes.component';

describe('CustomePipesComponent', () => {
  let component: CustomePipesComponent;
  let fixture: ComponentFixture<CustomePipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomePipesComponent]
    });
    fixture = TestBed.createComponent(CustomePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
