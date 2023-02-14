import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestACardComponent } from './test-acard.component';

describe('TestACardComponent', () => {
  let component: TestACardComponent;
  let fixture: ComponentFixture<TestACardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestACardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestACardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
