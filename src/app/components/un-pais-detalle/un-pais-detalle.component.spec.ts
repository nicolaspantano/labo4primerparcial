import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnPaisDetalleComponent } from './un-pais-detalle.component';

describe('UnPaisDetalleComponent', () => {
  let component: UnPaisDetalleComponent;
  let fixture: ComponentFixture<UnPaisDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnPaisDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnPaisDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
