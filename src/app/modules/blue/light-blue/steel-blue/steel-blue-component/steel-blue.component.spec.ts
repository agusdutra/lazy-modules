import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteelBlueComponent } from './steel-blue.component';

describe('SteelBlueComponent', () => {
  let component: SteelBlueComponent;
  let fixture: ComponentFixture<SteelBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteelBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteelBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
