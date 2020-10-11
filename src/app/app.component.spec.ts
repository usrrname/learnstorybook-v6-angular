import { AppComponent } from './app.component';
import { InboxScreenComponent } from './components/04-data/inbox-screen.component';
import { PureInboxScreenComponent } from './components/04-data/pure-inbox-screen.component';
import { TaskComponent } from './components/01-task/task.component';
import { TaskListComponent } from './components/02-task-list/task-list.component';
import { TestBed } from '@angular/core/testing';
import { render } from '@testing-library/angular';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent,
        InboxScreenComponent,
        TaskListComponent,
        TaskComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeDefined();
  });

  it(`should be no errors`, () => {
    const fixture = TestBed.createComponent(PureInboxScreenComponent);
    const app = fixture.componentInstance;

    expect(app.error).toBeNull();
  });
});

describe('AppComponent', () => {
  it('should render the component', async () => {
    await render(InboxScreenComponent);
  });
});
