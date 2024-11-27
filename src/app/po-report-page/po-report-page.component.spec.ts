import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoReportPageComponent } from './po-report-page.component';

describe('PoReportPageComponent', () => {
  let component: PoReportPageComponent;
  let fixture: ComponentFixture<PoReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoReportPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
