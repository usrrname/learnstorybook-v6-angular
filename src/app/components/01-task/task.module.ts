import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PureTaskListComponent } from '../03-pure-task-list/pure-task-list.component';
import { TaskComponent } from './task.component';
import { TaskListComponent } from '../02-task-list/task-list.component';
import { TasksState } from '../../state/task.state';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
  providers: [],
})
export class TaskModule {}
