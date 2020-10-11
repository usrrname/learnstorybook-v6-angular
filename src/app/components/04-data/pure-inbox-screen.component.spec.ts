import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TaskComponent } from '../01-task/task.component';
import { TaskListComponent } from '../02-task-list/task-list.component';
import { render } from '@testing-library/angular';

describe('Pure Inbox Screen', () => {

  test('renders pure inbox screen', async () => {
    await render(PureInboxScreenComponent, {
      declarations: [TaskListComponent, TaskComponent],
    });
  });
});

