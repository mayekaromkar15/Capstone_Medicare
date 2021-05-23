import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaluserregisterComponent } from './portaluserregister.component';

describe('PortaluserregisterComponent', () => {
  let component: PortaluserregisterComponent;
  let fixture: ComponentFixture<PortaluserregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortaluserregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortaluserregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
