import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametresComponent } from './parametres.component';

describe('ParametresComponent', () => {
  let component: ParametresComponent;
  let fixture: ComponentFixture<ParametresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametresComponent]
    });
    fixture = TestBed.createComponent(ParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
