import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { TasksState } from '../../state/task.state';

@Component({
  selector: 'app-inbox-screen',
  template: `<app-pure-inbox-screen [error]="error$ | async"></app-pure-inbox-screen>`,
})
export class InboxScreenComponent implements OnInit {
  @Select(TasksState.getError) error$: Observable<any>;

  constructor() {}

  ngOnInit(): void {}
}
