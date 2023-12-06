import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilOrgaComponent } from './accueil-orga.component';

describe('AccueilOrgaComponent', () => {
  let component: AccueilOrgaComponent;
  let fixture: ComponentFixture<AccueilOrgaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilOrgaComponent]
    });
    fixture = TestBed.createComponent(AccueilOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
