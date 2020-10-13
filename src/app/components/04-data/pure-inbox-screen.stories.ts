import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { NgxsModule, Store } from '@ngxs/store';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TaskModule } from '../01-task/task.module';
import { TasksState } from '../../state/task.state';
import { boolean } from '@storybook/addon-knobs';

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
   error: { control: 'error', type: 'boolean' },
  }
} as Meta;

const Template: Story<PureInboxScreenComponent> = (args: PureInboxScreenComponent) => ({
  component: PureInboxScreenComponent,
  props: {
    error: boolean('error', args.error)
  }
});

// inbox screen default state
export const Default = Template.bind({});
Default.args = {};

// inbox screen error state
export const Error = Template.bind({});
Error.args = {
  error: true
};

