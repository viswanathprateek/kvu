import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LRListComponent } from './lrlist.component';

describe('LRListComponent', () => {
  let component: LRListComponent;
  let fixture: ComponentFixture<LRListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LRListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LRListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
