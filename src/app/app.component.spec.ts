import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';
import { InboxScreenComponent } from './components/04-data/inbox-screen.component';
import { Store } from '@ngxs/store';
import { TaskModule } from './components/01-task/task.module';
import { TestBed } from '@angular/core/testing';

describe('App Component', () => {

  beforeEach((() => {
    let store: Store;
    let actions$: Observable<any>;

    TestBed.configureTestingModule({
      declarations: [AppComponent, InboxScreenComponent],
      imports: [TaskModule]
    });

    store = TestBed.inject(Store);
    spyOn(store, 'select').and.returnValue(of(null)); // be sure to mock the implementation here
    spyOn(store, 'selectSnapshot').and.returnValue(null); // same here
  }));

  it('should render the component', () => {
    const fixture = TestBed.createComponent(InboxScreenComponent);
    expect(fixture.componentInstance).toBeDefined();
  });
});
