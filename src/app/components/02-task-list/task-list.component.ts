import { ArchiveTask, PinTask, TasksState } from '../../state/task.state';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  template: `<app-pure-task-list
              [tasks]="tasks$ | async"
              (onArchiveTask)="archiveTask($event)"
              (onPinTask)="pinTask($event)"
              ></app-pure-task-list>`
})
export class TaskListComponent implements OnInit {
  @Select(TasksState.getAllTasks) tasks$: Observable<Task[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  archiveTask(id: string): void {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: string): void {
    this.store.dispatch(new PinTask(id));
  }
}
