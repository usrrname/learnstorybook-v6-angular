import { Meta, moduleMetadata } from '@storybook/angular';
import { NgxsModule, Store } from '@ngxs/store';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TaskModule } from '../01-task/task.module';
import { TasksState } from '../../state/task.state';

export default {
  title: '4: Data/Pure Inbox Screen',
  component: PureInboxScreenComponent,
  decorators: [
    moduleMetadata({
      imports: [TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  ],
  argTypes: {
    error : {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta;

// inbox screen default state
export const Default = () => ({
  component: PureInboxScreenComponent,
});

// inbox screen error state
export const Error = () => ({
  component: PureInboxScreenComponent,
  props: {
    error: true,
  },
});
