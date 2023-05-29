import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBibleOnOurDayPageComponent } from './create-bible-on-our-day-page.component';

describe('CreateBibleOnOurDayPageComponent', () => {
  let component: CreateBibleOnOurDayPageComponent;
  let fixture: ComponentFixture<CreateBibleOnOurDayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBibleOnOurDayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBibleOnOurDayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
