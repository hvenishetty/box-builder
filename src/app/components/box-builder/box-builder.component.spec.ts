import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBuilderComponent } from './box-builder.component';

describe('BoxBuilderComponent', () => {
  let component: BoxBuilderComponent;
  let fixture: ComponentFixture<BoxBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
