import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingExampleComponent } from './data-sharing-example.component';

describe('DataSharingExampleComponent', () => {
  let component: DataSharingExampleComponent;
  let fixture: ComponentFixture<DataSharingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSharingExampleComponent]
    });
    fixture = TestBed.createComponent(DataSharingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
