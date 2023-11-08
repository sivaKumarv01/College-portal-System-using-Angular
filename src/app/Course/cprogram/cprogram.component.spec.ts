import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprogramComponent } from './cprogram.component';

describe('CprogramComponent', () => {
  let component: CprogramComponent;
  let fixture: ComponentFixture<CprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CprogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
