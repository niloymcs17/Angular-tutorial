import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryTreeViewComponent } from './binary-tree-view.component';

describe('BinaryTreeViewComponent', () => {
  let component: BinaryTreeViewComponent;
  let fixture: ComponentFixture<BinaryTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryTreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
