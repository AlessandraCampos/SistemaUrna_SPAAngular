import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosCadComponent } from './candidatos-cad.component';

describe('CandidatosCadComponent', () => {
  let component: CandidatosCadComponent;
  let fixture: ComponentFixture<CandidatosCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatosCadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
