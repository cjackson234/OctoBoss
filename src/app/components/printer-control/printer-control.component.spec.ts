import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterControlComponent } from './printer-control.component';

describe('PrinterControlComponent', () => {
  let component: PrinterControlComponent;
  let fixture: ComponentFixture<PrinterControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
