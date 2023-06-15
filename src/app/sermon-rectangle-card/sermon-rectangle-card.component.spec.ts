import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonRectangleCardComponent } from './sermon-rectangle-card.component';

describe('SermonRectangleCardComponent', () => {
  let component: SermonRectangleCardComponent;
  let fixture: ComponentFixture<SermonRectangleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonRectangleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SermonRectangleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
