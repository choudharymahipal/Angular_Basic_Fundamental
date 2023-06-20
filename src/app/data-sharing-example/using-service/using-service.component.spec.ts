import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingServiceComponent } from './using-service.component';

describe('UsingServiceComponent', () => {
  let component: UsingServiceComponent;
  let fixture: ComponentFixture<UsingServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsingServiceComponent]
    });
    fixture = TestBed.createComponent(UsingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
