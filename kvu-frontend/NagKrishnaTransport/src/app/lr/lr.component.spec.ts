import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LRComponent } from './lr.component';

describe('LRComponent', () => {
  let component: LRComponent;
  let fixture: ComponentFixture<LRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
