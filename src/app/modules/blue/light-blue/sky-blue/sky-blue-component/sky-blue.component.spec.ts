import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyBlueComponent } from './sky-blue.component';

describe('SkyBlueComponent', () => {
  let component: SkyBlueComponent;
  let fixture: ComponentFixture<SkyBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
