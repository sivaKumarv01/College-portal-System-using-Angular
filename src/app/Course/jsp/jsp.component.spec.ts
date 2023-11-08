import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JspComponent } from './jsp.component';

describe('JspComponent', () => {
  let component: JspComponent;
  let fixture: ComponentFixture<JspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
