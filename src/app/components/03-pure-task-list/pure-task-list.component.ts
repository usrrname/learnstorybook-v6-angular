import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-pure-task-list',
  template: `<div class="list-items">
              <app-task
                *ngFor="let task of tasksInOrder"
                [task]="task"
                (onArchiveTask)="onArchiveTask.emit($event)"
                (onPinTask)="onPinTask.emit($event)"
              >
              </app-task>

              <div *ngIf="tasksInOrder.length === 0 && !loading" class="wrapper-message">
                <span class="icon-check"></span>
                <div class="title-message">You have no tasks</div>
                <div class="subtitle-message">Sit back and relax</div>
              </div>

              <div *ngIf="loading">
                <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="loading-item">
                  <span class="glow-checkbox"></span>
                  <span class="glow-text"> <span>Loading</span> <span>cool</span> <span>state</span> </span>
                </div>
              </div>
            </div>`
})
export class PureTaskListComponent implements OnInit {

  constructor() { }

  tasksInOrder: Task[] = [];

  @Input() loading = false;

  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  @Input()
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
  }
  ngOnInit(): void { }
}
