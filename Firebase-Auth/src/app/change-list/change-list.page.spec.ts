import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeListPage } from './change-list.page';

describe('ChangeListPage', () => {
  let component: ChangeListPage;
  let fixture: ComponentFixture<ChangeListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
