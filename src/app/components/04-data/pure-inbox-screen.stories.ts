import { NgxsModule, Store } from '@ngxs/store';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TaskModule } from '../01-task/task.module';
import { TasksState } from '../../state/task.state';
import { actionsData } from '../01-task/task.stories';
import { defaultTasksData } from '../03-pure-task-list/pure-task-list.stories';
import { moduleMetadata } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions';

export default {
  title: '4: Data/Pure Inbox Screen',
  component: PureInboxScreenComponent,
  decorators: [
    withActions,
    moduleMetadata({
      imports: [TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  ]
};


// inbox screen default state
export const Default = () => ({
  component: PureInboxScreenComponent,
  templateUrl: './pure-inbox-screen.component.html',
  props: {
    tasks: defaultTasksData,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
    error: false
  }
});

// inbox screen error state
export const error = () => ({
  component: PureInboxScreenComponent,
  templateUrl: './pure-inbox-screen.component.html',
  props: {
    error: true,
  },
});
