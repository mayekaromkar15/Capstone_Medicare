import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryApiComponent } from './category-api.component';

describe('CategoryApiComponent', () => {
  let component: CategoryApiComponent;
  let fixture: ComponentFixture<CategoryApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
