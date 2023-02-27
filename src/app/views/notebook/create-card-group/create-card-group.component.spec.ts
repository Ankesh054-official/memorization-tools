import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardGroupComponent } from './create-card-group.component';

describe('CreateCardGroupComponent', () => {
  let component: CreateCardGroupComponent;
  let fixture: ComponentFixture<CreateCardGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCardGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
