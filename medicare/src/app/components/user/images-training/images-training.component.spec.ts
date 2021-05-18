import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesTrainingComponent } from './images-training.component';

describe('ImagesTrainingComponent', () => {
  let component: ImagesTrainingComponent;
  let fixture: ComponentFixture<ImagesTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
