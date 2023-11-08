import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsComponent } from './cs.component';

describe('CsComponent', () => {
  let component: CsComponent;
  let fixture: ComponentFixture<CsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
