import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSermonPageComponent } from './create-sermon-page.component';

describe('CreateSermonPageComponent', () => {
  let component: CreateSermonPageComponent;
  let fixture: ComponentFixture<CreateSermonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSermonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSermonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
