import { PureTaskListComponent } from '../03-pure-task-list/pure-task-list.component';
import { TaskComponent } from '../01-task/task.component';
import { defaultTasksData } from '../03-pure-task-list/pure-task-list.stories';
import { render } from '@testing-library/angular';

describe('PureTaskList component', () => {
  it('renders tasks in the task list', async () => {
    const mockedActions = jest.fn();
    const tree = await render(PureTaskListComponent, {
      declarations: [TaskComponent],
      componentProperties: {
        tasksInOrder: defaultTasksData,
        loading: false,
        onPinTask: {
          emit: mockedActions,
        } as any,
        onArchiveTask: {
          emit: mockedActions,
        } as any,
      },
    });
    const component = tree.fixture.componentInstance;
    expect(component.tasksInOrder[0].id).toBe('1');
  });
});

