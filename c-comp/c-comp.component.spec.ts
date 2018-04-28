import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCompComponent } from './c-comp.component';

describe('CCompComponent', () => {
  let component: CCompComponent;
  let fixture: ComponentFixture<CCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
