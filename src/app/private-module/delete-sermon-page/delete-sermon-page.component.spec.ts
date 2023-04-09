import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSermonPageComponent } from './delete-sermon-page.component';

describe('DeleteSermonPageComponent', () => {
  let component: DeleteSermonPageComponent;
  let fixture: ComponentFixture<DeleteSermonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSermonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSermonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
