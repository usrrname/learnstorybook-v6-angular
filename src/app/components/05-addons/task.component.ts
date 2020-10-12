import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  template: `<div class="list-item {{ task?.state }}">
                <label class="checkbox">
                  <input type="checkbox" [defaultChecked]="task?.state === 'TASK_ARCHIVED'" disabled="true" name="checked" />
                  <span class="checkbox-custom" (click)="onArchive(task.id)"></span>
                </label>
                <div class="title">
                  <!-- This is the input for our task title. In practice we would probably update the styles for this element
              but for this tutorial, let's fix the problem with an inline style:
              -->
                  <input type="text" [value]="task.title" class="list-item {{ task?.state }}"
                  placeholder="Change value in Controls tab"
                  readonly='true'
                  [ngStyle]="{textOverflow:'ellipsis'}"/>
                </div>
              <div class="actions">
                <a *ngIf="task?.state !== 'TASK_ARCHIVED'" (click)="onPin(task.id)">
                  <span class="icon-star"></span>
                </a>
              </div>
            </div>`,
})

export class TaskComponent implements OnInit {
/**
 * @param task
 */
  @Input() public task: Task = {
    id: '1',
    title: 'Test Input',
    state: 'Task_INBOX'
  };

  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onPin(id: any): void {
    this.onPinTask.emit(id);
  }
  onArchive(id: any): void {
    this.onArchiveTask.emit(id);
  }
}
