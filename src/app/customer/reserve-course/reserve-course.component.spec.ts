import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveCourseComponent } from './reserve-course.component';

describe('ReserveCourseComponent', () => {
  let component: ReserveCourseComponent;
  let fixture: ComponentFixture<ReserveCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
