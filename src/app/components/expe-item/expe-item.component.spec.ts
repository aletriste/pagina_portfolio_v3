import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeItemComponent } from './expe-item.component';

describe('ExpeItemComponent', () => {
  let component: ExpeItemComponent;
  let fixture: ComponentFixture<ExpeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
