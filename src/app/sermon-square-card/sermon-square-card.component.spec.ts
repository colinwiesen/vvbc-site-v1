import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonSquareCardComponent } from './sermon-square-card.component';

describe('SermonSquareCardComponent', () => {
  let component: SermonSquareCardComponent;
  let fixture: ComponentFixture<SermonSquareCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonSquareCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SermonSquareCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
