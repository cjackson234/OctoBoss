import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterFileListComponent } from './printer-file-list.component';

describe('PrinterFileListComponent', () => {
  let component: PrinterFileListComponent;
  let fixture: ComponentFixture<PrinterFileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterFileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
