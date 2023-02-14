import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNotebookViewComponent } from './all-notebook-view.component';

describe('AllNotebookViewComponent', () => {
  let component: AllNotebookViewComponent;
  let fixture: ComponentFixture<AllNotebookViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNotebookViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNotebookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
