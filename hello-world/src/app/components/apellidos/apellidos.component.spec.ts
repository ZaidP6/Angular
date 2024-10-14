import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApellidosComponent } from './apellidos.component';

describe('ApellidosComponent', () => {
  let component: ApellidosComponent;
  let fixture: ComponentFixture<ApellidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApellidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApellidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
