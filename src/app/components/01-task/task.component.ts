import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  title: string;
  @Input() task: Task;

  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onPin(id: any): void {
    this.onPinTask.emit(id);
  }
  onArchive(id: any): void {
    this.onArchiveTask.emit(id);
  }
}
