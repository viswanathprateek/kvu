import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLRComponent } from './createLR.component';

describe('LRComponent', () => {
  let component: CreateLRComponent;
  let fixture: ComponentFixture<CreateLRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
