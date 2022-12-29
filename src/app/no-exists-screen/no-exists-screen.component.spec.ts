import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoExistsScreenComponent } from './no-exists-screen.component';

describe('NoExistsScreenComponent', () => {
  let component: NoExistsScreenComponent;
  let fixture: ComponentFixture<NoExistsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoExistsScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoExistsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
