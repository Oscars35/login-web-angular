import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDesignComponent } from './home-design.component';

describe('HomeDesignComponent', () => {
  let component: HomeDesignComponent;
  let fixture: ComponentFixture<HomeDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
