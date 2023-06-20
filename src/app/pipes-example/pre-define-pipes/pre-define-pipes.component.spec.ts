import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDefinePipesComponent } from './pre-define-pipes.component';

describe('PreDefinePipesComponent', () => {
  let component: PreDefinePipesComponent;
  let fixture: ComponentFixture<PreDefinePipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreDefinePipesComponent]
    });
    fixture = TestBed.createComponent(PreDefinePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
