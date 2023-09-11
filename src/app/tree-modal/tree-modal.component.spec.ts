import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeModalComponent } from './tree-modal.component';

describe('TreeModalComponent', () => {
  let component: TreeModalComponent;
  let fixture: ComponentFixture<TreeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeModalComponent]
    });
    fixture = TestBed.createComponent(TreeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
