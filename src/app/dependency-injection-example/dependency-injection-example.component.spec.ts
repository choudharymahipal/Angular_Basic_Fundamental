import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionExampleComponent } from './dependency-injection-example.component';

describe('DependencyInjectionExampleComponent', () => {
  let component: DependencyInjectionExampleComponent;
  let fixture: ComponentFixture<DependencyInjectionExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependencyInjectionExampleComponent]
    });
    fixture = TestBed.createComponent(DependencyInjectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
