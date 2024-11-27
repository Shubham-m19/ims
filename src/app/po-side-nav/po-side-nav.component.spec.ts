import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoSideNavComponent } from './po-side-nav.component';

describe('PoSideNavComponent', () => {
  let component: PoSideNavComponent;
  let fixture: ComponentFixture<PoSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoSideNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
