import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotonuloComponent } from './votonulo.component';

describe('VotonuloComponent', () => {
  let component: VotonuloComponent;
  let fixture: ComponentFixture<VotonuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotonuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotonuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
