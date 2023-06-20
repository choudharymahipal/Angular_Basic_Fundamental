import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingExampleComponent } from './data-binding-example.component';

describe('DataBindingExampleComponent', () => {
  let component: DataBindingExampleComponent;
  let fixture: ComponentFixture<DataBindingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingExampleComponent]
    });
    fixture = TestBed.createComponent(DataBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
