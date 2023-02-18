import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSermonViewComponent } from './latest-sermon-view.component';

describe('LatestSermonViewComponent', () => {
  let component: LatestSermonViewComponent;
  let fixture: ComponentFixture<LatestSermonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestSermonViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestSermonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
