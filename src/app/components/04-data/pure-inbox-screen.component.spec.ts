import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TaskListComponent } from '../02-task-list/task-list.component';

describe('PureInboxScreenComponent', () => {
  let component: PureInboxScreenComponent;
  let fixture: ComponentFixture<PureInboxScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureInboxScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PureInboxScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(PureInboxScreenComponent);
    component = fixture.componentInstance;
    expect(component);
  });
});
