import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRenderCategoryComponent } from './user-render-category.component';

describe('UserRenderCategoryComponent', () => {
  let component: UserRenderCategoryComponent;
  let fixture: ComponentFixture<UserRenderCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRenderCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRenderCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
