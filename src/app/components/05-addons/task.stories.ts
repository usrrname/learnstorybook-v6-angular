import {actionsData, taskData} from '../01-task/task.stories';
import { object, withKnobs } from '@storybook/addon-knobs';

import { TaskComponent } from './task.component';

export default {
  title: '5: Addons/Task',
  decorators: [withKnobs],
  component: TaskComponent,
  excludeStories: /.*Data$/,
};

export const Default = () => ({
  component: TaskComponent,
  props: {
    task: object('task', { ...taskData }),
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = () => ({
  component: TaskComponent,
  props: {
    task: {
      ...taskData,
      title: longTitle,
    },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});
