import { Meta, Story } from '@storybook/angular';
import { actionsData, taskData } from '../01-task/task.stories';
import { text, withKnobs } from '@storybook/addon-knobs';

import { TaskComponent } from './task.component';

export default {
  title: '5: Addons/Task',
  component: TaskComponent,
  decorators: [withKnobs],
  argTypes: {
    task: {
      id: { control: 'id' },
      title: { control: 'title' },
      state: { control: 'state' }
    }
  },
} as Meta;

const Template: Story<TaskComponent> = (args: TaskComponent) => ({
  component: TaskComponent,
  props: {
    ...args,
    task: {
      id: text('id', String(...taskData.id)),
      title: text('title', String(...taskData.title)),
      state: text('state', String(...taskData.state))
    }
  }
});

export const Defaults = Template.bind({});
Defaults.props = {
  task: {
    id: text('id', '1'),
    title: text('title', 'Test Input'),
    state: text('state', 'Task_INBOX')
  },
  onPinTask: actionsData.onPinTask,
  onArchiveTask: actionsData.onArchiveTask,
};

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = (args: TaskComponent) => ({
  component: TaskComponent,
  props: {
    ...args,
    task: {
      title: text('title', longTitle),
    },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});
